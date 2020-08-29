const mongoose = require('mongoose')
const app = require('./app')

const DB = "mongodb+srv://projectDB:projectDB@cluster0-h0cuf.mongodb.net/projectDB?retryWrites=true&w=majority"

mongoose
	.connect(DB, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true
	})
	.then((con) => {
		console.log('DATABSE connected successfully');
	});




PORT = process.env.PORT || 5000

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}....`)
})