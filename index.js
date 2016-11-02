$(function(){
	var pos;
	$('#todolist').on('touchstart','input',function(e){
		pos = e.originalEvent.changedTouches[0].clientX; 
	})
	$('#todolist').on('touchend','input',function(e){
		var n = e.originalEvent.changedTouches[0].clientX;
//		console.log(e)
		if(n - pos >=30){
			arr.splice($(this).index(),1);
			localStorage.obj = JSON.stringify(arr);
			$(this).remove();
		}
	})
	
	var arr=[];
	var todolist=$('#todolist');
	var li=$('#first');
	if(localStorage.obj){
		arr =JSON.parse(localStorage.obj)
			for(var i=0;i<arr.length;i++){
			$('<input>').html(arr[i]).appendTo('#todolist')
		}	
	}
//	console.log($('.aniu'))
	$('.aniu').on('click',function(){
		localStorage.obj = JSON.stringify(arr);
		$('<input>').html('').appendTo('#todolist')
	})
})

