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
    image: DataTypes.STRING(200000)
  })
  const Assistance = db.define('Assistance', {})
  const Feature = db.define('Feature', {
    title: DataTypes.STRING,
    description: DataTypes.STRING(1000),
    image: DataTypes.STRING(200000)
  })
  const Area = db.define('Area', {
    title: DataTypes.STRING,
    description: DataTypes.STRING(1000),
    subtitle: DataTypes.STRING(500),
    main_image: DataTypes.STRING(200000),
    second_image: DataTypes.STRING(200000)
  })
  const Product = db.define('Product', {
    title: DataTypes.STRING,
    subtitle: DataTypes.STRING(500),
    description: DataTypes.STRING(1000),
    image: DataTypes.STRING(200000)
  })
  const Role = db.define('Role', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    icon: DataTypes.STRING,
    responsibility1: DataTypes.STRING,
    responsibility2: DataTypes.STRING,
    responsibility3: DataTypes.STRING
  })

  /*Person.hasOne(Area, { foreignKey: 'responsible' })
  Area.hasOne(Product, { foreignKey: 'area' })
  Person.hasOne(Product, { foreignKey: 'manager' })
  Area.hasOne(Feature, { foreignKey: 'area' })
  Product.hasOne(Feature, { foreignKey: 'product' })
  Person.belongsToMany(Product, { through: Assistance, foreignKey: 'person' })
  Product.belongsToMany(Person, { through: Assistance, foreignKey: 'product' })
  Role.hasOne(Person, { foreignKey: 'role' })*/

  Area.belongsTo(Person, { foreignKey: 'responsible' })
  Product.belongsTo(Area, { foreignKey: 'area' })
  Area.hasMany(Product, { foreignKey: 'area' })
  Product.belongsTo(Person, { foreignKey: 'manager' })
  Person.hasMany(Product, { foreignKey: 'manager' }) // -> correct?
  Feature.belongsTo(Area, { foreignKey: 'area' })
  Area.hasMany(Feature, { foreignKey: 'area' })
  Feature.belongsTo(Product, { foreignKey: 'product' })
  Product.hasMany(Feature, { foreignKey: 'product' })
  Person.belongsToMany(Product, { through: Assistance, foreignKey: 'person' })
  Product.belongsToMany(Person, { through: Assistance, foreignKey: 'product' })
  Person.belongsTo(Role, { foreignKey: 'role' })
  Role.hasMany(Person, { foreignKey: 'role' })

  // Creating the 1 -> N association between Article and Comment
  // More on association: https://sequelize.org/master/manual/assocs.html

  db._tables = {
    Person,
    Assistance,
    Feature,
    Area,
    Product,
    Role
  }
}

/**
 * Function to initialize the database. This is exported and called in the main api.js file
 */
async function initializeDatabase() {
  // Synchronize Sequelize with the actual database
  defineDatabaseStructure()
  await db.sync()
  //await insertData()
  return db
}

async function insertData() {
  const { Person, Area, Product, Assistance, Feature, Role } = db._tables

  const area_resp = await Role.create({
    id: 1,
    title: 'Area Responsible',
    description: 'this is a description for the role of an area responsible',
    image: '',
    icon: '',
    responsibility1: 'responsibility1',
    responsibility2: 'responsibility2',
    responsibility3: 'responsibility3'
  })

  const prod_manager = await Role.create({
    id: 2,
    title: 'Project Manager',
    description: 'this is a description for the role of a Project Manager',
    image: '',
    icon: '',
    responsibility1: 'responsibility1',
    responsibility2: 'responsibility2',
    responsibility3: 'responsibility3'
  })

  const ref_assistance = await Role.create({
    id: 3,
    title: 'Reference for Assistance',
    description:
      'this is a description for the role of a Reference for Assistance',
    image: '',
    icon: '',
    responsibility1: 'responsibility1',
    responsibility2: 'responsibility2',
    responsibility3: 'responsibility3'
  })

  const p1 = await Person.create({
    name: 'mario',
    surname: 'rossi',
    email: 'email@email.it',
    phone: '123 4567890',
    description: 'this is a good employee',
    image: ''
  })

  const p2 = await Person.create({
    name: 'name1',
    surname: 'surname1',
    email: 'email@email.it',
    phone: '123 4567890',
    description: 'this is a good employee',
    image: ''
  })

  const p3 = await Person.create({
    name: 'name2',
    surname: 'surname2',
    email: 'email@email.it',
    phone: '123 4567890',
    description: 'this is a good employee',
    image: ''
  })

  const p4 = await Person.create({
    name: 'name3',
    surname: 'surname3',
    email: 'email@email.it',
    phone: '123 4567890',
    description: 'this is a good employee',
    image: ''
  })

  area_resp.addPerson(p1)
  area_resp.addPerson(p2)
  area_resp.addPerson(p3)
  area_resp.addPerson(p4)
}

export default initializeDatabase
