const Product = require('./models/Product');
const { Sequelize} = require('sequelize');
const db = require('./configure/db')

const createproduct = async () =>{
   await Product.create(
    { 
      name:'Laptop',
  price: 800
}
);
}

// const getproducts = async () =>{
//     const products = await Product.findAll();       //[[],[],[]]
//      for(let product of products){
//         console.log(product.dataValues);
//      }
//     }

// const getproducts = async () =>{
//     const products = await Product.findAll({
//         attributes: ['id','name','price']
//     });       //[[],[],[]]
//      for(let product of products){
//         console.log(product.dataValues);
//      }
//     }

// question :  get all the products whose price is greater than 500
// const getproductsmorethan500 = async () =>{
//     const products = await Product.findAll({where:{
//         price:{
//             [Sequelize.Op.gt]:500              // gt = greater than ,lt = less than, gte = greater than equal to, lte = less than equal to
//         }
//     }});       //[[],[],[]]
//      for(let product of products){
//         console.log(product.dataValues);
//      }
//     }

// question : get all the products which are in the range of 500 to 1200
// const getproductsmorethan500andlessthen1200 = async () =>{
//     const products = await Product.findAll({
//         where:{
//           price:{
//             [Sequelize.Op.gte]:500,
//             [Sequelize.Op.lte]:1200
//           }
//         },
//         attributes: ['id','name','price']
//     });
//     for(let product of products){
//         console.log(product.dataValues);
//     }
// }

// const getproductsmorethan500andlessthen1200 = async () =>{
//     const products = await Product.findAll({
//         where:{
//           price:{
//             [Sequelize.Op.between]: [500,1200]
//           }
//         },
//         attributes: ['id','name','price']
//     });
//     for(let product of products){
//         console.log(product.dataValues);
//     }
// }

// question: get all product  whose name Laptop and whose price is less than 1000
// const getproductlessthen1000whosenameislaptop = async () =>{
//       const products = await Product.findAll({
//         where:{
//            name:'Laptop',
//            price:{
//              [Sequelize.Op.lte] : 500
//          }
//         }
//       });
//       for(let product of products){
//           console.log(product.dataValues);
//       }
// }

// question : create a 2 or more products at a time
// const createmultipleproducts = async ()=>{
//    await Product.bulkCreate([
//          {name:'Mobile',price:899},
//          {name:'Tablet',price:788},
//          {name: 'Laptop', price: 1200},
// {name: 'Smartwatch', price: 350},
// {name: 'Earbuds', price: 150},
// {name: 'Wireless Charger', price: 80},
// {name: 'Gaming Console', price: 500},
// {name: 'Desktop PC', price: 1500},
// {name: 'eReader', price: 130},
// {name: 'Speaker', price: 250},
// {name: 'Camera', price: 900},
// {name: 'Keyboard', price: 100},
// {name: 'Mouse', price: 50},
// {name: 'External Hard Drive', price: 200},
// {name: 'Smart TV', price: 800},
//    ]);
// }

// question: perform pagination on products table  18 ==> 
    // page 1  1-5                        1  1-10
    // page 2  6-10                       2  11-18
    // page 3  11-15
    // page 4 16-18
// const paginationproducts = async () => {

//   const products = await Product.findAll({
//         limit:5,
//         offset:0,
//         attributes: ['id','name','price']
//   });
//  for(let product of products){
//      console.log(product.dataValues);
//  }

// }
// const paginationproducts = async (page) => {

//     const products = await Product.findAll({
//           limit:5,
//           offset:5*(page -1),
//           attributes: ['id','name','price']
//     });
//    for(let product of products){
//        console.log(product.dataValues);
//    }
  
//   }

// question : increment the product price by 20

const priceIncrement = async() => {
   await Product.increment('price',{
    by: 20,
    where:{
      name:'Mouse'
    }
   }) 
}

//question : decrement the product price by 20 where name ='Mouse'
const priceDecrement = async() => {
  await Product.decrement('price',{
   by: 20,
   where:{
     name:'Mouse'
   }
  }) 
}


const dbconnection = async () =>{
  await db.sync();
  // await createproduct();
// getproducts();
// getproductsmorethan500();
// getproductsmorethan500andlessthen1200();
// getproductlessthen1000whosenameislaptop();
// createmultipleproducts();
// paginationproducts(4);
// console.log(" sum of all product: ",await Product.sum('price'));
// console.log(" max of all product: ",await Product.max('price'));
// console.log(" min of all product: ",await Product.min('price'));
// console.log('count of all product: ',await Product.count());
// const totalpage = await  Product.count()/3;
// console.log('total page: ',Math.ceil(totalpage));   //  1.1 ==> 2
// priceIncrement();
// priceDecrement();
}

dbconnection();