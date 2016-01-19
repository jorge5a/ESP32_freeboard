window.targetThing = "";

setTimeout(function(){	
	var presetThing = freeboard.getDatasourceSettings("Switch").thing_id;
	if (presetThing !=='') {
		window.targetThing = presetThing;
		
		
	}

	
	

	
//select
	$('select').change(function(e){
		
		
		var outputName = $(this).attr('id');
		dweetio.dweet_for(window.targetThing+'-'+outputName, {state:$(this).val()}, function(err, dweet){
				console.log(dweet);
				window.switchState(outputName);
				});	
	});	
	
	
	
	//Select Initial state
	for (i = 0; i < 4; i++) {
		if ($('#'+i).length){
		 window.switchState(i);	
		
		}
   
}
		
},3000);



window.switchState=function(name){
	dweetio.get_latest_dweet_for(window.targetThing+'-'+name, function(err, dweet){

    var dweet = dweet[0]; // Dweet is always an array of 1
	freeboard.showLoadingIndicator(true);
		setTimeout(function(){	
			$('#'+name).val(dweet.content.state);
			freeboard.showLoadingIndicator(false);
			},100);
  	
  	

	});
	
	
}




