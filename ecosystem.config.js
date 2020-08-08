// The purpose of this file is covered in CH 05, Video 06
module.exports = {
  apps: [
    {
      name: 'meetup',
      script: 'bin/www',
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
  deploy: {
    production: {
      user: 'forge',
      host: 'www.keown.digital',
      ref: 'origin/master',
      repo: 'git@gkithub.com/keownrwk/meetup.git',

      // Make sure this directory exists on your server or change this entry to match your directory structure
      path: '/home/forge/www.keown.digital',

      'post-deploy':
        'cp ../.env ./ && npm install && pm2 startOrRestart ecosystem.config.js --env production',
    },
  },
};
