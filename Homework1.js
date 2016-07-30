//Task 1. 

var arr1 = [3, 20, 71, -36, 5, 845, -2, 12, -83, 357];

function find(arr, value) {
	if (value) {
		return arr.indexOf(value);
	} else {
		return -1;
	}
};

document.write(find(arr1, 71) + '<br/>');    //2
document.write(find(arr1, -2) + '<br/>');    //6
document.write(find(arr1, 0));               //-1

//Task 2.  
var arr2 = [1, 90, 789, 56, 45, 34, 678, 78, -90, -6, 5, 3, 6];

for (var j = 0, n = arr2.length - 1; j < n; j++) {
    var i = 0;
    while (i < n) {
        if (arr2[i] > arr2[i + 1]) {
            var c = arr2[i];
            arr2[i] = arr2[i + 1];
            arr2[i + 1] = c;           
        }
        i++;
    }
}
document.write(arr2);


//Task 3. 

function bigToSmall(arr) {
	    var arr3 = [];

	    for (var i = 0; i < arr.length; i++) {
	        for (var j = 0; j < arr[i].length; j++) {
	            arr3.push(arr[i][j]);
	        }
	    }

	    arr3.reverse();

	    return arr3.join(">");

	};

var one = [[1,2,3], [4,5,6]];

document.write(bigToSmall(one));

