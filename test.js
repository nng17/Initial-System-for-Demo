function changeText(id) {
	console.log($("#"+id));
	var oldtext = $("#"+id).html();
	console.log(oldtext); 
	if (oldtext == "YES") {
		$("#" + id).html("NO");
	}
	else {
		$("#" + id).html("YES");
	}
}
