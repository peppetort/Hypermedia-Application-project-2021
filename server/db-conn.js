const { Sequelize, DataTypes } = require('sequelize')

const pg = require('pg')
pg.defaults.ssl = true

// TODO: spostare url db su nuxt.config.js const db = new Sequelize(process.env.DATABASE_URL
const db = new Sequelize(
  'postgres://xuijyptapitgaa:597e47f2bbbe3e7f0935de86d876068e62329f20dc2b81928d6afbb6347f4da4@ec2-54-220-35-19.eu-west-1.compute.amazonaws.com:5432/df196knlhloog?currentSchema=hypermediaProject2021',
  {
    ssl: true,
    schema: 'hypermediaProject2021',
    define: {
      timestamps: false
    },
    dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }
  }
)

/**
 * Function to define the structure of the database
 */
function defineDatabaseStructure() {
  const Person = db.define('Person', {
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    description: DataTypes.STRING(1000),
    role: DataTypes.INTEGER,
    image: DataTypes.STRING
  })
  const Assistance = db.define('Assistance', {})
  const Feature = db.define('Feature', {
    title: DataTypes.STRING,
    description: DataTypes.STRING(1000)
  })
  const Area = db.define('Area', {
    title: DataTypes.STRING,
    description: DataTypes.STRING(1000),
    subtitle: DataTypes.STRING
  })
  const Product = db.define('Product', {
    title: DataTypes.STRING,
    subtitle: DataTypes.STRING,
    description: DataTypes.STRING(1000),
    image: DataTypes.STRING
  })

  Person.hasOne(Area, { foreignKey: 'responsible' })
  Area.hasOne(Product, { foreignKey: 'area' })
  Person.hasOne(Product, { foreignKey: 'manager' })
  Area.hasOne(Feature, { foreignKey: 'area' })
  Product.hasOne(Feature, { foreignKey: 'product' })
  Person.belongsToMany(Product, { through: Assistance, foreignKey: 'person' })
  Product.belongsToMany(Person, { through: Assistance, foreignKey: 'product' })

  // Creating the 1 -> N association between Article and Comment
  // More on association: https://sequelize.org/master/manual/assocs.html

  db._tables = {
    Person,
    Assistance,
    Feature,
    Area,
    Product
  }
}

/**
 * Function to initialize the database. This is exported and called in the main api.js file
 */
async function initializeDatabase() {
  // Synchronize Sequelize with the actual database
  defineDatabaseStructure()
  await db.sync()
  return db
}

export default initializeDatabase
