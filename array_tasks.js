var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		var new_array = [];
		arr.forEach(number => {
			new_array.push(number*number);
		})
		return new_array;
	},

	sum: function (arr) {
		var total = 0;
		arr.forEach(number => {
			total += number;
		})
		return total;
	},

	findDuplicates: function (arr) {
		duplicate_values = [];
		arr.forEach(function(element, index){
			if (arr.indexOf(element, index + 1) > -1) {
				if (duplicate_values.indexOf(element) === -1) {
        duplicate_values.push(element);
      }
    }
  });
  return duplicate_values;
},

	removeAndClone: function (arr, valueToRemove) {
	var new_array = arr.filter(function(element){
			return element !== valueToRemove;
	});
	return new_array;
},

	findIndexesOf: function (arr, itemToFind) {
		var index_array = [];
		for(i = 0; i < arr.length; i++)
        if (arr[i] === itemToFind)
            index_array.push(i);
    return index_array;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		total = 0;
		for(i = 0; i < arr.length; i++)
			if (arr[i] % 2 === 0){
				total += (arr[i] * arr[i]);
			}
			return total;
	}

}

module.exports = arrayTasks
