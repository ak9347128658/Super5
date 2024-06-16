const {Order,User, Product} = require('../models/index');

// create a new order
const createOrder = async (req, res,next) => {  
  try{
    const {userId} = req.userData;
    const {
        total,
        carts                                    // [{productId,quantity},{productId,quantity},{productId,quantity}]
        } = req.body;
    const user = await User.findByPk(userId);

    
    const order = await Order.create({
        total:total
    })
            
    await order.setUser(user);
    await order.save();
    for(let pro of carts){
        const product = await Product.findByPk(pro.productId);
        await order.addProduct(product,{through:{quantity:pro.quantity}});
    }
    if(order)
        res.status(201).json({message: 'Order created successfully',order:order.dataValues});
    else 
      res.status(400).json({message: 'Error creating order'});

  }catch(err){
    console.log(err);
    res.status(400).json({message: 'Error creating order'});
  }

}

// get all orders
const getOrders = async (req, res,next) => {  
  try{
    const orders = await Order.findAll();
    if(orders)
        res.status(200).json({message: 'Orders fetched successfully',orders:orders.dataValues});
    else 
      res.status(400).json({message: 'Error fetching orders'});

  }catch(err){
    console.log(err);
    res.status(400).json({message: 'Error fetching orders'});
  }

}

// get order by id
const getOrderById = async (req, res,next) => {  //http://localhost:3000/getorderbyid/:orderId
  try{
    const {orderId} = req.params;
    const order = await Order.findByPk(orderId);
    if(order)
        res.status(200).json({order});
    else 
      res.status(400).json({message: 'Error fetching order'});

  }catch(err){
    console.log(err);
    res.status(400).json({message: 'Error fetching order'});
  }

}

// update order by id
const updateOrder = async (req, res,next) => {  //http://localhost:3000/updateorder/:orderId
  try{
    const {orderId} = req.params;
    const {
        total,
        status
        } = req.body;
    const order = await Order.findByPk(orderId);
    if(order){
        if(status)
            order.status = status;
        if(total)
           order.total = total;
        
        await order.save();
        res.status(200).json({message: 'Order updated successfully',order});
    }else 
      res.status(400).json({message: 'Error updating order'});

  }catch(err){
    console.log(err);
    res.status(400).json({message: 'Error updating order'});
  }

}


module.exports = {
    createOrder,
    getOrders,
    getOrderById,
    updateOrder
}
