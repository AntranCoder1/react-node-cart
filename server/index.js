require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
const app = express();
const cors = require('cors')

const authRouter = require('./routers/auth.routers')

const connectDB = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@react-node-cart.4pem4.mongodb.net/react-node-cart?retryWrites=true&w=majority`,
            {
                useCreateIndex: true,
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useFindAndModify: false
            }
        )

        console.log('MongoDB connected');
    } catch (error) {
        console.log(error.message);
        process.exit(1)
    }
}

connectDB()

app.use(express.json())
app.use(cors())
app.use('/api/auth', authRouter)

const PORT = 5000
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`))