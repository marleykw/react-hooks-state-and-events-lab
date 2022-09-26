import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  let [currentFilter, setFilter] =  useState("");
  let [filteredItemList, setFilteredList] = useState(items)

  const handleChange = (event) => {
    setFilter(event.target.value);
    const newItemList = items.filter((item) => item.category === event.target.value);
    setFilteredList(newItemList);
  };
console.log(items)


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItemList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
        }


export default ShoppingList;
