var x = global.__abstract ? __abstract("boolean", "true") : true;
var o = function f() {}
o.x = 42;
if (x) delete o.x;
inspect = function() { return o.x; }

