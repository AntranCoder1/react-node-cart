const express = require('express');
const connectDB = require('./api/db')
const app = express();
const cors = require('cors')

const authRouter = require('./routers/auth.routers')
const productRouter = require('./routers/product.routers')

connectDB()

app.use(express.json())
app.use(cors())
app.use('/api/auth', authRouter)
app.use('/api/products', productRouter)

const PORT = 5000
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`))