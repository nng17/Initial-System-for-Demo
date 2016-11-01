function changeText(id) {
	var oldText = document.getElementById(id).innerHTML;
	console.log("#" + id); 
	if (oldText == "YES") {
		$("#" + id).html("NO");
	}
	else {
		$("#" + id).html("YES");
	}
}
