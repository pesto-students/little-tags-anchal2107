import React, { useEffect, useContext, useState } from "react";
import OrderCard from "./OrderCard";
import { useSelector } from "react-redux";
import FirebaseContext from "./../firebase/FirebaseContext";
import withAuthorization from "./../session/withAuthorization";
import { toDateTime } from "./../utililty/util";
import "./OrderHistory.scss";
import Pagination from "../product/Pagination";

const OrderHistory = () => {
  const firebase = useContext(FirebaseContext);
  const authUser = useSelector((state) => state.sessionState);
  const [orderData, setOrderData] = useState([]);
  const [pagination, setPagination] = useState({
    start: 0,
    end: 5,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

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
              i,
            },
          ]);
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //{id+i} for uniqueness of key
  const content = orderData
    .slice(pagination.start, pagination.end)
    .map(({ id, title, date, price, image, i }) => (
      <OrderCard
        key={id + i}
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
      <Pagination
        showPerPage={5}
        onPaginationChange={onPaginationChange}
        total={orderData.length}
      />
    </div>
  );
};

export default withAuthorization(OrderHistory);
