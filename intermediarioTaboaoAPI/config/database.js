import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';


dotenv.config();

const sequelize = new Sequelize({
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  define: {
    timestamps: process.env.DB_TIMESTAMPS === 'true',
    underscored: process.env.DB_UNDERSCORED === 'true'
  },
  logging: process.env.DB_LOGGING === 'true' ? console.log : false,
});

export default sequelize;
