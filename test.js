function changeText(id) {
	//var oldText = document.getElementById(id).innerHTML;
	console.log("#" + id); 
	if ($("#" + id).html == "YES") {
		$("#" + id).html("NO");
	}
	else {
		$("#" + id).html("YES");
	}
}
