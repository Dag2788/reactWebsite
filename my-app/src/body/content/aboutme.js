import React from "react";
import me from "../../pictures/myFace3.png";

function AboutMe() {
  let facts = [
    {
      tittle: "Interets",
      about: "Technology and Design."
    },
    {
      tittle: "Curently Reading",
      about:
        "Vue.js documentation. Differences between Angular, React, and Vue.js."
    },
    {
      tittle: "Hobbies",
      about: "Weight Training. Cycling and Mountain Biking. Tennis."
    }
  ];

  return (
    <div class="section white">
      <div class="row container">
        <h1 class="col s12 m4 push-m4 grey-text text-darken-3 lighten-3 fontLobster textAlignCenter">
          About Me:
        </h1>
      </div>
      <div class="row container">
        <div className="col s12 m12 l6">
          <div class="col s12 m6 push-m3 l8 marginTopSm">
            <div class="card">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src={me} />
              </div>
            </div>
          </div>
        </div>
        <div className="col s12 m12 l6">
          {facts.map(val => {
            return (
              <h4 class="grey-text text-darken-3 lighten-3 fontTinos ">
                <h4 className="fontLobster">{val.tittle}: </h4> {val.about}
              </h4>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
