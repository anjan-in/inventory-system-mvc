import express from 'express';
import path from 'path';
import ProductController from './src/controllers/product.controller.js';
import expressEjsLayouts from 'express-ejs-layouts';

const server = express();

// setup view engine settings
server.set('view engine', 'ejs');
server.set('views', path.join(path.resolve(),"src",'views'));

server.use(expressEjsLayouts);

// server.use(express.static('src/views'));

// create an instance of ProductController
const productController = new ProductController();
// server.get('/', (req, res) => productController.getProducts(req, res));
server.get('/', productController.getProducts);

// server.listen(3400);
server.listen(3400, () => {
  console.log('Server listening on port 3400');
});
