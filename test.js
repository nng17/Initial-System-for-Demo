function changeText(id) {
	//var oldText = document.getElementById(id).innerHTML;
	console.log($("#"+id)); 
	console.log($("#"+id).html)); 
	if ($("#" + id).html == "YES") {
		$("#" + id).html("NO");
	}
	else {
		$("#" + id).html("YES");
	}
}
