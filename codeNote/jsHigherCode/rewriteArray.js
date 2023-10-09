Array.prototype = { 
    hahah : '2',
}

// let ar = [1,23];
let ar = new Array(1,23);
console.log(ar)
console.log(ar.hahah)
console.log(ar instanceof Array)
console.log(Array.hahah)