module.exports=(sequelize, DataType)=>{
    return sequelize.define('categoria',
    {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement:true
        }, 
        nombre: {
            type: DataType.STRING,
        }} ,  { 
            tableName: 'categorias'
        })}
    
   