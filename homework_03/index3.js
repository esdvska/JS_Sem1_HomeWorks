// 3) Create an array (by hand) of objects and call sum() function in context of each one of them. 
// Sum function is to come from this object  
let objects = [ 
    { x: 67, y: 87 },
    { x: 78, y: 1 },
    { x: -5678, y: 0 },
    { x: 78097, y: -345 },
]
let BaseObject = { 
    x: 0,
    y: 0, 
    sum: function () { 
        return this.x + this.y; 
    }
};

objects.forEach(obj => console.log(BaseObject.sum.call(obj)));