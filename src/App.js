import React, { useState } from "react";
import Data from "./data.json";
import MainGridElements from "./components/Main/MainGridElements";
import Summary from "./components/Summary/Summary";
import TagsElements from "./components/Tags/TagsElements";
import NavigationElements from "./components/Navigation/NavigationElements";
import Aux from "./hoc/Aux";

const App = (props) => {
  const [data, setData] = useState([{ data: Data }, { filteredData: [] }]);
  //   const [userText, setUserText] = useState("write something here")
  const [count, setCount] = useState(0);

  const newData = () => {
    console.log("test");
    let newArr = data.map((item) => {
      item = data.id;
      newArr.push(item);
    });
  };

  return (
    <Aux>
      <NavigationElements />
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
      <div className="summary">
        <Summary />
      </div>

      <div className="tags">
        <TagsElements />
      </div>
      <MainGridElements className="main-grid-elements_cards" data={Data} />
    </Aux>
  );
};

export default App;
