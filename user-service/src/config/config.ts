import { config } from 'dotenv';

const configFile = `./.env`;
config({ path: configFile });

const { MONGU_URI, PORT, JWT_SECRET, NODE_ENV, MESSAGE_BROKER_URL } = process.env;

export default {
  MONGU_URI,
  PORT,
  JWT_SECRET,
  NODE_ENV,
  msgBrokerURL: MESSAGE_BROKER_URL,
};