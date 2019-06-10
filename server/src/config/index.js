import dotenv from 'dotenv';

dotenv.config();

const config = {};

switch (process.env.NODE_ENV) {
    case 'prod':
        config.PORT = process.env.PROD_PORT;
        break;
    case 'dev':
            config.PORT = process.env.DEV_PORT;
        break;
    default:
        break;
}

export default config;