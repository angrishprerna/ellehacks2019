
function showSentiment1(){
	var isentence = $("#sentence").val(); // input of textbox in isentence
	$("#sentiment").html(isentence);
}

function showSentiment2(str) {
	var lng = str.length;
	var isentence = $("#sentence").val();
	$("#sentiment").html(isentence);
	$("#popup").css("opacity","0.8")

	document.getElementById("sentiment2").innerHTML = lng + ' out of 400 characters';
}


