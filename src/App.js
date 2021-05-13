import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./blocks/Header/index";
import Menu from "./components/Menu/Menu";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
// import About from "./About";
// import Recipe from "./Recipe";
import { Counter } from './features/counter/Counter';
import GlobalStyles from './app/theme/globalStyles';
import ResetCss from './app/theme/resetCss';
import Typography from './app/theme/Typography';

const App = () => (
  <Router>
    <ResetCss />
    <Typography />
    <GlobalStyles />
    <Header>
      <Header.Title>Tytuł nagłówka</Header.Title>
      <Header.Nav><Menu></Menu></Header.Nav>
    </Header>
    <main>
      <Route exact path="/" component={Home} />
      {/* <Route path="/recipes/:slug" component={Recipe} /> */}
      {/* <Route path="/about" component={About} /> */}
      <Route path="/counter" component={Counter} />
    </main>
    <Footer />
  </Router>
);

export default App;
