import React, {Component, useState} from "react";
import "./../styles/App.css";
function App() {
  const [isButtonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setButtonClicked(true);
  };

  return (
    <div id="main">
          <button id="click" onClick={handleButtonClick}>
              Click Me
              </button>
              {isButtonClicked && (
                  <p id="para">
                    Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
                  </p>
            )}
          </div>
      );
    }

export default App;
