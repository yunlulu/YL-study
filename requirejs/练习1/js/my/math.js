define([],function () {
	var adds=function (x,y) {
		return x+y;
	};
	var reduces=function (x,y) {
		return x-y;
	}
	return {
		add:adds,
		reduce:reduces
	};
});