module.exports = {
    "env": {
        "browser": true,
        "jasmine": true,
        "protractor": true
    },
    "parseOptions":{
        "ecmaVersion": 5
    },
    "extends": ["eslint:recommended", "angular"],
    "rules": {
        "indent": [
            "off",
            "tab"
        ],
        "linebreak-style": [
            "off",
            "windows"
        ],
        "quotes": [
            "off",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "angular/no-service-method": "off"
    },
    "globals": {
        "smg360": true,
        'google': true,
        'require': true,
        'HelperFunctions':true,
        'inject':true,
        'module':true
    }
};