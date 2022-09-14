const config = require(`../../.ghost.json`).production;
module.exports = {
    siteUrl:
        process.env.NODE_ENV === `production`
            ? process.env.SITE_URL || config.siteUrl || `https://cryptoserie.com`
            : `https://www.cryptoserie.com`, // Site domain. Do not include a trailing slash!

    postsPerPage: 75, // Number of posts shown on paginated pages (changes this requires sometimes to delete the cache)

    siteTitleMeta: ``, // This allows an alternative site title for meta data for pages.
    siteDescriptionMeta: `Cryptoserie est le plus grand contenu crypto en français sur le web, allant de l'actualité crypto à la blockchain, bitcoin, portefeuilles, bots et échanges.`, // This allows an alternative site description for meta data for pages.

    shareImageWidth: 1000, // Change to the width of your default share image
    shareImageHeight: 523, // Change to the height of your default share image

    shortTitle: `Cryptoserie`, // Used for App manifest e.g. Mobile Home Screen
    siteIcon: `favicon.png`, // Logo in /static dir used for SEO, RSS, and App manifest
    backgroundColor: `#e9e9e9`, // Used for Offline Manifest
    themeColor: `#15171A`, // Used for Offline Manifest
};
