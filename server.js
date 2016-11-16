var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var Todo = require('./model/todo')

var app = express()
var router = express.Router()

var port = process.env.API_PORT || 7001

// mongoose.connect('mongodb://heroku_ndjw9w14:tu92sp9o9md9qc022pfh3jln70@ds155727.mlab.com:55727/heroku_ndjw9w14')
mongoose.connect(process.env.MONGODB_URI)
// mongoose.connect('mongodb://localhost/todo-app-react')


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers')
  res.setHeader('Cache-Control', 'no-cache')
  next()
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/build/index.html')
})

router.get('/', (req, res) => {
  res.json({ message: `React Todo API!` })
})

router.route('/todos')
  .get( (req, res) => {
    Todo.find( (err, todos) => {
      if (err) res.send(err)
      else res.json(todos)
    })
  })
  .post( (req, res) => {
    var todo = new Todo()
    todo.name = req.body.name
    todo.description = req.body.description
    todo.isComplete = false
    todo.save( err => {
      if (err) res.send(err)
      else res.json({ message: 'Todo posted successfully.' })
    })
  })

app.use('/api', router)

app.listen(port, () => {
  console.log(`api running on port ${port}`)
})
