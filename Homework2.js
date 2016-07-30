//Task 1. 

(function (){
    var num = 0;
    function sum(par) {
        return num += par;
    }
    window.sum = sum;
})();

document.write(sum(4)+'<br/>');
document.write(sum(11)+'<br/>');
document.write(sum(71));

//Task 2.

function strCount(obj) {
    var counter = 0;
    for (var i in obj) {

        if (typeof obj[i] === "string") {
            counter++;
        }
        else if (typeof obj[i] === "object") {
            counter += strCount(obj[i]);
        }
        else if (Array.isArray(obj[i])) {
            for (var j in obj[i]) {
                counter += strCount(obj[i][j]);
            }
        }
    }
    return counter;
};

var one = {
    prop1: 1,
    prop2: "property",
    prop3: false,
    prop4: "another property"
};

var two = {
    prop1: 404,
    prop2: "string",
    prop3: true,
    prop4: [0, 12, "banana"],  
    prop5: {pr1: "property", pr2: "not a number", pr3: "something"},
    };

document.write(strCount(one)+'<br/>');
document.write(strCount(two));

//Task 3. 
     
function add(a) {
    return function (b) {
        return a + b;
    }
}

document.write(add(14)(89));