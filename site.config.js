module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: 'a77af7d7cde04f70a0a23f3dcd4518dd',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: '茱麗的學習筆記',
  domain: 'tw.julies.pro',
  author: '茱麗',

  // open graph metadata (optional)
  description: '茱麗的學習筆記: 登山旅遊、學術生活與開發日誌',
  socialImageTitle: '茱麗',
  socialImageSubtitle: 'Hello World! 👋',

  // social usernames (optional)
  twitter: 'julieeehsieh',
  github: 'juliespro',
  // linkedin: 'fisch2',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: null,

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null
}
