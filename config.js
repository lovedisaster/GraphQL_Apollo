const path = require('path');
const appRoot = path.resolve(__dirname);

const env_config = {
    paths: {
        server_pages: path.join(appRoot, 'server/server_pages')
    },
    isProd: (process.env.NODE_ENV === 'production')
};

// Return the env settings
module.exports = env_config;