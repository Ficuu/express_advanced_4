const express = require('express')
const data = require('../data/data.json')

//vconst axios = require('axios')


const routerProduct = express.Router()

// const URL = 'https://mocki.io/v1/0a157ac8-e266-41e2-9a1b-b77ef92bb075'
// const dataAPI = async () => await axios(URL) */ console.log(dataAPI.data) /* 


routerProduct.get('/', async (req, res) => {
    res.status(200).json(data)
})

routerProduct.get('/:id', async (req, res) => {
    res.status(200).json(data[req.params.id]) 
})

routerProduct.post('/', async(req, res) => {
    const id = Math.max(... data.map(el => el.id))
    const { title, price, img } = req.body
    await data.push({ id: id + 1, title, price, img }) 
    res.status(201).json({ status: `Product saved with Id: ${id + 1} ` })
})

routerProduct.put('/:id', async(req, res) => {
    const { title, price, img } = req.body
    await data.find(idToFound => {
        idToFound.id === Number(req.params.id) 
        ?
            (idToFound.price = price,
            idToFound.img = img,
            idToFound.title = title)
        : ''
    })
    res.json({status: 'Product updated'})
})

routerProduct.delete('/:id', async(req, res) => {
    await data.filter(el => el.id !== Number(req.params.id))
    res.json({ status: 'Product deleted' })
})

module.exports = routerProduct