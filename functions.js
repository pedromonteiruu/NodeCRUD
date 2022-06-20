const {con, server, port} = require('./connect')

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
    console.log(req.body)
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

module.exports = {UpdateUser, DeleteUser, InsertUser,getById, getAll}