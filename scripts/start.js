const { exec } = require('child_process');

const createVolume =
  'docker volume create nestjs-starter-with-db-postgres-data';
const startContainers = 'docker-compose up -d';
const checkContainers = 'docker-compose ps';

exec(createVolume, (err, stdout, stderr) => {
  if (err) {
    console.error(`Error creating volume: ${stderr}`);
    return;
  }
  console.log(stdout);

  exec(startContainers, (err, stdout, stderr) => {
    if (err) {
      console.error(`Error starting containers: ${stderr}`);
      return;
    }
    console.log(stdout);

    exec(checkContainers, (err, stdout, stderr) => {
      if (err) {
        console.error(`Error checking containers: ${stderr}`);
        return;
      }
      if (stdout.includes('Up')) {
        console.log('Containers are up and running!');
      } else {
        console.log('Failed to start containers.');
      }
    });
  });
});
