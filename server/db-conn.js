const { Sequelize, DataTypes } = require('sequelize');

 const pg = require('pg');
// pg.defaults.ssl = true;
// const db = new Sequelize(process.env.DATABASE_URL, {
//   ssl: true,
//   dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
// });

const db = new Sequelize('postgres://xuijyptapitgaa:597e47f2bbbe3e7f0935de86d876068e62329f20dc2b81928d6afbb6347f4da4@ec2-54-220-35-19.eu-west-1.compute.amazonaws.com:5432/df196knlhloog?currentSchema=hypermediaProject', {
  ssl: true,
  dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
});



/**
 * Function to define the structure of the database
 */
function defineDatabaseStructure() {
  // TODO: define our DB structure
  // const Article = db.define(
  //   'article',
  //   {
  //     title: DataTypes.STRING,
  //     content: DataTypes.TEXT,
  //     summary: DataTypes.STRING,
  //     image: DataTypes.STRING,
  //   },
  //   {
  //     underscored: true,
  //   }
  // )
  // const Comment = db.define(
  //   'comment',
  //   {
  //     content: DataTypes.TEXT,
  //     image: {
  //       type: DataTypes.STRING,
  //       allowNull: true,
  //     },
  //   },
  //   {
  //     underscored: true,
  //   }
  // )
  // // Creating the 1 -> N association between Article and Comment
  // // More on association: https://sequelize.org/master/manual/assocs.html
  // Article.hasMany(Comment, { foreignKey: 'article_id' })
  // db._tables = {
  //   Article,
  //   Comment,
  // }
}

/**
 * Function to initialize the database. This is exported and called in the main api.js file
 */
async function initializeDatabase() {
  // Synchronize Sequelize with the actual database
  await db.sync({ force: true });
  return db;
}

export default initializeDatabase;
