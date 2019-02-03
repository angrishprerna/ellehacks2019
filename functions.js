
/*function showSentiment1(){
	var isentence = $("#sentence").val(); // input of textbox in isentence
	$("#sentiment").html(isentence);
}*/

function showSentiment2(str) {
	var lng = str.length;
	//var isentence = $("#sentence").val();
	//$("#sentiment").html(isentence);
	//$("#popup").css("opacity","0.8")

	//document.getElementById("sentiment2").innerHTML = lng + ' out of 400 characters';
}


function showMessage() {
	/***var lng = str.length;
	var isentence = $("#sentence").val();
	$("#sentiment").html(isentence);
	$("#popup").css("opacity","0.8")

	document.getElementById("sentiment2").innerHTML = lng + ' out of 400 characters';***/

	var element = document.getElementById("sentence");
	var html = element.value;
	var data = {
		"document":{
			"type":"PLAIN_TEXT",
			"content":html,
		},
		"encodingType":"UTF8"
	};
	

	//console.log(data);

	var API_KEY="AIzaSyCamQCcIbK60C-BBxEQ6WPknVWymJxbe54";

	jQuery.ajax({
    type        : "POST",
    url         : `https://language.googleapis.com/v1/documents:analyzeSentiment?key=${API_KEY}`, 
    contentType : "application/json; charset=utf-8",
    data        : JSON.stringify(data),
    success     : function(_result){ 

        /*if (_result) { 
            alert('SUCCESS', _result);
//console.log(_result)
        } else {
            alert('ERROR');
        }*/
console.log(_result);
        if (_result){
        	var score = _result.documentSentiment.score;
        	var mag = _result.documentSentiment.magnitude;
        	var msg;

        	if (score>=0.5){
        		msg="Highly unlikely to be perceived as aggressive";
        	} else if (score > 0){
        		msg="Unlikely to be perceived as aggressive"
        	} else if (score==0){
        		msg="Neutral"
        	} else if (score>-0.5){
        		msg="Likely to be perceived as aggressive"
        	} else {
        		msg="Highly likely to be perceived as aggressive"
        	}
        	document.getElementById("sentiment").innerHTML = msg;
        } else {
        	alert('ERROR')
        }
    },

    error       : function(_result){

    }
});
}



