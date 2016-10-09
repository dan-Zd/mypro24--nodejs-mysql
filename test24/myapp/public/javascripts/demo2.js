$('#menu .li').click(function(){
    loadNews($(this).attr("data-target"));
    //console.log($(this).attr("data-target"))
});
loadNews(1);
function loadNews(types){
    $.ajax({
        url:"/users/getList",
        type:"GET",
        data:{"types":types},
        success:function(news){
            data = eval(news);
            console.log(data[0]);
             $('#tbody  td').remove();
             $('#more').hide();
             $('#addnews').show();
             $('table').show(500);
            for(var i = 0;i<data.length;i++){
                $('#tbody').append('<tr><td>'+data[i].newstype+'</td><td>'+data[i].newsid+
                    '</td><td>'+data[i].newstitle+'</td><td>'+data[i].newsimg+'</td><td>'+
                    data[i].addtime+'</td><td><a id="edit" onclick="edit('+data[i].newsid+')">'+"修改"+
                    '</a></td><td><a id="delete" onclick="delet('+data[i].newsid+')">'+"删除"+'</a></td></tr>');
            }
        },
        error:function(xmlHTTPRequest, status, error){
            console.log(status);

        }
    });
};
$('#menu #li5').click(function(){
    $('table').hide();
    $('#addnews').hide();
    $('#more').show(1000);
});
//增加新闻
$("#addnews").click(function(){
    $('#add').show(500);
    $('#addsub').click(function(){
        var mydate = new Date();
       $.ajax({
            url:"/users/addNews",
            type:"POST",
            data:{"newstype":$('#type').val(),
              // "newsid":$('#id').val(),
              "newstitle":$('#title').val(),
              "newsimg":$('#img').val(),
              "addtime": mydate.toLocaleString()
            },
            success:function(news){
                console.log(newstype);
            },
            error:function(xmlHTTPRequest, status, error){
                console.log(status);

            }
        });
    });
});

//修改新闻
function edit(newsid){
    $('#change').show(500);
    $('#editsub').click(function(){
        var mydate = new Date();
       $.ajax({
            url:"/users/editNews",
            type:"POST",
            data:{"newstype":$('#type2').val(),
              "newsid":newsid,
              "newstitle":$('#title2').val(),
              "newsimg":$('#img2').val(),
              "addtime":mydate.toLocaleString()
            },
            success:function(news){
                console.log(newsid);
            },
            error:function(xmlHTTPRequest, status, error){
                console.log(status);

            }
        });
    });
};

//删除新闻
function delet(newsid){
    $.ajax({
        url:"/users/deleteNews",
        type:"POST",
        data:{"newsid":newsid},
        success:function(data){
            console.log(newsid);
        }
    });
}
