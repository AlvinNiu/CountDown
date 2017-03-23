$(function(){
		$("#btn_sub").click(function(){			
			if(window.localStorage){
				var endTime = Trim($("#endTime").val());
				var count_name =Trim($("#count_name").val());
				if (!TimeFormat(endTime)) {
					alert("时间格式不正确");
				}else if(count_name==null||count_name==""){
					alert("增加事件不能为空");
				}else if(new Date(endTime)<new Date()){
					alert("时间不能小于当前时间");
				}else{
					window.localStorage.endTime = endTime;
    				window.localStorage.count_name = count_name;
    				alert('设置成功!');
    				console.log("设置事件成功");
    			}    			
			}else{
    			alert('您的浏览器不支持!');
    			console.log("浏览器不支持localStorage!");
			}
		});
});
var Trim = function(str){
	return str.replace(/(^\s*)|(\s*$)/g, ""); 
}
//判断是否满足固定的时间格式
var TimeFormat = function(str){
	var reg= new RegExp("^\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) ([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$","g");
	return str.match(reg)!=null;
}
