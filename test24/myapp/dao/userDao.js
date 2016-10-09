// 实现与MySQL交互
var mysql = require('mysql');
//var $conf = require('../conf/db.js');
//var $util = require('../util/util.js');
var $sql = require('./newsSqlMapping');

// 使用连接池，提升性能
var pool  = mysql.createPool({
    host: '127.0.0.1', 
    user: 'root',
    password: '',
    database:'phplesson', 
    port: 3306
});
pool.getConnection(function(err,connection){
  connection.query('SELECT * FROM news;',function(err,result){
    //console.log(result);
    connection.release();
  });
});
// 向前台返回JSON方法的简单封装
var jsonWrite = function (res, ret) {
  if(typeof ret === 'undefined') {
    res.json({
      code:'1',
      msg: '操作失败'
    });
  } else {
    res.json(ret);
  }
};

module.exports = {
  add: function (req, res, next) {
     var param = req.body;
      if(param.newstitle == null || param.newsimg == null || param.addtime == null) {
          jsonWrite(res, undefined);
          return;
      }
    pool.getConnection(function(err, connection) {
      // 建立连接，向表中插入值
      connection.query($sql.insert, [parseInt(param.newstype),param.newstitle, param.newsimg, param.addtime] ,function(err, result) {
        if(result) {
          result = {
            code: 200,
            msg:'增加成功'
          };    
        }

        // 以json形式，把操作结果返回给前台页面
        jsonWrite(res, result);

        // 释放连接 
        connection.release();
      });
    });
  },
  delete: function (req, res, next) {
    // delete by Id
    pool.getConnection(function(err, connection) {
      var newsid = req.body.newsid;
      connection.query($sql.delete, newsid, function(err, result) {
        if(result.affectedRows > 0) {
          result = {
            code: 200,
            msg:'删除成功'
          };
        } else {
          result = void 0;
        }
        jsonWrite(res, result);
        connection.release();
      });
    });
  },
  update: function (req, res, next) {
    // update by newsid
      var param = req.body;
      if(param.newstitle == null || param.newsimg == null || param.addtime == null) {
          jsonWrite(res, undefined);
          return;
      }
      pool.getConnection(function(err, connection) {
         var newsid = req.body.newsid;
         console.log(newsid); 
          connection.query($sql.update, [parseInt(param.newstype),param.newstitle, param.newsimg, param.addtime, newsid], function(err, result) { 
              if(result.affectedRows > 0) {
                result = {
                  code: 200,
                  msg:'删除成功'
                };
              } else {
                 result = void 0;
              }
              jsonWrite(res, result);   
              connection.release();
          });
      });

  },
  queryBynewstype: function (req, res, next) {
      //var newstype = +req.query. param; // 为了拼凑正确的sql语句，这里要转下整数
      pool.getConnection(function(err, connection) {
          var param =  req.types;
          var newstype =req.query.types;
          connection.query($sql.queryBynewstype, newstype, function(err, result) {
              jsonWrite(res, result);
              connection.release();

          });
      });
  },
  queryAll: function (req, res, next) {
      pool.getConnection(function(err, connection) {
          connection.query($sql.queryAll, function(err, result) {
              jsonWrite(res, result);
              connection.release();
          });
      });
  }

};
