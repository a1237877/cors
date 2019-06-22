var express = require('express')
var app = express();
var cors = require('cors')

// req->res
// 连接数据库，找到数据后 next一下
// 验证下身份信息 session next
// 表单处理  parseBody  next
// 跨域 也是一件事 也交给中间件来处理 cors
app.use(cors())   //启用cors中间件


app.get('/products/:id', function(req, res, next) {
  res.json({
    msg: 'This is cross-enabled for all original'
  })
});



app.listen(80, function() {
  console.log('web server listening on port 80');
})
