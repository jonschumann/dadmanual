import React from 'react';
import Footer from '@theme-original/DocItem/Footer';
import GiscusComponent from '@site/src/components/GiscusComponent';

// Swizzled DocItem/Footer — renders the original Docusaurus footer, then
// appends the Giscus discussion widget below it on every doc page.
export default function FooterWrapper(props) {
  return (
    <>
      <Footer {...props} />
      <GiscusComponent />
    </>
  );
}
