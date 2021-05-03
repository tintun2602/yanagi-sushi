import React from "react";
import GlobalStyle from "./components/GlobalStyle";

//Globale Style
//Import pages
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <h1>Yanagi Sushi</h1>
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
