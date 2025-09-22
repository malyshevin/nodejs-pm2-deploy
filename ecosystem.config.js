require('dotenv').config();

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REF = 'origin/master',
} = process.env;

module.exports = {
  apps : [{
    name: 'backend',
    script: 'backend/dist/app.js',
    watch: 'backend'
  }],

  deploy : {
    production : {
      user : DEPLOY_USER,
      host : DEPLOY_HOST,
      ref  : DEPLOY_REF,
      repo : 'https://github.com/malyshevin/nodejs-pm2-deploy',
      path : DEPLOY_PATH,
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
