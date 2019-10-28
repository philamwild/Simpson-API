import React from "react";
import "./App.css";
import Quoteapi from "./components/Quoteapi";
import axios from "axios";

const sampleQuote = {
  quote: "By chilling my loins I increase the chances of impregnating my wife.",
  character: "Apu Nahasapeemapetilon",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
  characterDirection: "Left"
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { simpson: sampleQuote };
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    axios
      .get("https://quests.wilders.dev/simpsons-quotes/quotes")
      .then(response => response.data)
      .then(data => {
        this.setState({
          simpson: data[0]
        });
      });
  }

  render() {
    return (
      <div className="App">
        <Quoteapi simpson={this.state.simpson}></Quoteapi>
        <button type="button" onClick={this.getQuote}>
          Get quotes
        </button>
      </div>
    );
  }
}

export default App;
