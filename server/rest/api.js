import express from 'express'
import initializeDatabase from '../db-conn'

const app = express()

// We need this one if we send data inside the body as JSON
app.use(express.json())

async function init() {
  // Call the init function that returns the Database
  const db = await initializeDatabase()
  // Let's extract all the objects we need to perform queries inside the endpoints
  const { Person, Area, Product, Assistance, Feature } = db._tables

  //api to get all the products
  app.get('/products', async (req, res) => {
    const products = await Product.findAll()
    return res.json(products)
  })
  //api to get all the products
  app.get('/products/:id', async (req, res) => {
    const productId = req.params.id
    const product = await Product.findOne({
      where: { id: productId }
    })
    return res.json(product)
  })
  // to get all the people
  app.get('/people', async (req, res) => {
    const people = await Person.findAll()
    return res.json(people)
  })
  //api to get all the areas
  app.get('/areas', async (req, res) => {
    const areas = await Area.findAll()
    return res.json(areas)
  })
  //api to get all area of type
  app.get('/areas/:area', async (req, res) => {
    const area = req.params.area
    const selected = await Area.findOne({
      where: { title: area }
    })
    return res.json(selected)
  })
  //api to get all features of type area
  //the parameter :area passed is the id of the area from which we want to retrieve all the feature
  app.get('/areas/features/:id', async (req, res) => {
    const id = req.params.id
    const selected = await Feature.findAll({
      where: { area: id }
    })
    return res.json(selected)
  })
  app.get('products/features/:id', async (req, res) => {
    const id = req.params.id
    const selected = await Feature.findAll({
      where: { product: id }
    })
    return res.json(selected)
  })
  // API to get all products by area
  //the parameter :area passed is the id of the area from which we want to retrieve all the products
  app.get('/products/:area', async (req, res) => {
    const area = req.params.area
    const products = await Product.findAll({
      where: { area: area }
    })
    return res.json(products)
  })
  // API to get all people by role
  // the parameter :role passed is the identifier of the role consistent with the representation in the db
  // => 0: area rep, 1: proj manager, 2: ref assistant
  app.get('/:role', async (req, res) => {
    const role = req.params.role
    const people = await Person.findAll({
      where: { role: role }
    })
    return res.json(people)
  })
  // api to get all the roles of a person
  // return an object containing 3 elements: only 1 of them is not null (because each person can have only 1 role)
  app.get('/roles/:person', async (req, res) => {
    const person = req.params.person
    const area_resp = await Area.findOne({
      where: { manager: person }
    })
    const proj_manager = await Product.findAll({
      where: { project_manager: person }
    })
    const ref_ass = await Product.findAll(/*find all products for which perso is ref assistant*/)

    return res.json({ area_resp, proj_manager, ref_ass })
  })
}

init()

export default app
