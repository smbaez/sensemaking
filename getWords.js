
var getWords = function(titles){
	var words = titles.map(function(title){
		return title.toLowerCase().match(/([a-z]+)/g)
	});

	return words;
}


module.exports = getWords;