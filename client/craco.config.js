const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#2CEAA3',
                            '@layout-header-background': '#28965A',

                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};