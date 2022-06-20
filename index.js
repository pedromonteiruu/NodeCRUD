const {con, server, port} = require('./connect')

con.connect((err)=>{
    if(err){
        console.log('Error connecting to Db')
        return ;
    }
    console.log('Connection established')
})

const {UpdateUser, DeleteUser, InsertUser,getById, getAll} = require('./functions')
server.get('/allPeople', getAll)
server.get('/searchByUID/:uid', getById)
server.post('/insertUser', InsertUser)
server.delete('/deleteUserById/:id', DeleteUser)
server.put('/updateUser', UpdateUser)

server.listen(port, ()=>{console.log(`Running at 'localhost:${port}'`)})
