const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

mongoose.connect('mongodb://localhost:27017/graphqltutroial').then(() => {
    console.log('mongoose connected');
})

app.use(cors())

// app.use((req, resp, next) => {
//     resp.setHeader("Access-Control-Allow-Origin", "*")
//     resp.setHeader(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-Width, Content-Type, Accept, Authorization"
//     )
//     resp.setHeader(
//         "Access-Control-Allow-Methods",
//         "GET, POST, PATCH, PUT, DELETE, OPTIONS"
//     )
//     next()
// })

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log('running on port 4000');
})