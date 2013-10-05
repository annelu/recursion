// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
	if (typeof obj === "number") {
		return obj.toString();
	} else if (Object.prototype.toString.call(obj) === '[object Object]') {
	var result = "";
	for (key in obj) {
		if (obj[key] === undefined || obj[key] === "function") {
			return "{}";
		} else if (result) {
			result = result + "," + stringifyJSON(key) + ":" + stringifyJSON(obj[key]);
		} else {
			result = result + stringifyJSON(key) + ":" + stringifyJSON(obj[key]);	  			
		}
	}
		return "{" + result + "}";
	} else if (Object.prototype.toString.call(obj) === '[object Null]') {
		return "null";
	} else if (Object.prototype.toString.call(obj) === '[object Array]') {
		var result = "";
		for (i = 0; i < obj.length; i++) {
			if (result) {
			var result = result + "," + stringifyJSON(obj[i]);  				
			} else {
				var result = stringifyJSON(obj[i]);
			}
		}
		return "[" + result +"]";
	} else if (typeof obj === "string") {
	  	return '"' + obj + '"';
	} else if (typeof obj === "boolean") {
		return obj.toString();
	} else {
		return undefined;
	}	
};