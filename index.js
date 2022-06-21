const {con, server, port} = require('./connect')

con.connect((err)=>{
    if(err){
        console.log('Error connecting to Db')
        return ;
    }
    console.log('Connection established')
})

const {padrao, UpdateUser, DeleteUser, InsertUser,getById, getAll, UpdateLastName, FullUser, CreateTable} = require('./functions')
server.get('/', padrao)
server.get('/allPeople', getAll)
server.get('/searchByUID/:uid', getById)
server.post('/insertUser', InsertUser)
server.delete('/deleteUserById/:id', DeleteUser)
server.put('/updateUser', UpdateUser) //To update name
server.put('/updatelastname', UpdateLastName) // To update last name
server.put('/updatefull', FullUser)// To update de full user
server.post('/createTable', CreateTable)

server.listen(port, ()=>{console.log(`Running at 'http://localhost:${port}'`)})
