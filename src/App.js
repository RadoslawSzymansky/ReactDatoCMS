import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {ThemeProvider} from 'styled-components';

import Header from "./components/Header/index";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import { Counter } from './features/counter/Counter';
import GlobalStyles from './app/theme/globalStyles';
import ResetCss from './app/theme/resetCss';
import Typography from './app/theme/Typography';

import theme from './app/theme/theme';

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <ResetCss />
      <Typography />
      <GlobalStyles />
      <Header
        title="Velkommen til Folldal"
      />
      <main>
        <Route exact path="/" component={Home} />
        {/* <Route path="/recipes/:slug" component={Recipe} /> */}
        {/* <Route path="/about" component={About} /> */}
        <Route path="/counter" component={Counter} />
        <Route path="/about_us" component={AboutUs} />
      </main>
      <Footer />
    </ThemeProvider>
  </Router>
);

export default App;
