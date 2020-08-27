import React from "react";
import MainGridElementCard from "./MainGridElement/MainGridElementCard";
import Aux from "../../hoc/Aux";

const mainGridElements = (props) => (
  <Aux>
    <div className="main-grid">
      <div className="main-grid__all">
        <div className="main-grid__row">
          <div class="main-grid__col-1-of-3">
            <MainGridElementCard />
          </div>
          <div class="main-grid__col-1-of-3">
            <MainGridElementCard />
          </div>
          <div class="main-grid__col-1-of-3">
            <MainGridElementCard />
          </div>
        </div>

        <div className="main-grid__row">
          <div class="main-grid__col-1-of-3">
            <MainGridElementCard />
          </div>
          <div class="main-grid__col-1-of-3">
            <MainGridElementCard />
          </div>
          <div class="main-grid__col-1-of-3">
            <MainGridElementCard />
          </div>
        </div>

        <div className="main-grid__row">
          <div class="main-grid__col-1-of-3">
            <MainGridElementCard />
          </div>
          <div class="main-grid__col-1-of-3">
            <MainGridElementCard />
          </div>
          <div class="main-grid__col-1-of-3">
            <MainGridElementCard />
          </div>
        </div>
      </div>
    </div>
  </Aux>
);

export default mainGridElements;
