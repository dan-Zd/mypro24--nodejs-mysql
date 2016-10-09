// CRUD SQL语句
var news = {
  insert:'INSERT INTO news(newstype,newstitle,newsimg,addtime) VALUES(?,?,?,?)',
  update:'update news set newstype=?, newstitle=?, newsimg=?, addtime=? where newsid=?',
  delete: 'delete from news where newsid=?',
  queryBynewstype: 'select * from news where newstype=?',
  queryAll: 'select * from news'
};

module.exports = news;