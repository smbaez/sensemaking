var cheerio = require('cheerio')

var getTitles = function(mitcourses){
	var myvar = cheerio.load(mitcourses);
	var titles = [];
	myvar('h3').each(function(i,element){
		titles.push(myvar(element).text())

	})

	return titles;
}


module.exports = getTitles;