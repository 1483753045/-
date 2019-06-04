//倒计时代码

// function leftTime(year, month, day, hour, minute, second) {
// 	var time = new Date();
// 	var time1 = new Date(2019, 10, 19, 0, 0, 0);
// 	var timeOut = time1 - time;
// 	if (timeOut <= 0) {
// 		document.getElementById("time").innerHTML = "您输入的时间有误，请检查后重新输入";
// 	} else {
// 		var day = parseInt(timeOut / 1000 / 60 / 60 / 24);
// 		var hour = parseInt(timeOut / 1000 / 60 / 60 % 24);
// 		var minute = parseInt(timeOut / 1000 / 60 % 60);
// 		var second = parseInt(timeOut / 1000 % 60);
// 		document.getElementById("time").innerHTML = day + "天" + hour + "小时" + minute + "分钟" + second + "秒";
// 	}
// 	setTimeout("leftTime()", 1000);
// }
// function restTime(){
//         var setTime = new Date("2019/10/19 00:00:00");
//         var nowTime = new Date();
//         var restSec = setTime.getTime() - nowTime.getTime();
//         var day = parseInt( restSec / 1000 / 60 / 60 / 24);
// 		var hours = parseInt(restSec / 1000 / 60 / 60 % 24)
//         var minute = parseInt(restSec / 1000 / 60 % 60);
//         var second = parseInt(restSec / 1000 % 60);
// 		$("#time").html(day+"天"+hours+"小时"+minute+"分"+second+"秒");
//  }
// 	setTimeout("restTime()",1000);
var fnName = "djs";
	
	window[fnName] = function(){
		//此时时间
		var now = new Date();
		//未来时间
		var future = new Date(2019,9,18);
		//时间差
		var time = future - now;
		
		if(time < 0){
			var days = 0,hours = 0,minutes = 0,seconds = 0;
		}else{
			var days = Math.floor(time/1000/60/60/24);
			var hours = Math.floor(time/1000/60/60%24);
			var minutes = Math.floor(time/1000/60%60);
			var seconds = Math.floor(time/1000%60);
		}
		
		days = bz(days);
		hours = bz(hours);
		minutes = bz(minutes);
		seconds = bz(seconds);
		
		$(".djs>div>div>div:eq(0)>span:first-of-type").html(days);
		$(".djs>div>div>div:eq(1)>span:first-of-type").html(hours);
		$(".djs>div>div>div:eq(2)>span:first-of-type").html(minutes);
		$(".djs>div>div>div:eq(3)>span:first-of-type").html(seconds);
		
		setTimeout("djs()",1000);
	}
	djs();
	function bz(t){
		if(t < 10){
			t = "0" + t;
		}
		return t;
	}
//轮播图
$(function() {
	var count = 0;
	var $li = $(".lbt>ul>li");
	$(".arrow-left").click(function() {
		count--;
		if (count == -1) {
			count = $li.length - 1;
		}
		$li.eq(count).fadeIn(1000).siblings().fadeOut(1000);
	});
	$(".arrow-right").click(function() {
		count++;
		if (count == $li.length) {
			count = 0;
		}
		$li.eq(count).fadeIn(1000).siblings().fadeOut(1000);
	});
	timeID = setInterval(function() {
		count++;
		if (count == $li.length) {
			count = 0;
		}
		$li.eq(count).fadeIn(1000).siblings().fadeOut(1000);
	}, 4000);
	$(".lbt").mouseenter(function() {
		clearInterval(timeID);
	});
	$(".lbt").mouseleave(function() {
		timeID = setInterval(function() {
			count++;
			if (count == $li.length) {
				count = 0;
			}
			$li.eq(count).fadeIn(1000).siblings().fadeOut(1000);
		}, 4000);
	});
})
// 第二张轮播图
$(function() {
	var $dw = $(".six #twelve",".six #thirteen",".six #fourteen",".six #fifteen");
	var aoe = 0;
	$(".left").click(function(){
		aoe--;
		if(aoe == -1){
			aoe = $dw.length-1;
		}
		$dw.eq(aoe).fadeIn(1000).siblings().fadeOut(1000);
	});
	$(".right").click(function(){
		aoe++;
		if(aoe == $dw.length){
			aoe = 0;
		}
		$dw.eq(aoe).fadeIn(1000).siblings().fadeOut(1000);
	});
	timeID = setInterval(function(){
		aoe++;
		if(aoe == $dw.length)
		{
			aoe = 0;
		}
		$li.eq(aoe).fadeIn(1000).siblings().fadeOut(1000);
	},2000);
	$(".six #seven img").mouseenter(function(){
		clearInterval(timeID);
	});
	$(".six #seven img").mouseleave(function(){
		timeID = setInterval(function(){
			aoe++;
			if(aoe == $dw.length)
			{
				aoe = 0;
			}
			$li.eq(aoe).fadeIn(1000).siblings().fadeOut(1000);
		},2000);
	});
});
