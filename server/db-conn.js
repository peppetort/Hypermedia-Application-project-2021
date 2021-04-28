const { Sequelize, DataTypes } = require('sequelize')

const pg = require('pg')
pg.defaults.ssl = true

// TODO: spostare url db su nuxt.config.js const db = new Sequelize(process.env.DATABASE_URL
const db = new Sequelize(
  'postgres://xuijyptapitgaa:597e47f2bbbe3e7f0935de86d876068e62329f20dc2b81928d6afbb6347f4da4@ec2-54-220-35-19.eu-west-1.compute.amazonaws.com:5432/df196knlhloog',
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
    name: DataType.STRING,
    surname: DataType.STRING,
    email: DataType.STRING,
    phone: DataType.STRING,
    description: DataType.STRING,
    role: DataType.INTEGER,
    image: DataType.STRING
  })
  const Assistance = db.define('Assistance', {})
  const Feature = db.define('Feature', {
    title: DataType.STRING,
    description: DataType.STRING
  })
  const Area = db.define('Area', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    manager: DataTypes.INTEGER,
    subtitle: DataTypes.STRING
  })
  const Product = db.define('Product', {
    title: DataType.STRING,
    subtitle: DataType.STRING,
    description: DataType.STRING,
    image: DataType.STRING
  })

  Area.hasOne(Person, { foreignKey: 'responsible' })
  Person.belongsTo(Area)
  Product.hasOne(Area, { foreignKey: 'area' })
  Product.hasOne(Person, { foreignKey: 'manager' })
  Feature.hasOne(Area, { foreignKey: 'area', allowNull: true })
  Feature.hasOne(Product, { foreignKey: 'product', allowNull: true })
  Person.belongsToMany(Product, { through: Assistance })
  Product.belongsToMany(Person, { through: Assistance })

  // Creating the 1 -> N association between Article and Comment
  // More on association: https://sequelize.org/master/manual/assocs.html

  db._tables = {
    Person,
    Assistance,
    Features,
    Area,
    Products
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
