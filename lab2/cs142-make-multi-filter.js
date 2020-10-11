var cs142MakeMultiFilter = function (originalArray) {
	var currentArray = originalArray;
	function arrayFilter(filterCriteria, callback) {
		if (typeof filterCriteria !== "function") {
			return currentArray;
		}

		var filteredArray = [];
		var arrayLength = currentArray.length;
		for (var i = 0; i < arrayLength; i++) {
			var value = currentArray[i];
			if (filterCriteria(value)) {
				filteredArray.push(value);
			}
		}
		currentArray = filteredArray;

		if (typeof callback === "function") {
			callback.call(originalArray, currentArray);
		}
		return arrayFilter;
	}
	return arrayFilter;
};
