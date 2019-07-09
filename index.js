import { createServer } from 'http';
import next from 'next';
import dotenv from 'dotenv';
import routes from './routes';

dotenv.config();

const app = next({ dev: process.env.NODE !== 'production' });
const requestHandler = routes.getRequestHandler(app);

app.prepare()
  .then(() => {
    createServer(requestHandler).listen(process.env.PORT || 3000);
  });
