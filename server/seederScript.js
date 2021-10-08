require('dotenv').config();
const productsData = require('./data/products')
const Product = require('./models/Product.models')
const connectDB = require('./api/db')

connectDB()

const importData = async () => {
    try {
      await Product.deleteMany({});
  
      await Product.insertMany(productsData);
  
      console.log("Data Import Success");
  
      process.exit();
    } catch (error) {
      console.error("Error with data import", error);
      process.exit(1);
    }
  };

importData()