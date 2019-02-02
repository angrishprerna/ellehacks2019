
function showSentiment1(){
	var isentence = $("#sentence").val(); // input of textbox in isentence
	$("#sentiment").html(isentence);

}

function showSentiment2(str) {
	var lng = str.length;
	document.getElementById("sentiment2").innerHTML = lng + ' out of 400 characters';
}


