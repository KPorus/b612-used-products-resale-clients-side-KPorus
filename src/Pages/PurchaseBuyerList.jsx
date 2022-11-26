import React from "react";

const PurchaseBuyerList = ({items}) => {
    let {phone,name,productName,email,price} = items
  return (
    <tr>
      <td>{productName}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>$ {price}</td>
    </tr>
  );
};

export default PurchaseBuyerList;
