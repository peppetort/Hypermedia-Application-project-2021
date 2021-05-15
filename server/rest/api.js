import express from 'express'
import initializeDatabase from '../db-conn'

const app = express()

app.use(express.json())

async function init() {
  const db = await initializeDatabase()
  const { Person, Area, Product, Assistance, Feature, Role } = db._tables

  //api to get all the products
  app.get('/products', async (req, res) => {
    const products = await Product.findAll()
    return res.json(products)
  })

  //api to get the product with a given id
  app.get('/products/:id', async (req, res) => {
    const productId = req.params.id
    const product = await Product.findOne({
      where: { id: productId }
    })
    return res.json(product)
  })

  // api to get all products by area
  //:id passed is the id of the area from which we want to retrieve all the products
  app.get('/products/area/:id', async (req, res) => {
    const area_id = req.params.id
    const products = await Product.findAll({
      where: { area: area_id }
    })
    return res.json(products)
  })

  //api to get all products related to a person
  app.get('/products/person/:id', async (req, res) => {
    const person = req.params.id
    const people = await Product.findAll({
      where: { manager: person }
    })
    return res.json(people)
  })

  //api to get all the areas
  app.get('/areas', async (req, res) => {
    const areas = await Area.findAll()
    return res.json(areas)
  })

  //api to get all area of type
  app.get('/areas/:id', async (req, res) => {
    const area = req.params.id
    const selected = await Area.findOne({
      where: { id: area }
    })
    return res.json(selected)
  })

  //api to get all area by manager id
  app.get('/areas/manager/:id', async (req, res) => {
    const manager = req.params.id
    const selected = await Area.findOne({
      where: { responsible: manager }
    })
    return res.json(selected)
  })

  //api to get all features of an area
  //:id is the id of the area from which we want to retrieve all the feature
  app.get('/features/area/:id', async (req, res) => {
    const id = req.params.id
    const selected = await Feature.findAll({
      where: { area: id }
    })
    return res.json(selected)
  })

  //api to get all features of a product
  //:id is the id of the product from which we want to retrieve all the feature
  app.get('/features/product/:id', async (req, res) => {
    const id = req.params.id
    const selected = await Feature.findAll({
      where: { product: id }
    })
    return res.json(selected)
  })

  // api to get person by id
  app.get('/person/:id', async (req, res) => {
    const person = req.params.id
    const selected = await Person.findOne({
      where: { id: person }
    })
    return res.json(selected)
  })

  // api to get all people by role
  // :id passed is the identifier of the role consistent with the representation in the db
  app.get('/person/role/:id', async (req, res) => {
    const role = req.params.id
    const people = await Person.findAll({
      where: { role: role }
    })
    return res.json(people)
  })

  //api to get all roles
  app.get('/roles', async (req, res) => {
    const roles = await Role.findAll()
    return res.json(roles)
  })

  //api to get role by id
  app.get('/roles/:id', async (req, res) => {
    const role_id = req.params.id
    const r = await Role.findOne({
      where: { id: role_id }
    })
    return res.json(r)
  })

  //api to get all assistance people by product id
  app.get('/assistance/product/:id', async (req, res) => {
    const product = req.params.id
    const people = await Person.findAll({
      include: {
        model: Product,
        where: { id: product }
      }
    })
    return res.json(people)
  })

  //api to get all assistance product by person id
  app.get('/assistance/person/:id', async (req, res) => {
    const person = req.params.id
    const products = await Product.findAll({
      include: {
        model: Person,
        where: { id: person }
      }
    })
    return res.json(products)
  })
}

init()

export default app
