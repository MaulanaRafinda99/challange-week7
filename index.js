const express = require('express');
const app = express()
const PORT = 8082 || process.env.PORT

app.get('/', (request, response) => {
    response.json({message: 'Ping Succesfully'})
})

app.listen(PORT, () => {
    console.log(`App running at localhost: ${PORT}`);
})

app.get('/produk', (request, response) => {
    response.json({data: [{id: 1, name: 'Ultra Milk'}]})
})