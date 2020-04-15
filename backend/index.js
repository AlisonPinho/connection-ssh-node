const express = require('express')
const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    return res.json({teste:'tessss'})
})







/*
const icmp = require('icmp')

icmp.ping('192.168.201.30', 100)   ////////  ICMP  ////////
    .then(obj => {
        console.log(obj)
    })
    .catch(err => console.log(err))
*/


/*
var ping = require('ping')
 
var hosts = ['192.168.2.16', 'google.com', 'yahoo.com']        //////////  PING  ///////////
setInterval(()=>{hosts.forEach(function(host){
    ping.sys.probe(host, (isAlive) => {
        var msg = isAlive ? 'host ' + host + ' is alive' : 'host ' + host + ' is dead'
        console.log(msg)
    },{timeout: 5})
})},1000)
*/


app.listen(1606)
console.log('server online!')