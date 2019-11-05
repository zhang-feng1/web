let http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
    let allData = '';
    req.on('data',function(chunk){
        allData += chunk;
    });
    req.on('end',function(){
        // console.log(allData);
        let obj = JSON.parse(allData);
        // console.log(obj.user)
        if(obj.user==='user' && obj.pass==='123'){
            res.end('1');
        }else {
            res.end('-1');
        }
    });

}).listen(3000,()=>{
    console.log('服务器已启动');
})