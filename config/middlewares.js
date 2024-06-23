module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  {
    name: 'strapi::poweredBy',
    config: {
      poweredBy: 'Morphose records and agency'
    },
  },
  'strapi::logger',
  'strapi::query',
  'strapi::body',{
    name: 'strapi::session',
    config: {
      rolling: true,
      renew: true
    },
  },
  'strapi::favicon',
  'strapi::public',
];
