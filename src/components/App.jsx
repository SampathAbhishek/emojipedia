import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia.js";

const createEmogiCard = (card) => {
  return (
    <Entry
      key={card.id}
      emoji={card.emoji}
      name={card.name}
      meaning={card.meaning}
    />
  );
};

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEmogiCard)}</dl>
    </div>
  );
}

export default App;
