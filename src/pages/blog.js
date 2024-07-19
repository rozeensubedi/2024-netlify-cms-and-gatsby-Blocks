import React from 'react';
import '../css/blog.css';
import Blog1 from '../images/blog-image/blog1.jpg';
import Blog2 from '../images/blog-image/blog2.jpg';
import { FaFacebookSquare, FaTwitter, FaLinkedin, FaReddit } from "react-icons/fa";
import Layout from '../components/layout';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { graphql } from 'gatsby';
import Seo from '../components/seo';

const Blog = ({ data }) => {
  return (
    <Layout>
      
      <Header data={data} />
      <div className="page-content-wrapper blog-details-page-content sp-y">
        <div className="container">
          <article className="blog-post-details">
            <figure className="blog-post-thumb">
              <img src={Blog1} alt="RS Alpha" />
            </figure>
            <div className="author-info">
              <div className="author-thumb">
                <img src={Blog2} alt="RS Alpha" />
              </div>
              <div className="author-txt">
                <h5>RS Alpha <span className="designation">Senior Writer</span></h5>
              </div>
            </div>
            <h2 className="h3">Workshop</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam assumenda culpa cumque debitis dignissimos.</p>
            <blockquote>
              <p>Dolor dolores doloribus ducimus fuga iusto magni maiores minus.</p>
            </blockquote>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam assumenda culpa.</p>
            <div className="share-article text-center">
              <h6>Share this article</h6>
              <div className="member-social-icons">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <FaFacebookSquare />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
                <a href="https://www.reddit.com/" target="_blank" rel="noopener noreferrer">
                  <FaReddit />
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
      <Footer data={data} />
    </Layout>
  );
};

export const Head = () => <Seo title="Blog - Workshop" />;

export const query = graphql`
  query {
    serviceInfo: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            serviceTitle
            serviceDescription
          }
        }
      }
    }
    testimonialInfo: allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            link
            content
          }
        }
      }
    }
    footerInfo: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            footerTitle
            footerContent
            socialIcons {
              socialLink
              socialIconClass
            }
            footerField {
              fieldTitle
              footerField {
                fieldItemName
                fieldItemLink
              }
            }
          }
        }
      }
    }
    siteLogo: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            logoTitle
            logoImage {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;

export default Blog;
