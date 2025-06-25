import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Guilherme100!',
  database: 'intermediarioTaboao',
  define: {
    timestamps: false,
    underscored: false
  },
  logging: console.log,
});


export default sequelize;
