import React from "react";
import GlobalStyle from "./components/GlobalStyle";

//Globale Style
//Import pages
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="App">
      <h1>Yanagi Sushi</h1>
      <GlobalStyle />
      <AboutUs />
    </div>
  );
}

export default App;
