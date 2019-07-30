
const path = require('path');


const { WEB_URL, stage } = require('./envConfig');
process.env.REACT_APP_URL = WEB_URL;




module.exports = function override(config, env) {
    // do stuff with the webpack config...
    if (config.mode === 'production') {
        const paths = require('react-scripts/config/paths');
        paths.appBuild = path.join(path.dirname(paths.appBuild), `build/${stage}`);
        config.output.path = path.join(path.dirname(config.output.path), `build/${stage}`);
    }

    return config;
};


