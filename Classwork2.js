//Task 1. 

// 1) true
// 2) нет;
// 3) результат не изменится

//Task 2. 

function counter() {
    var count = 1;
    return function () {
        return count++;
    }
};

var c = counter();

document.write(c() + '<br/>');         //1
document.write(c() + '<br/>');         //2
document.write(c());                   //3

