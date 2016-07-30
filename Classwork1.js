//Task 1

var user = new Object();
user.name = "Vasya";
user.surname = "Petrov";
user.name = "Sergey";

delete user.name;

//Task 2. 

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
};

var one = {};
var two = {
	key1: "value1",
	key2: "value2"
};

document.write(isEmpty(one) + '<br/>');     // true
document.write(isEmpty(two));               // false

//Task 3.

var arrAll = [1,2,31,24,-67,5,3,555,79,-4,21,33,89,-90];

document.write(Math.max.apply(null, arrAll) + '<br/>');
document.write(Math.min.apply(null, arrAll) + '<br/>');

var arrPos = arrAll.filter(function(number) {
	return (number>0) && (number%2 == 0);
});

document.write(arrPos);