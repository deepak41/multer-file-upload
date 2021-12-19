const express = require('express');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const app = express();

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
})

app.post('/upload', upload.single('myfile'), (req, res) => {
	res.send('File Uploaded Successfully!')
})

app.listen(3000, () => console.log("The server is running at localhost:3000"))
