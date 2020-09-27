import React from "react";
import MainGridElementCard from "./MainGridElement/MainGridElementCard";
import TagsElement from "./TagsElement/TagsElement";
import Aux from "../../hoc/Aux";

const mainGridElements = (props) => {
  const menu = props.dataTags.map((item, i) => {
    return <TagsElement key={i} info={item} />;
  });

  const itemsTags = props.dataTags.map((itemTags1, i) => {
    console.log(itemTags1.title);
    return itemTags1.title.toLowerCase();
  });

  console.log(props.dataTags);
  console.log(props.data);

  const itemsTags2 = props.data.map((itemTags2, i) => {
    // itemTags2.tags.map((item, i) => {
    //   console.log(item);
    //   return item;
    // });
    return itemTags2.tags;
  });

  // const tagsItem3 = itemsTags2.map((item, i) => {

  //   console.log(item);
  //   return itemsTags2;
  // });

  const tagsItem3 = itemsTags2[0].concat(...itemsTags2);

  const items = props.data.map((item, i) => {
    const itemTagsTags = itemsTags2[i];
    const itemTagsTags2 = itemTagsTags[i];
    console.log(itemsTags2[i]);
    console.log(itemTagsTags2);
    console.log(itemsTags[i]);
    if (itemsTags[i].includes(itemsTags2[i])) {
      return <MainGridElementCard key={i} info={item} />;
    } else {
      // console.log("epic fail");
    }
  });

  console.log(itemsTags);
  console.log(itemsTags2);
  console.log(tagsItem3);
  console.log(items);

  return (
    <Aux>
      <div className="main-grid">
        <div className="tags__all">{menu}</div>
        <div className="main-grid__all">
          <div className="main-grid__row">
            <div className="main-grid__col-1-of-3">{items}</div>
          </div>
        </div>
      </div>
    </Aux>
  );
};

export default mainGridElements;
