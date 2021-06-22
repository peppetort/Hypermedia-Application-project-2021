const { Sequelize, DataTypes } = require('sequelize')

const pg = require('pg')
pg.defaults.ssl = true

//TODO: cambiare con process.env.DATABASE_URL quando pushato su heroku
//TODO: cambiare con 'postgres://wxreoxkuwuwpat:5440d56f5038c3bd4f0fb39d0227952f0147fb76a2311184a272aac31546b4b2@ec2-34-253-116-145.eu-west-1.compute.amazonaws.com:5432/dbr6pff9k296r2' in dev
const db = new Sequelize(process.env.DATABASE_URL, {
  ssl: true,
  schema: 'hypermediaProject2021',
  define: {
    timestamps: false
  },
  dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }
})

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
    main_image: DataTypes.STRING(200000)
  })
  const Product = db.define('Product', {
    title: DataTypes.STRING,
    subtitle: DataTypes.STRING(500),
    description: DataTypes.STRING(1000),
    image: DataTypes.STRING(200000)
  })
  const Role = db.define('Role', {
    title: DataTypes.STRING,
    description: DataTypes.STRING(1000),
    icon: DataTypes.STRING(300000),
    responsibility1: DataTypes.STRING(1000),
    responsibility2: DataTypes.STRING(1000),
    responsibility3: DataTypes.STRING(1000)
  })

  Area.belongsTo(Person, { foreignKey: 'responsible' })
  Product.belongsTo(Area, { foreignKey: 'area' })
  Area.hasMany(Product, { foreignKey: 'area' })
  Product.belongsTo(Person, { foreignKey: 'manager' })
  Person.hasMany(Product, { foreignKey: 'manager' })
  Feature.belongsTo(Area, { foreignKey: 'area' })
  Area.hasMany(Feature, { foreignKey: 'area' })
  Feature.belongsTo(Product, { foreignKey: 'product' })
  Product.hasMany(Feature, { foreignKey: 'product' })
  Person.belongsToMany(Product, { through: Assistance, foreignKey: 'person' })
  Product.belongsToMany(Person, { through: Assistance, foreignKey: 'product' })
  Person.belongsTo(Role, { foreignKey: 'role' })
  Role.hasMany(Person, { foreignKey: 'role' })

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
  defineDatabaseStructure()
  //TODO: commentare db.sync e decommentare db.sync({force: true}) e insertData()
  await db.sync()
  /*   await db.sync({ force: true })
  insertData() */
  return db
}

/**
 * Function to read image from file and convert it to base64 string
 */
function getImage(path) {
  const img = require('fs')
  return img.readFileSync(path).toString('base64')
}

function insertRole(role) {
  const { Role } = db._tables
  const path = require('path')

  role.forEach(async (el) => {
    var iconPath = path.join(
      __dirname,
      '..',
      'DB',
      'Images',
      'Role',
      el['icon'].toString()
    )
    await Role.create({
      id: el['id'],
      title: el['title'],
      description: el['description'],
      icon: getImage(iconPath),
      responsibility1: el['responsibility1'],
      responsibility2: el['responsibility2'],
      responsibility3: el['responsibility3']
    })
  })
}

function insertPerson(person) {
  const { Person } = db._tables
  const path = require('path')

  person.forEach(async (el) => {
    var imagePath = path.join(
      __dirname,
      '..',
      'DB',
      'Images',
      'Person',
      el['image'].toString()
    )

    await Person.create({
      id: el['id'],
      name: el['name'],
      surname: el['surname'],
      email: el['email'],
      phone: el['phone'],
      description: el['description'],
      image: getImage(imagePath),
      role: el['role']
    })
  })
}

function insertArea(area) {
  const { Area } = db._tables
  const path = require('path')

  area.forEach(async (el) => {
    var mainPath = path.join(
      __dirname,
      '..',
      'DB',
      'Images',
      'Area',
      el['id'].toString(),
      el['main_image'].toString()
    )

    await Area.create({
      id: el['id'],
      title: el['title'],
      description: el['description'],
      subtitle: el['subtitle'],
      main_image: getImage(mainPath),
      responsible: el['responsible']
    })
  })
}

function insertProduct(product) {
  const { Product } = db._tables
  const path = require('path')

  product.forEach(async (el) => {
    var imagePath = path.join(
      __dirname,
      '..',
      'DB',
      'Images',
      'Product',
      el['image'].toString()
    )

    await Product.create({
      id: el['id'],
      title: el['title'],
      subtitle: el['subtitle'],
      description: el['description'],
      image: getImage(imagePath),
      area: el['area'],
      manager: el['manager']
    })
  })
}

function insertAssistance(assistance) {
  const { Assistance } = db._tables

  assistance.forEach(async (el) => {
    await Assistance.create({
      person: el['person'],
      product: el['product']
    })
  })
}

function insertFeature(feature) {
  const { Feature } = db._tables
  const path = require('path')

  feature.forEach(async (el) => {
    var imagePath = path.join(
      __dirname,
      '..',
      'DB',
      'Images',
      'Feature',
      el['image'].toString()
    )

    var x

    if (el['area'] != undefined && el['product'] != undefined) {
      x = {
        id: el['id'],
        title: el['title'],
        description: el['description'],
        image: getImage(imagePath),
        area: el['area'],
        product: el['product']
      }
    } else if (el['area'] != undefined && el['product'] == undefined) {
      x = {
        id: el['id'],
        title: el['title'],
        description: el['description'],
        image: getImage(imagePath),
        area: el['area']
      }
    } else if (el['area'] == undefined && el['product'] != undefined) {
      x = {
        id: el['id'],
        title: el['title'],
        description: el['description'],
        image: getImage(imagePath),
        product: el['product']
      }
    }

    await Feature.create(x)
  })
}

/**
 * Function to populate the database.
 */
function insertData() {
  const file = require('fs')
  const path = require('path')

  var jsonPath = path.join(__dirname, '..', 'DB', 'db.json')

  file.readFile(jsonPath, 'utf8', (err, jsonString) => {
    if (err) {
      console.log('File read failed:', err)
      return
    }
    try {
      const content = JSON.parse(jsonString)
      insertRole(content['Role'])
      setTimeout(() => {
        insertPerson(content['Person'])
      }, 10000)
      setTimeout(() => {
        insertArea(content['Area'])
      }, 10000)
      setTimeout(() => {
        insertProduct(content['Product'])
      }, 20000)
      setTimeout(() => {
        insertAssistance(content['Assistance'])
      }, 30000)
      setTimeout(() => {
        insertFeature(content['Feature'])
      }, 30000)
    } catch (err) {
      console.log('Error parsing JSON string:', err)
    }
  })
}

export default initializeDatabase
