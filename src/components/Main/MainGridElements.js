import React from "react";
import MainGridElementCard from "./MainGridElement/MainGridElementCard";
import TagsElement from "./TagsElement/TagsElement";
import Aux from "../../hoc/Aux";

const mainGridElements = (props) => {
  //------------TAGS-------------------------------------------
  // all individual menu items from Tags.json
  // ONLY TAGS
  const tagsMenu = props.dataTags.map((item, i) => {
    return item.title.toLowerCase();
  });

  // arrays of the tags from cards, data from Data.json
  // ARRAYS WITH ONLY TAGS
  const tagsCard = props.data.map((item, i) => {
    return item.tags;
  });

  // individual elements of the card tags' arrays all together
  // ALL ARRAY TAGS INDIVIDUAL
  const singleTagsCard = tagsCard[0].concat(...tagsCard);

  //------------CARDS-------------------------------------------
  // all cards' info
  const allCards = props.data.map((item, i) => {
    return <MainGridElementCard key={i} info={item} />;
  });

  // show cards only including certain tags
  const selectedCards = allCards.map((item, i) => {
    console.log(item);
    // loop array with tags
    const x = item.props.info.tags;
    console.log(x);
    // menu items array
    const y = tagsMenu.filter((item, i) => {
      return item;
    });
    console.log(y);
    console.log(y[i]);
    //
    if (x.includes(y[i])) {
      return item;
    }
  });
  console.log(selectedCards);

  //------------MENU-------------------------------------------
  // all items and info from Tags.json for menu barre
  // MENU ON THE LEFT
  const menu = props.dataTags.map((item, i) => {
    return (
      <div className="tags__single" onClick={selectedCards}>
        <TagsElement key={i} info={item} />
      </div>
    );
  });

  //------------LOGS-------------------------------------------
  // menu items data
  console.log(props.dataTags);
  // card items data
  console.log(props.data);
  // all menu items
  console.log(menu);
  // individual menu items
  console.log(tagsMenu);
  // arrays with tags of the cards
  console.log(tagsCard);
  //
  console.log(singleTagsCard);
  // grid with all the card items
  console.log(allCards);

  return (
    <Aux>
      <div className="main-grid">
        <div className="tags__all">{menu}</div>
        <div className="main-grid__all">
          <div className="main-grid__row">
            <div className="main-grid__col-1-of-3">{selectedCards}</div>
          </div>
        </div>
      </div>
    </Aux>
  );
};

export default mainGridElements;
