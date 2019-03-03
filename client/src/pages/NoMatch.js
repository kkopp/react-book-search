import React from "react";
import Jumbotron from "../components/Jumbotron";

function NoMatch() {
  return (
    <div class="container">
      <div class="row">
        <div class="col">
          <Jumbotron>
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Jumbotron>
        </div>
      </div>
    </div>
  );
}

export default NoMatch;
