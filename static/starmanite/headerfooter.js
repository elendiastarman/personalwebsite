$(document).keydown(function(event) {
	var tabs = $('.tabs');
	var path = $('#path')[0].children;
	catText = path[0].innerHTML.toLowerCase();
	if (path.length > 1){ subcatText = path[1].innerHTML.toLowerCase(); } else {subcatText="";}
	var level = 1;
	var cat;
	var subcat;
	
	if (tabs.length > 0) {
		var lis = tabs[0].children;
		for (var i=0; i<lis.length; i++) {
			var elem = lis[i];
			var atext = elem.children[0].innerHTML;
			var alink = elem.children[0].href;
			
			if (atext.toLowerCase() === catText) {
				cat = [lis,i, atext,alink];
			}
		}
	}
	if (tabs.length > 1) {
		var lis = tabs[1].children;
		for (var i=0; i<lis.length; i++) {
			var elem = lis[i];
			var atext = elem.children[0].innerHTML;
			var alink = elem.children[0].href;
			
			if (atext.toLowerCase() === subcatText) {
				level = 2;
				subcat = [lis,i, atext,alink];
			}
		}
	}
	
	if (event.which == 87) { //W, up
		if (level == 1) {
			window.location.href = $('#logo > a')[0].href;
		} else if (level == 2) {
			window.location.href = cat[3];
		}
	} else if (event.which == 83) { //S, down
		if (level == 1 && tabs.length == 2) {
			window.location.href = tabs[1].children[0].children[0].href;
		}
	} else if (event.which == 65) { //A, left
		if (level == 1) {
			var j = cat[1]-1;
			if (j < 0) {j = cat[0].length-1}
			window.location.href = cat[0][j].children[0].href;
		} else if (level == 2) {
			var j = subcat[1]-1;
			if (j < 0) {j = subcat[0].length-1}
			window.location.href = subcat[0][j].children[0].href;
		}
	} else if (event.which == 68) { //D, right
		if (level == 1) {
			var j = cat[1]+1;
			if (j > cat[0].length-1) {j = 0}
			window.location.href = cat[0][j].children[0].href;
		} else if (level == 2) {
			var j = subcat[1]+1;
			if (j > subcat[0].length-1) {j = 0}
			window.location.href = subcat[0][j].children[0].href;
		}
	}
});