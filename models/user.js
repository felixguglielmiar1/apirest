module.exports=(sequelize, DataType)=>{
return sequelize.define('user',{
    id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement:true
    }, 
    email: {
        type: DataType.STRING,
        unique:true 
    },
    password:{
        type: DataType.STRING
    }
})
}