import React from "react";
import Person from "./Components/Person.jsx";
import Product from "./Components/Product.jsx";

export default function App() {
  const person = { name: "JENISH", age: 21 };
  const product = { name: "Chalanger", price: "$120000" };
  return (
    <>
      <Person person={person} />
      <Product product={product} />
    </>
  );
}
