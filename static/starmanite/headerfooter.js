$(document).keydown(function(event) {
	console.log(event.which);
	var tt = $('.tabtable');
	var level = 1;
	var cat;
	var subcat;
	
	if (tt.length > 0) {
		var tds = tt[0].children[0].children[0].children;
		for (var i=0; i<tds.length; i++) {
			var elem = tds[i];
			var atext = elem.children[0].innerHTML;
			var alink = elem.children[0].href;
			console.log(atext);
			
			if (atext === atext.toUpperCase()) {
				cat = [tds,i, atext,alink];
				console.log(cat);
			}
		}
	}
	if (tt.length > 1) {
		var tds = tt[1].children[0].children[0].children;
		for (var i=0; i<tds.length; i++) {
			var elem = tds[i];
			var atext = elem.children[0].innerHTML;
			var alink = elem.children[0].href;
			console.log(atext);
			
			if (atext === atext.toUpperCase()) {
				level = 2;
				subcat = [tds,i, atext,alink];
				console.log(subcat);
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
		if (level == 1 && tt.length == 2) {
			window.location.href = tt[1].children[0].children[0].children[0].children[0].href;
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