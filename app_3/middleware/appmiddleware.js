
const appmidelware = (req,res,next)=>{
    console.log("i am in middelware..");
    next();
}

module.exports = {appmidelware};