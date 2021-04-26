import express from 'express'
import initializeDatabase from '../db-conn'
const app = express()

// We need this one if we send data inside the body as JSON
app.use(express.json())

async function init() {
  // Call the init function that returns the Database
  const db = await initializeDatabase()
  // Let's extract all the objects we need to perform queries inside the endpoints
  const { Person, Area, Product, Image, Assistance } = db._tables
  // API to get all products by area
  app.get('products/:area', async (req, res) => {
    const {area} = req.params
    const products = await Product.findAll(/* TODO: query for all product of an area */)
    return res.json(products)
  })
  // API to get all people by role
  app.get('roles/:role', async (req, res) => {
    const {role} = req.params
    const people = await Person.findAll(/* TODO: query for all people of a role */)
    return res.json(people)
  })
  /* TODO: complete with necessary API */
}

init()

export default app
