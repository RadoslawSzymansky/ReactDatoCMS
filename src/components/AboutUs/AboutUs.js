import React, { useEffect, useState } from "react";
import client from '../../client';

import AboutUsWrapper from './styled/index';
import Container from '../../primitives/Container';

import { StructuredText } from "react-datocms";


const AboutUs = () => {
    const [isFetching, setIsFetching] = useState(false);
    const [pageContent, setPageContent] = useState(null);

    useEffect(
        () => {
          setIsFetching(true);
         
          const variables = {
            endpoint: '/about_us'
          };
          const fetchData = async () => {
            try {
              const result = await client.request(query, variables);
              setPageContent(result.page.content);
              setIsFetching(false);
            } catch (error) {
              console.error(JSON.stringify(error, undefined, 2));
              setIsFetching(false);
            }
          };
          fetchData();
        },
        []
      );

      console.log('content', pageContent)

    return (
        <AboutUsWrapper>
            <Container >
                o nas
                <StructuredText data={pageContent} />
            </Container>
        </AboutUsWrapper>
    )
};

export default AboutUs;

const query = `
query MyQuery($endpoint: String!) {
    page(filter: {endpoint: {eq: $endpoint}}) {
      id
      endpoint
      titleShowed
      title
      updatedAt
      dodatkowyTekst
      content {
        value
      }
    }
  }  
`;