const {con} = require('./connect')

const padrao = (req, res)=>{
    res.send('Funções do CRUD : GetAll, GetByID, InsertUser, DeleteUser, UpdateUser, UpdateLastName, FullUser, CreateTable')
}

const getAll = (req,res)=>{
    con.query('select * from turmaBB', function(err, result, fields){
        if(err) throw err
        if(result.length==0) res.send('Ta vazio animal')
        res.send(result)
    })
}

const getById = (req,res)=>{
    const uid = req.params.uid
    con.query(`select Name, LastName, email from turmaBB where UIdUser = ${uid}`, function(err, result){
        if(err) throw err;
        res.send(result)
    })
}

const InsertUser = (req,res)=>{
    const {Name, Phone, Email, LastName, UIdUser} = req.body
    con.query(`insert into turmaBB values(${UIdUser}, '${Name}', '${LastName}', '${Email}', '${Phone}')`,
    function(err, result, fields){
        if (err) throw err;
        res.send('Insert success!')
    })
}

const DeleteUser = (req,res)=>{
    const id = req.params.id
    con.query(`delete from turmaBB where UIdUser = ${id}`, 
    function(err, result, fields){
        if (err) throw err;
        res.send('Success delete!')
    })  
}

const UpdateUser =(req, res)=>{
    const {Name, UIdUser} = req.body
    con.query(`UPDATE turmaBB Set Name = '${Name}' WHERE UIdUser =${UIdUser}`,
    function(err, result, fields){
        if (err) throw err;
        res.send('Success Update')
    })
}

const UpdateLastName = (req, res)=>{
    const {LastName, UIdUser} = req.body
    con.query(`UPDATE turmaBB Set LastName = '${LastName}' WHERE UIdUser =${UIdUser}`,
    (err, result, fields)=>{
        if(err) throw err;
        res.send('Sucess Update')
    })
}

const FullUser = (req, res)=>{
    const {Name, Phone, Email, LastName, UIdUser} = req.body
    con.query(`UPDATE turmaBB Set Name='${Name}', 
               LastName = '${LastName}', 
               Phone='${Phone}',
               Email = '${Email}' 
               WHERE UIdUser =${UIdUser}`,
    (err, result, fields)=>{
        if(err) throw err;
        res.send('Sucess Update')
    })
}

const CreateTable = (req, res)=>{
    con.query(`create table turmaBB(
        UIdUser int(2),
        Name varchar(80),
        LastName varchar(100),
        Email varchar(100),
        Phone varchar(9),
        primary key(UIdUser));`, (err, result, fields)=>{
            if(err) throw res.send('Table already exists');
            res.send('Create Table Success!')
        })
}

module.exports = {padrao, UpdateUser, DeleteUser, InsertUser,getById, getAll, UpdateLastName, FullUser, CreateTable}