import React from 'react'
import { Helmet } from 'react-helmet';

const Head = () => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta itemprop="image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website"/>
    </Helmet>
  );
}

export default Head;