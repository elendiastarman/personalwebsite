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
	var elems = $('.listing-item > li').children('a');
	for (var i=0; i<elems.length; i++) {
		$(elems[i]).parent().addClass('clickable');
		var url = elems[i].href;
		$(elems[i]).parent().on('click', {url:url}, function(event){window.location.href = event.data.url});
	}
	
	// var imgs = $('.listing-item > li');//, .listing-item > li > a');
	// for (var i=0; i<imgs.length; i++) {
		// $(imgs[i]).children[0].prepend($("<span class='helper'></span>"));
	// }
	
	var uls = $('.listing-item');
	console.log(uls);
	// for (var i=0; i<uls.length; i++) {
	$('.listing-item').each(function(i,e) {
		// console.log(i);
		// var y = e.getBoundingClientRect().top;
		// console.log(y);
		// debugger;
		var lis = e.children;
		// console.log(lis);
		for (var j=0; j<lis.length; j++) {
			// var y2 = lis[j].getBoundingClientRect().top;
			// console.log(y-y2);
			// lis[j].offsetTop = 6;
			// console.log(lis[j].children[0].offsetBottom);
			console.log(lis[j]);
			lis[j].innerHTML = "<div class='help'>"+lis[j].innerHTML+"</div>";
		}
	});
		// var lis = uls[i].children();
		// var y = uls[i].getBoundingRectangle().top();
		// console.log(i);
		// console.log(uls[i]);
		// console.log(y);
		
		// for (var j=0; j<lis.length; j++) {
			
		// }
	// }
	
	$(document).keydown();
};