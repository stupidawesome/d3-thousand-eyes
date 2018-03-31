const genDefaultConfig = require('@storybook/angular/dist/server/config/defaults/webpack.config.js');
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

function regexSame(r1, r2) {
    if (r1 instanceof RegExp && r2 instanceof RegExp) {
        var props = ["global", "multiline", "ignoreCase", "source"];
        for (var i = 0; i < props.length; i++) {
            var prop = props[i];
            if (r1[prop] !== r2[prop]) {
                return(false);
            }
        }
        return(true);
    }
    return(false);
}



module.exports = (baseConfig, env) => {
    const config = genDefaultConfig(baseConfig, env);

    // Overwrite .css rule
    const cssRule = config.module.rules.find(rule => rule.test && rule.test.toString() === '/\\.css$/');
    if (cssRule) {
        cssRule.exclude = /\.component\.css$/;
    }

    // Add .scss rule
    config.module.rules.unshift({
        test: /\.scss$/,
        loaders: ['raw-loader', 'sass-loader'],
    });

    config.resolve.plugins = [
        new TsconfigPathsPlugin({
            baseUrl: './src',
            configFile: "tsconfig.json"
        })
    ]

    const tsRule = config.module.rules.find((rule) => regexSame(rule.test, /\.ts?$/));
    const tsRuleIndex = config.module.rules.indexOf(tsRule)

    config.module.rules[tsRuleIndex] = {
        test: /\.ts?$/,
        loader: tsRule.loaders[0],
        options: {
            compilerOptions: {
                strict: false
            }
        }
    }

    config.module.rules.push({
        test: /\.ts?$/,
        loader: tsRule.loaders[1]
    })

    return config;
};
