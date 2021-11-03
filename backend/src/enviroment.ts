export const environment = {
  nodeEnv: process.env.NODE_ENV || 'development',
  serverTimeout: process.env.SERVER_TIMEOUT || '1080000',
  serverPort: process.env.SERVER_PORT || '3003',
  databaseType: process.env.DATABASE_TYPE || 'mongodb',
  databaseHost: process.env.DATABASE_HOST || 'localhost',
  databasePort: process.env.DATABASE_PORT || '27017',
  databaseUsername: process.env.DATABASE_USERNAME || 'tagme-api',
  databasePassword: process.env.DATABASE_PASSWORD || 'example',
  databaseName: process.env.DATABASE_NAME || 'tagme',
  databaseConnectionTimeOut: process.env.DATABASE_CONNECTION_TIME_OUT || '150000',
  databaseAcquireTimeOut: process.env.DATABASE_ACQUIRE_TIME_OUT || '150000',
  databaseConnectionLimit: process.env.DATABASE_CONNECTION_LIMIT || '20'
};