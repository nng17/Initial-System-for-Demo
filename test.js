function changeText(id) {
	console.log($("#"+id));
	//var oldtext = $("#"+id).html();
	if ($("#"+id).html() == "YES") {
		$("#" + id).html("NO");
	}
	else {
		$("#" + id).html("YES");
	}
}
