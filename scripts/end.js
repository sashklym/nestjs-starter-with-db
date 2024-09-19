const { exec } = require('child_process');

const stopContainers = 'docker-compose down';
const removeVolume = 'docker volume rm nestjs-starter-with-db-postgres-data';

exec(stopContainers, (err, stdout, stderr) => {
  if (err) {
    console.error(`Error stopping containers: ${stderr}`);
    return;
  }
  console.log(stdout);

  exec(removeVolume, (err, stdout, stderr) => {
    if (err) {
      console.error(`Error removing volume: ${stderr}`);
      return;
    }
    console.log(stdout);
    console.log('Cleanup completed.');
  });
});
