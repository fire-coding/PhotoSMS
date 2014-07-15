// Парсер даты JSON
var getJsonDate = function(strDate) {
	try {
		var parse_date = eval('new ' + strDate.replace('/', '').replace('/', ''));
		return parse_date;
	} catch(ex) {
		return null;
	}
	
}