const { Sequelize, DataTypes } = require('sequelize')

// Development
// const db = new Sequelize(
//   'postgres://postgres:prova123@localhost:5432/test-database'
// )
// Production
const pg = require('pg')
pg.defaults.ssl = true
const db = new Sequelize(process.env.DATABASE_URL, {
  ssl: true,
  dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
})

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
  // Call the function for the database structure definition
  defineDatabaseStructure()
  // Synchronize Sequelize with the actual database
  await db.sync({ force: true })
  return db
}

export default initializeDatabase
