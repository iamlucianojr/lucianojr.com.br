const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Luciano Jr :: Software Developer', // Navigation and Site Title
  siteTitleAlt: 'Luciano Jr', // Alternative Site title for SEO
  siteUrl: 'https://lucianojr.com.br', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo-1024.png', // Used for SEO and manifest
  siteDescription: 'One page website CV',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@atomodebohr', // Twitter Username
  ogSiteName: 'atomodebohr', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
