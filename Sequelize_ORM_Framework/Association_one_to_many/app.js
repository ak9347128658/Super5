const db = require('./configure/db');
const Post = require('./models/Post')
const User = require('./models/User');

User.hasMany(Post ,{foreignKey : 'userId',onDelete:'CASCADE'})
Post.belongsTo(User, {foreignKey : 'userId' ,onDelete:'CASCADE'})

// ASif   ==> post 1
// Asif   ===> post 2
// Asif  ===> post 3

const createuser = async (name,email) =>{
    await User.create({
        name:name,
        email:email
    })
}

const createPost = async (userId,title,content) =>{
    await Post.create({
        title:title,
        content:content,
        userId :userId
    });

}

const getUserWithPosts = async (userId) => {
     const user = await User.findByPk(userId,{
        include: Post
     })
     return user;
}

// const deleteUserwithPosts = async (userId) => {

//      const posts = await Post.findAll({
//         where:{
//             userId:userId
//         }
//      })
//      for(let post of posts){          // [ [] , [] , [] , []...]
//         await post.destroy();
//      }

//      const user = await  User.findByPk(userId);

//      await user.destroy();
// }

// deleteUserwithPosts AFTER onDelete="CASCADE"

const deleteUserwithPosts = async (userId) =>{
    const user = await User.findByPk(userId);
    await user.destroy();
}

const dbConnection = async () => {
    await db.sync({alter:true});
    // await createuser('vinay','vinay@gmail.com');
    // await createPost(4,'first post by user jane doe','first content for jane doe');
    // await createPost(4,'second post by user jane doe','second content for jane doe');
    // await createPost(4,'third post by user jane doe','third content for jane doe');
    // await createPost(4,'fourth post by user jane doe','fourth content for jane doe');
    // const user = await getUserWithPosts(2);
    // console.log("user details : ",user.dataValues)
    // for(let post of user.dataValues.posts){             // [[],[],[]]
    //     console.log("post :",post.dataValues)
    // }

    deleteUserwithPosts(4);
}

dbConnection();