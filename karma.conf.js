module.exports = function(config) {
    config.set({
        plugins:[
            'karma-jasmine',
            'karma-chrome-launcher'
        ],
        files:[
            'https://ajax.googleapis.com/ajax/libs/angularjs/1.4.9/angular.js',
            'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.9/angular-resource.min.js',
            'https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js',
            'https://cdn.rawgit.com/angular-ui/bower-ui-grid/master/ui-grid.min.js',
            'app/*-module.js',
            'app/**/*.js',
            'app/**/*.spec.js'
        ],
        exclude:['dist/**/*.min.js'],
        frameworks: ['jasmine'],
        browsers: ['chrome_without_security'],
        customLaunchers: {
            chrome_without_security: {
                base: 'Chrome',
                flags: ['--disable-web-security']
            }
        },
        logLevel: config.LOG_WARN,
        concurrency: Infinity,
        reporters:['dots'],
        preprocessors:{'./app/**/*.js':[]}
    });
};


