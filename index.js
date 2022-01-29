const express = require('express')
const app = express()
const path = require('path')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const routerProduct = require('./routes/product.routes')

app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(express.json())

app.set('port', process.env.PORT || 8080)

app.use('/api/products', routerProduct)

app.use(express.static(path.join(__dirname, 'public')))

app.listen(app.get('port'), () => {
    console.log(`Server listen in port ${app.get('port')}`)
})