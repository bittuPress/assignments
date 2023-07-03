import React, { useState } from "react";
import { BsEmojiAngry, BsHandThumbsUp } from "react-icons/bs";
// import "./App.css";
const App = () => {
  //like & unlike button
  const [likeVal, setLikeVal] = useState(0);
  const [reaction, setReaction] = useState("Like");
  const [btnActive, setBtnActive] = useState(false); //change the button color
  const [reactionDiv, setReactionDiv] = useState(false);
  const likeItem = () => {
    if (likeVal > 0) {
      setBtnActive(btnActive);
      setLikeVal(0);
      setReaction("Like"); //setlike to the button
    } else {
      setBtnActive(!btnActive);
      setLikeVal(1);
      setReaction("Unlike"); //set unlike to the button
    }
  };

  //get reaction by action
  const getReactionIcon = () => {
    if (reaction === "Like") {
      return <BsHandThumbsUp />;
    } else if (reaction === "Angry") {
      return <BsEmojiAngry />;
    }
  };
  return (
    <div className="App">
      <div>
        <p className="like">
          <span style={{ padding: "5px" }}>{likeVal}</span>
          Likes
          <button onClick={likeItem} onMouseOver={() => setReactionDiv(true)}>
            {getReactionIcon()}
          </button>
        </p>
        {reactionDiv ? (
          <div>
            <ul>
              <li>
                <BsHandThumbsUp
                  onClick={() => setReaction("Like")}
                  title="like"
                  color={null}
                />
                Like
              </li>
              <li>
                <BsEmojiAngry
                  onClick={() => setReaction("Angry")}
                  title="angry"
                  color={null}
                />
                angry
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default App;
