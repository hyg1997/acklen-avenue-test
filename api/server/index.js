import app from './config/express';
import config from './config/config';

if(!module.parent) {
  app.listen(config.port, () => {
    console.info(`Server started on port ${config.port} (${config.env})`);
  });
}