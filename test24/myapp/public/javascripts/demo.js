$('.tab li').click(function(){
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
                    $('.section div').remove();
                    var outstr = "";
                    for(var i = 0;i<data.length;i++){
                        outstr += '<div class="div1"><img src= "'+"../"+data[i].newsimg+'">'+
                            '<div><a href="">'+data[i].newstitle+'</a><span>'+data[i].addtime+
                            '</span></div></div>';
                    }
                    $('#section').html(outstr);
                },
                error:function(xmlHTTPRequest, status, error){
                    console.log(status);

                }
            });
		}
