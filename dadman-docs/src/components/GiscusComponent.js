import React from 'react';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';

// ---------------------------------------------------------------------------
// Giscus configuration
//
// repo and repoId are already filled in.
//
// To complete setup:
//   1. Go to github.com/jonschumann/dadmanual → Settings → Features
//      and tick the "Discussions" checkbox.
//   2. Visit https://giscus.app, enter jonschumann/dadmanual, choose the
//      "General" category (or create a "Page Comments" category), and copy
//      the categoryId value shown in the generated snippet.
//   3. Replace CATEGORY_ID_PLACEHOLDER below with that value and push.
// ---------------------------------------------------------------------------

const GISCUS_CONFIG = {
  repo: 'jonschumann/dadmanual',
  repoId: 'R_kgDOS13crw',
  category: 'General',
  categoryId: 'DIC_kwDOS13cr84C_EiM',
  mapping: 'pathname',       // each page gets its own discussion thread
  strict: '0',
  reactionsEnabled: '1',
  emitMetadata: '0',
  inputPosition: 'top',
  lang: 'en',
};

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  // Don't render if categoryId hasn't been filled in yet
  if (GISCUS_CONFIG.categoryId === 'CATEGORY_ID_PLACEHOLDER') {
    return null;
  }

  return (
    <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid var(--ifm-color-emphasis-300)' }}>
      <Giscus
        {...GISCUS_CONFIG}
        theme={colorMode === 'dark' ? 'dark_dimmed' : 'light'}
      />
    </div>
  );
}
