import { FirebaseContext } from "./Firebase";
import { useContext } from "react";

const InsertOrUpdate = (nodeName, object) => {
  const FirebaseDBRef = useContext(FirebaseContext).FirebaseDBRef();
  FirebaseDBRef.child(nodeName).push(object, (err) => {
    if (err) {
      console.log(` Error from InsertOrUpdate FirebaseCrud ${err}`);
    }
  });
};

const InsertScalar = (nodeName, object) => {
  const FirebaseDBRef = useContext(FirebaseContext).FirebaseDBRef();
  const keyID = FirebaseDBRef.child(nodeName).push().key;
  let update = {};
  update[`/${nodeName}/${keyID}`] = object;
  FirebaseDBRef.update(update);
  return { ID: keyID, Data: object };
};
const DeleteObject = (nodeName, keyID) => {
  const FirebaseDBRef= useContext(FirebaseContext).FirebaseDBRef();
  const IdToDelete = `/${nodeName}/${keyID}`;
  FirebaseDBRef.child(IdToDelete).remove();
};

const GetLastInsertedData = (nodeName,childKey)=>{
  const FirebaseDBRef = useContext(FirebaseContext)
  .FirebaseDBRef()
  .child(`${nodeName}`);
  FirebaseDBRef.on("child_added", function(snapshot, childKey) {
    var newPost = snapshot.val();
    console.log("data " + JSON.stringify( newPost));   
    console.log("Previous ID: " + childKey);
  });
}

const SelectAll = (nodeName) => {
  //Tested Working with Console
  const FirebaseDBRef = useContext(FirebaseContext)
    .FirebaseDBRef()
    .child(`${nodeName}`);
  // var databaseRef = FirebaseDBRef(`${nodeName}/`);
  FirebaseDBRef.on(
    "value",
    function (snapshot) {  
      return JSON.stringify(snapshot.val());
      // this console gives you output need to check return statement of will use useState here or calling component
     // console.log(`result : ${JSON.stringify( snapshot.val())}`);
    },
    function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    }
  );
};

const SelectWithKeyAndValue = (nodeName, matchKey, matchValue) => {
  //Tested Working
  const matchKeyPass =`${matchKey}`
  console.log(`SelectWithKeyAndValue: ${matchKeyPass}  ${matchValue} `);
  const FirebaseDBRef = useContext(FirebaseContext)
  .FirebaseDBRef(nodeName)

  FirebaseDBRef
  .orderByChild(matchKeyPass)
  .equalTo(matchValue)
  .on(
    "value",
    function (snapshot) {  
     // this console gives you output need to check return statement of will use useState here or calling component
    // console.log(`result SelectWithKeyAndValue: ${JSON.stringify( snapshot.val())}`);
     return JSON.stringify( snapshot.val());
    },
    function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    }
  );


};
export { InsertOrUpdate, InsertScalar, DeleteObject, SelectAll, SelectWithKeyAndValue, GetLastInsertedData };
