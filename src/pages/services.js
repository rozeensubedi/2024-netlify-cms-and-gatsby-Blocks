import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import OurServices from "../components/our-services/our-services";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import OurServiceBanner from "../components/banner/our-service-banner";
import { graphql } from "gatsby";

const ServicesPage = ({ data }) => (
  
  <Layout data={data}>
    <Seo title="Our Services" />
    
    {/* <Header data={data} /> */}
    <OurServiceBanner data={data} />
    <OurServices data={data} />
    {/* <Footer data={data} /> */}
  </Layout>
);

export const Head = () => <Seo title="Our Services" />;

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
      ourServiceBannerContent: markdownRemark(fileAbsolutePath: { regex: "/content/banner/ourServiceBanner-content.md/" }) {
        frontmatter {
          bannerSubtitle
          bannerTitle
          bannerDescription
          bannerImage {
            childImageSharp {
              gatsbyImageData(width: 600)
            }
          }
        }
      }
  }
`;

export default ServicesPage;



























// import React from "react";
// import Layout from "../components/layout";
// import Seo from "../components/seo";
// import OurServices from "../components/our-services/our-services";
// import Header from "../components/header/header"; 
// import Footer from "../components/footer/footer"; 

// import OurServiceBanner from "../components/banner/our-service-banner";
// import { graphql } from "gatsby";

// const ServicesPage = ({ data }) => (
//   <Layout>
//     <Header data={data.siteHeader} showBanner={false} /> 
//     <OurServiceBanner data={data} />
//     <OurServices data={data} />
//     <Footer data={data} /> 
//   </Layout>
// );

// export const Head = () => <Seo title="Our Services" />;

// export const query = graphql`
//   query {
//     serviceInfo: allMarkdownRemark {
//       edges {
//         node {
//           frontmatter {
//             serviceTitle
//             serviceDescription
//           }
//         }
//       }
//     }
//     testimonialInfo: allMarkdownRemark {
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             link
//             content
//           }
//         }
//       }
//     }
//     footerInfo: allMarkdownRemark {
//       edges {
//         node {
//           frontmatter {
//             footerTitle
//             footerContent
//             socialIcons {
//               socialLink
//               socialIconClass
//             }
//             footerField {
//               fieldTitle
//               footerField {
//                 fieldItemName
//                 fieldItemLink
//               }
//             }
//           }
//         }
//       }
//     }
//     siteLogo: allMarkdownRemark {
//       edges {
//         node {
//           frontmatter {
//             logoTitle
//             logoImage {
//               childImageSharp {
//                 gatsbyImageData
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

// export default ServicesPage;
