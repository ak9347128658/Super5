const {Product} = require('../models/index');


// create a new product

const createProduct = async (req, res,next) => {  
  try{
    const {
        name,
        price,
        description,
        stock,
        image
        } = req.body;
     const product =   await Product.create({
        name,
        price,
        description,
        stock,
        image
        });
    if(product){
      res.status(201).json({message: 'Product created successfully', product: product.dataValues.productId})
    }
    else{
        res.status(400).json({message: 'failed to create product'});
    }
  }catch(err){
    console.log(err);
    res.status(400).json({message: 'Error creating product'});
  }

};
// get all products
const getAllProducts = async (req, res,next) => {     // https://localhost:3000/products
    try{
        const products = await Product.findAll();
        if(products){
        res.status(200).json({message: 'Products found', products: products.map(product => product.dataValues)})
        }
        else{
            res.status(404).json({message: 'Products not found'});
        }
    }catch(err){
        console.log(err);
        res.status(400).json({message: 'Error getting products'});
    }
    
    }



// get product by productId
const getProductById = async (req, res,next) => {     // https://localhost:3000/products/:productId
    try{
        const {productId} = req.params;
        //const productId = req.params.productId;
        const product = await Product.findByPk(productId);
        //const product = await Product.findone({where: {productId}});
        if(product){
        res.status(200).json({message: 'Product found', product: product.dataValues})
        }
        else{
            res.status(404).json({message: 'Product not found'});
        }
    }catch(err){
        console.log(err);
        res.status(400).json({message: 'Error getting product'});
    }
    
    };

// delete product by productId
const deleteProduct = async (req, res,next) => {     // https://localhost:3000/products/:productId
    try{
        const {productId} = req.params;
        //const productId = req.params.productId;
        const product = await Product.findByPk(productId);        // i have product productId = 123, but i want to find product with productId = 892893
        //const product = await Product.findone({where: {productId}});
        if(product){
            try{
            await product.destroy();
            res.status(200).json({message: 'Product deleted successfully'})
            }catch(err){
                console.log(err);
                res.status(400).json({message: 'failed to  delete product'});
            }
        }else{
            res.status(404).json({message: 'Product not found'});
        }
    }catch(err){
        console.log(err);
        res.status(400).json({message: 'Error getting product'});
    }
    
    };

// update product by productId
const updateProductbyId = async (req, res,next) => {     // https://localhost:3000/products/:productId
    try{
        const {productId} = req.params;
        if(!productId){
            return res.status(400).json({message: 'productId is required'});
        }
        const {
            name,
            price,
            description,
            stock,
            image
            } = req.body;
        const product = await Product.findByPk(productId);        // i have product productId = 123, but i want to find product with productId = 892893
        //const product = await Product.findone({where: {productId}});
        if(product){
            try{
            if(name){
             product.name = name;  // if name is not provided or if null then this line will be skiped
            }
            if(price){
            product.price = price;
            }
            if(description){
            product.description = description;
            }
            if(stock){
            product.stock = stock;
            }
            if(image){
            product.image = image;
            }
            await product.save();
            res.status(200).json({message: 'Product updated successfully', product: product.dataValues})
            }catch(err){
                console.log(err);
                res.status(400).json({message: 'failed to  update product'});
            }
        }else{
            res.status(404).json({message: 'Product not found'});
        }
    }catch(err){
        console.log(err);
        res.status(400).json({message: 'Error getting product'});
    }
    
    };
// productId          name       price       description     stock       image
// 123                pizza      110         yummy           50         pizza.jpg
// 892893             burger     200         yummy           200         burger.jpg



module.exports = {
    createProduct,
    getProductById,
    deleteProduct,
    updateProductbyId,
    getAllProducts
}