const db = require('./configure/db');
const Product = require('./model/Product');
// Crud operation for Products (table or model or entity)
// Create, Read, Update, Delete (CRUD) operations



// Create a new product
const createProduct = async () => {
    try{
   const product = await Product.create({
        name: 'Laptop',
        price : 50000,
        decription: 'A laptop is a small, portable personal computer (PC) with a "clamshell" form factor, typically having a thin LCD or LED computer screen mounted on the inside of the upper lid of the clamshell and an alphanumeric keyboard on the inside of the lower lid.',
        quantity: 10,
        tags: ['electronics','gadgets','laptop','computer','pc']
    });
    console.log(product);
} catch(error){
    console.error(error);
}
}

// Read all products
const readProducts = async () => {
    try{
    const products =  await Product.findAll();
    for(let product of products){                 // [[],[],[],[]]
        console.log(product.toJSON());
    }
    // for(int i=0; i<products.length; i++){
    //     console.log(products[i].toJSON());
    // }
} catch(error){
    console.error(error);
}
}

// Read a product by id
const readProductById = async (id) => {
    try{
    const product = await Product.findByPk(id);
    console.log(product.toJSON());
} catch(error){
    console.error(error);
}
}

// Update a product by id
const updateProductById = async (id) => {
    try{
    const product = await Product.findByPk(id);
    console.log("i am existing product",product.toJSON());
    product.name = 'Mobile';
    product.price = 20000;
    product.tags = ['electronics','gadgets','mobile','cellphone'];
    await product.save();
    console.log(product.toJSON());
} catch(error){
    console.error(error);
}
}

// Delete a product by id
const deleteProductById = async (id) => {
    try{
    const product = await Product.findByPk(id);
    await product.destroy();
    console.log("Product deleted successfully");
} catch(error){
    console.error(error);
}
}


const databaseConnection = async () =>{
    //   await db.sync({alter:true});
    await db.sync();
    //   createProduct();
    // updateProductById('a2dab8d5-25ea-4160-99e2-848d288efcf5');
    // readProducts(); 
    // readProductById('a2dab8d5-25ea-4160-99e2-848d288efcf5');
    // deleteProductById('a2dab8d5-25ea-4160-99e2-848d288efcf5');

}

databaseConnection();