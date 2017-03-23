$(function(){
	if (window.localStorage.endTime!=undefined && window.localStorage.count_name!=undefined) {
		downCount.param.endTime = window.localStorage.endTime;
		downCount.param.count_name = window.localStorage.count_name;
		downCount.downCount_catulate();
		var interval = window.setInterval(function(){
			downCount.downCount_catulate();
		},1000);
	}else{
		$("#div_all_middle").html("请设置倒数计时事件");
	}	
});
var downCount = {
	param:{
		count_name:"",
		endTime:'2017-04-01 10:00:00',
		day:0,
		hour:0,
		minute:0,
		second:0,
	},
	downcount_painting:function(){
		$("#count_name").html("距离"+this.param.count_name+"还有：");
		$("#day").html(this.param.day>=10?this.param.day:"0"+String(this.param.day));
		$("#hour").html(this.param.hour>=10?this.param.hour:"0"+String(this.param.hour));
		$("#minute").html(this.param.minute>=10?this.param.minute:"0"+String(this.param.minute));
		$("#second").html(this.param.second>=10?this.param.second:"0"+String(this.param.second));
	},
	downCount_catulate:function(){
		var startTime=new Date();  //开始时间
		var endTime=new Date(downCount.param.endTime);   //结束时间
		if (startTime>endTime) {
			alert("请重新设置倒计时事件");
			window.clearInterval(interval);
		}
		var date3=endTime.getTime()-startTime.getTime();  //时间差的毫秒数
		//计算出相差天数
		downCount.param.day=Math.floor(date3/(24*3600*1000));
		//计算出小时数
		var leave1=date3%(24*3600*1000);    //计算天数后剩余的毫秒数
		downCount.param.hour=Math.floor(leave1/(3600*1000));
		//计算相差分钟数
		var leave2=leave1%(3600*1000);        //计算小时数后剩余的毫秒数
		downCount.param.minute=Math.floor(leave2/(60*1000));
		//计算相差秒数
		var leave3=leave2%(60*1000);    //计算分钟数后剩余的毫秒数
		downCount.param.second=Math.round(leave3/1000);
		downCount.downcount_painting();

	}
}
