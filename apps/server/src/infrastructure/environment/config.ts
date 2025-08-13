/**
 * This takes the environment configuration .env and makes it available to nestjs/config service
 */
export default () => ({
    listenPort: parseInt(process.env.LISTEN_PORT || '3000'),
    database: {
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT || '0'),
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        name: process.env.DATABASE_NAME
    }
})