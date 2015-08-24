$(document).keydown(function(event) {
	var tabs = $('.tabs');
	var path = $('#path')[0].children;
	catLink = path[0].href;
	if (path.length > 1){ subcatLink = path[1].href; } else {subcatLink="";}
	var level = 1;
	var cat;
	var subcat;
	
	if (tabs.length > 0) {
		var lis = tabs[0].children;
		for (var i=0; i<lis.length; i++) {
			var elem = lis[i];
			var atext = elem.children[0].innerHTML;
			var alink = elem.children[0].href;
			
			if (alink === catLink) {
				cat = [lis,i, atext,alink];
				$(elem).addClass("current");
				console.log(elem);
			}
		}
	}
	if (tabs.length > 1) {
		var lis = tabs[1].children;
		for (var i=0; i<lis.length; i++) {
			var elem = lis[i];
			var atext = elem.children[0].innerHTML;
			var alink = elem.children[0].href;
			
			if (alink === subcatLink) {
				level = 2;
				subcat = [lis,i, atext,alink];
				$(elem).addClass("current");
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

document.ready = function() {
	var elems = $('.listing-item > li:first-child').children('a');
	for (var i=0; i<elems.length; i++) {
		$(elems[i]).parent().addClass('clickable');
		var url = elems[i].href;
		$(elems[i]).parent().on('click', {url:url}, function(event){gotoURL( event.data.url )});
	}
	$(document).keydown();
};

function gotoURL(url){
	window.location.href = url;
}