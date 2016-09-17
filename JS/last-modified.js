/*last-modified表示最后的修改时间
第一次浏览器访问这个内容，将当前文件的最后修改时间，送给浏览器端
If-Modified-Since 自从什么时间被修改了
服务器端读取现在的最新文件看当前什么时候被修改的，如果和以前一样就表示没有修改，就告诉浏览器走缓存*/
var http=require('http');
var fs=require('fs');
var server1 = http.createServer(function(request,response){
   
    if(request.url=='/'){
        fs.createReadStream('./index.html').pipe(request);
    }else if(request.url=='/index.js'){
        var timer=request.headers['if-modified-since'];
        var stat = fs.statSync('./index.js');
        if(timer&&timer==stat.ctime.toUTCString()){//如果有，并且没有被修改过
          //有if-modified-since头，并且两次获取的时间一致
          response.statusCode=304;//告诉浏览器走缓存
          response.end('');
        }else{
          
          response.setHeader('Last-Modified',stat.ctime.toUTCString());
          fs.createReadStream('./index.js').pipe(response);
        }
    }
});
server1.listen(12345);
