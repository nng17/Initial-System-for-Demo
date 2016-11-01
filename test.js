function changeText(id) {
	var oldText = document.getElementById(id).innerHTML;
	if (oldText == "YES") {
		$("#" + id).innerHTML("NO");
	}
	else {
		$("#" + id).innerHTML("YES");
	}
}
