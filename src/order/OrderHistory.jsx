import React, { useEffect, useContext, useState } from "react";
import OrderCard from "./OrderCard";
import { useSelector } from "react-redux";
import FirebaseContext from "./../firebase/FirebaseContext";
import withAuthorization from "./../session/withAuthorization";
import { toDateTime } from "./../utililty/util";
import "./OrderHistory.scss";

const OrderHistory = () => {
  const firebase = useContext(FirebaseContext);
  const authUser = useSelector((state) => state.sessionState);
  const [orderData, setOrderData] = useState([]);
  useEffect(() => {
    firebase.getOrderData(authUser.authUser.uid).then((snapshot) => {
      const order = snapshot.val();
      for (let i in order) {
        for (let j of order[i]) {
          const { id, title, image, price } = j;
          setOrderData((arr) => [
            ...arr,
            {
              date: toDateTime(i),
              id,
              title,
              price,
              image,
            },
          ]);
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const content = orderData.map(({ id, title, date, price, image }) => (
    <OrderCard
      key={id}
      productId={id}
      title={title}
      image={image}
      price={price}
      date={date}
    />
  ));
  return (
    <div className="order-history-container">
      <h1>Your Orders</h1>
      <div className="flex flex-col">{content}</div>
    </div>
  );
};

export default withAuthorization(OrderHistory);
