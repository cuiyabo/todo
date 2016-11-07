$(function(){
	var arr=[];
	
	var pos;
	$('#todolist').on('touchstart','input',function(e){
		pos = e.originalEvent.changedTouches[0].clientX; 
	})
	$('#todolist').on('touchend','input',function(e){
		var n = e.originalEvent.changedTouches[0].clientX;
//		console.log(e)
//		
		if(n - pos >=30){
			$(this).delay(300).queue(function(){
//				console.log($(this))
				$(this).addClass("input").dequeue().delay(300).queue(function(){
					$(this).remove().dequeue();
				})
			})
			arr.splice($(this).index(),1);
			localStorage.obj = JSON.stringify(arr);
//			$(this).remove();
//			console.log(arr)
		}
	})
	
	
	var todolist=$('#todolist');
	var li=$('#first');
	if(localStorage.obj){
		arr =JSON.parse(localStorage.obj)
			for(var i=0;i<arr.length;i++){
			$('<input value="">').html(arr[i]).appendTo('#todolist')
		}	
	}
//	console.log($('.aniu'))
// 换颜色
	function getRandomColor(){ 
		var c = '#'; 
		var cArray = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']; 
		for(var i = 0; i < 6;i++){ 
			var cIndex = Math.round(Math.random()*15); 
			c += cArray[cIndex]; 
		} 
		return c; 
	}	
		
		
		 
		
	$('.aniu').on('click',function(){
		localStorage.obj = JSON.stringify(arr);
		$('<input>').css("background-color",getRandomColor()).html('').appendTo('#todolist')
	})
})

