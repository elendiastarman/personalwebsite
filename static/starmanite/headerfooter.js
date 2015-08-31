$(document).keydown(function(event) {
	var tabs = $('.tabs');
	var path = $('#path > a');
	var catLinks = [];
	
	for (var i=0; i<path.length; i++) {
		catLinks[i] = path[i].href;
	}
	
	var level = 0;
	var cats = [];
	
	for (var j=0; j<tabs.length; j++) {
		var lis = tabs[j].children;
		
		for (var k=0; k<lis.length; k++) {
			var elem = lis[k];
			
			if (elem.children[0].href === catLinks[j]) {
				cats[j] = [lis,k];
				$(elem).addClass("current");
				level = j;
			}
		}
	}
	
	if (event.which == 87) { //W, up
		if (level == 0) {
			window.location.href = $('#logo > a')[0].href;
		} else {
			window.location.href = catLinks[level-1];
		}
	} else if (event.which == 83) { //S, down
		if (level < tabs.length) {
			window.location.href = tabs[level+1].children[0].children[0].href;
		}
	} else if (event.which == 65) { //A, left
		var j = cats[level][1]-1;
		if (j < 0) {j = cats[level][0].length-1}
		window.location.href = cats[level][0][j].children[0].href;
	} else if (event.which == 68) { //D, right
		var j = cats[level][1]+1;
		if (j > cats[level][0].length-1) {j = 0}
		window.location.href = cats[level][0][j].children[0].href;
	}
});

document.ready = function() {
	var elems = $('.listing-item > li').children('a');
	for (var i=0; i<elems.length; i++) {
		$(elems[i]).parent().addClass('clickable');
		var url = elems[i].href;
		$(elems[i]).parent().on('click', {url:url}, function(event){
			if (event.which == 1) {
				window.location.href = event.data.url;
			} else if (event.which == 2) {
				event.preventDefault();
				$('a').attr('href',event.data.url).attr('target','_blank')[0].click();
			}
		});
	}
	
	$('.listing-item').each(function(i,e) {
		var lis = e.children;
		for (var j=0; j<lis.length; j++) {
			lis[j].innerHTML = "<div class='vertical-align-help'>"+lis[j].innerHTML+"</div>";
		}
	});
	
	$(document).keydown();
};