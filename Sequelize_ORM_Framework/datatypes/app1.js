const db = require('./configure/db');
const Example = require('./models/Example');

const createExample = async () => {
         try{
    const example =   await  Example.create({
          stringField: "Some more example",
          textField: "This is a more example text",
          integerField: 123,
          floatField: 3.14,
          decimalField: 10.2,
          dateField: new Date(),
          booleanField: true,
          enumField: 'banna',
          jsonField: {
              key1: "value1",
              key2: "value2"
          }
      });

      // no need to write sql query
      // insert into Example values('Hello World','This is a text field',123,3.14,10.2,'2021-09-09'
    //   ,true,'apple,'{"key1":"value1","key2":"value2"}');
      console.log("i am create example :",example)
    }catch(error){
        console.log("create error :",error)
    }
}

const readExample = async ()=>{
    const examples =  await Example.findAll();  // select * from example;  [[],[],[],[]] 
    
    for(let example of examples){
      console.log("i am example :",example.dataValues)
    }
}

const updateExample = async () => {
    const example = await Example.findByPk("8b80e36c-ac5b-45bd-b5c3-18872872a4ab");
    example.stringField = "Hello World Updated";

    await example.save();
    console.log("i am update example :",example.dataValues)
}

const deleteExample = async () => {
    const example = await Example.findByPk(2);
    await example.destroy();
    console.log("i am delete example :",example.dataValues)
}

const dbContection  = async() => {
    try{
    await db.sync();
    // createExample();
    // await readExample();
    // await updateExample();
    // await deleteExample();
    console.log("connection has been established successfully");
    }catch(error){
        console.log("i am connection error :",error);

    }
}


dbContection();

