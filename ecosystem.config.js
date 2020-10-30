module.exports = {
    apps : [
        {
            name: "aws-test",
            script: "./dist/main.js",
            watch: false,
            env: {
                "PORT": 3000,
                "NODE_ENV": "development"
            },
            env_production: {
                "PORT": 3000,
                "NODE_ENV": "production",
            },
            env_production_test: {
                "PORT": 3000,
                "NODE_ENV": "production",
            }
        }
    ]
};
