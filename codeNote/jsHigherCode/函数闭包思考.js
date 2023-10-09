var name = "The Window";
var object = {
  name: "My Object", 
  getNameFunc: function() {
    return function() {
      return this.name; 
    };
  }
};
// 在严格模式下,如果this没有被明确绑定,this的值就是undefined
console.log(object.getNameFunc()()); //--> undefined


// var name = "The Window";
var object = {
  name: "My Object",
  getNameFunc: function() {
    var that = this; 
    return function() {
      return that.name;
    };
  }
};

console.log(object.getNameFunc()());


function outer() {
    console.log('outer function:', this);
    
    function inner() {
      console.log('inner function:', this); 
    }
  
    inner();
  }
  
  var obj = {
    name: 'John'
  };
  
  outer.call(obj);