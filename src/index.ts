import dotenv from 'dotenv';
import { Log } from './module/log';

dotenv.config();

async function bootstrap() {
  Log.info('Hello, World!', true);
}
bootstrap();
