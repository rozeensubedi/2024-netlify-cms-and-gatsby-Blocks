import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { graphql } from 'gatsby';

const SearchPage = ({ data, location }) => {
  if (!location || !location.search) {
    return null;
  }

  const searchQuery = location.search.substring(1); 

  
  const searchMappings = {
    home: '/',
    about: '/about-us',
    services: '/services',
    blog: '/blog',
    pricing: '/page-2',
  };


  const normalizedQuery = searchQuery.toLowerCase().trim();

  
  const matchingPath = searchMappings[normalizedQuery];

  return (
    <Layout>
      <Seo title={`Search Results for "${normalizedQuery}"`} />
      <div>
        <h1>Search Results for "{normalizedQuery}"</h1>
        {matchingPath ? (
          <p>Navigating to {matchingPath}...</p> 
        ) : (
          <p>No matching page found for "{normalizedQuery}"</p> 
        )}
      </div>
    </Layout>
  );
};

export default SearchPage;

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
          }
          excerpt(pruneLength: 200)  
        }
      }
    }
  }
`;
