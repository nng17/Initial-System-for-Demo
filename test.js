function changeText(id) {
	var oldText = document.getElementById(id).innerHTML;
	console.log("#" + id); 
	if (oldText == "YES") {
		$("#" + id).innerHTML("NO");
	}
	else {
		$("#" + id).innerHTML("YES");
	}
}
