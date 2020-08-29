const mongoose = require('mongoose')
const app = require('./app')

const DB = "mongodb+srv://sakhsam:iNTNynymc6R0wy9o@cluster0.e4uwf.mongodb.net/<dbname>?retryWrites=true&w=majority"

// iNTNynymc6R0wy9o

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