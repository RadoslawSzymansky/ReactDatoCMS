import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from "../../client";
import qs from "qs";
import { Image } from "react-datocms"

import Home from './styled/index';
import Container from '../../primitives/Container';
import { H1 } from '../../primitives/H';

const HomeComponent = props => {

  return (
    <Home>
      <Container>
        <H1>Home</H1>
        

      </Container>
    </Home>
  );
};

export default HomeComponent;
