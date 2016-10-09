var jquery = require('jquery');
(function($) { 
	$.extend({ //验证工具
		validate : { // 整数
		    isInt: function(str){
		        var reg = /^(-|\+)?\d+$/; return reg.test(str);
		    }, // 小数
		    isFloat: function(str){
		        if (isInt(str)) return true; 
		        var reg = /^(-|\+)?\d+\.\d*$/; return reg.test(str);
		    }, // 中文
		    isCn : function(str){
		        var re1 = /[\u4e00-\u9fa5]/; 
		        return re1.test(str); 
		    }, // 是否为空
		    isEmpty: function(str){
		        if (str != null && str != "") {
		             return false; 
		    } 
		        return true;
		    } 
		}, //时间工具
		timeUtil : { 
		    DateToUnix : function(year, month, day, hour, minute, second) {
		        var oDate = new Date(
		        	Date.UTC(parseInt(year),
		            parseInt(month), 
		            parseInt(day), 
		            parseInt(hour),
		            parseInt(minute), 
		            parseInt(second))
		        ); 
		        return (oDate.getTime() / 1000); 
		    }, 
		    UnixToDate : function(unixTime, isFull, timeZone) { 
		    	if (typeof (timeZone) == 'number') { 
		    		unixTime = parseInt(unixTime) + parseInt(timeZone) * 60 * 60;
		        } 
		        var time = new Date(unixTime * 1000); 
		        var ymdhis = ""; 
		        ymdhis += time.getUTCFullYear() + "-"; 
		        ymdhis += time.getUTCMonth() + "-"; 
		        ymdhis += time.getUTCDate(); 
		        if (isFull === true) { 
		            ymdhis += " " + time.getUTCHours() + ":"; 
		            ymdhis += time.getUTCMinutes() + ":"; 
		            ymdhis += time.getUTCSeconds(); 
		        } 
		        return ymdhis; 
		    }, //东8区
		    UnixToDefaultDate:function(unixTime){
		        return $.timeUtil.UnixToDate(unixTime/1000,true,8);
		    }
		}, // cookie工具
		cookieUtil : { 
		    set : function(name, value) {
		        var Days = 365; // 此 cookie 将被保存 365 天
		        var exp = new Date(); // new Date("December 31, 9998");
		        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
		        document.cookie = name + "=" + escape(value) + ";expires="
		                        + exp.toGMTString(); 
		    }, 
		    get : function(name) { 
		    	var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)")); 
		    	if (arr != null) return unescape(arr[2]); 
		    	return null; 
		    }, 
		    del : function(name){ 
		    	var exp = new Date();
		        exp.setTime(exp.getTime() - 1);
		        var cval = $.cookieUtil.get(name); 
		        if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
		    } 
		} 
	}); 
})(jquery);