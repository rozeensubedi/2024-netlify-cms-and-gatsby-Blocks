import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as styles from './banner.module.css';

const BlogBanner = ({ data }) => {
  const image = getImage(data.bannerImage);

  return (
    <div className={styles.siteBannersection}>
      <div className={styles.bannerContainer}>
      <div className={styles.wrapper}>
        <div className={styles.bannerLeftcontnet}>
          <span>{data.bannerSubtitle}</span>
          <h2>{data.bannerTitle}</h2>
          <p>{data.bannerDescription}</p>
          <a href="/blog" className={styles.sectionButton}>About us</a>
        </div>
        <div className={styles.bannerRightcontnet}>
          {image && (
            <GatsbyImage alt={data.bannerTitle} image={image} loading="eager" />
          )}
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default BlogBanner;



























// import React from 'react';
// import { GatsbyImage, getImage } from 'gatsby-plugin-image';
// import * as styles from './banner.module.css';

// const BlogBanner = ({ data }) => {
//   const image = getImage(data.bannerImage);

//   return (
//     <div className={styles.siteBannersection}>
//       <div className={styles.wrapper}>
//         <div className={styles.bannerLeftcontnet}>
//           <span>{data.bannerSubtitle}</span>
//           <h2>{data.bannerTitle}</h2>
//           <p>{data.bannerDescription}</p>
//           <a href="/about-us" className={styles.sectionButton}>About us</a>
//         </div>
//         <div className={styles.bannerRightcontnet}>
//           {image && (
//             <GatsbyImage alt={data.bannerTitle} image={image} loading="eager" />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogBanner;












































