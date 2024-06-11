const db = require('../config/db');

const createtask =  async (req,res,next)=>{
   try{
      const {userId} = req.userData;
    const {title,description} = req.body;
    const insertQuery = `INSERT INTO tasks (userId,title,description) VALUES (?,?,?)`;

    const task = await db.execute(insertQuery,[userId,title,description]);

    if(task[0].affectedRows === 1){
        res.status(200).json({
            message:"Task created successfully"
        });
    }else{
        res.status(500).json({
            message:"Something went wrong"
        })
    }
   }catch(error){
      console.log("some error occured",error);
      res.status(500).json({
        "message":"Something went wrong"
      });
   }
} 

const deletetask = async (req,res,next) =>{
  try{
    const {userId} = req.userData;
    const {taskId} =req.params;
    const deleteQuery = `DELETE FROM tasks WHERE userId = ? AND id = ?`;
    const deletedTask = await db.execute(deleteQuery,[userId,taskId]);
    if(deletedTask[0].affectedRows === 1){
      res.status(200).json({
        "message":"Task deleted successfully"
      });
    }else{
        res.status(500).json({
          "message":"user or task not found"
        });
    }
  }catch(error){
    console.log("some error occured",error);
    res.status(500).json({
      "message":"Task not deleted successfully"
    });
  }
}


const getTaskById = async (req,res,next) =>{
     try{
    const {userId} = req.userData;
      const {taskId} = req.params;
      const selectQuery = `SELECT * FROM tasks WHERE id = ? and userId = ?`;
      const getTask = await db.execute(selectQuery,[taskId,userId]);
      if(getTask[0].length === 1){
        res.status(200).json({
          "task":getTask[0][0]
        });
      }
      else{
        res.status(404).json({
          "message":"Task not found"
        });
      }
     }catch(error){
        console.log("some error occured",error);
        res.status(500).json({
          "message":"Task not found"
        });

      }
      //  getTask = [[[1,'taksone','somedescription ...'],[]]]
}

const updateTaskByid = async (req,res,next) =>{
   try{
    const {userId} = req.userData;
    const {taskId} = req.params;
    const {title,description} = req.body;

    const updateQuery = `UPDATE tasks SET title = ?, description = ? WHERE id = ? and userId = ?`;

    const updatetaskres = await db.execute(updateQuery,[title,description,taskId,userId]);

    if(updatetaskres[0].affectedRows === 1){
      res.status(200).json({
        "message":"Task updated successfully"
      });
    }else{
      res.status(500).json({
        "message":"Task not updated"
      });
    }
   }catch(error){
      console.log("some error occured",error);
      res.status(500).json({
        "message":"Task not updated"
      });
   
   }
}

const getTasks = async (req,res,next) =>{
  try{
    const {userId} = req.userData;
    const selectQuery = `SELECT * FROM tasks where userId = ?`;
    const tasks = await db.execute(selectQuery,[userId]);
    res.status(200).json({
      "tasks":tasks[0]
    });
  }catch(error){
    console.log("some error occured",error);
    res.status(500).json({
      "message":"Tasks not found"
    });
  }
}

module.exports = {createtask,deletetask,getTaskById,updateTaskByid,getTasks}