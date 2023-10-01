const express = require('express');
const app = express()
const PORT = 8082 || process.env.PORT
const morgan = require('morgan')

app.use(morgan('tiny'))

app.get('/', (request, response) => {
    response.json({message: 'Ping Succesfully'})
})

app.listen(PORT, () => {
    console.log(`App running at localhost: ${PORT}`);
})

app.get('/produk', (request, response) => {
    response.json({data: [{ id: 1, name: 'Ultra Milk'}]})
})

app.post('/produk/', (request, response) => {
    response.send("Berhasil menambahkan data baru.")

app.put('/produk/:id', (request,response ) => {
    response.send("Berhasil mengubah data.")
})
})

app.delete('/produk/:id', (request, response) => {
    response.send("Berhasil menghapus data.")
})
