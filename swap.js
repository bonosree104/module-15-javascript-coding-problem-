 var  a= 5;
 var b = 8;
 console.log("before swap:a=",a, "b=",b);
 var temp =a;
 var a=b;
 var b = temp;
 console.log("after swap:a=",a, "b=",b);
 //2nd Method//

 var x = 5;
 var y = 8;
 x= x+y;
 y =x-y;
 x = x-y;
 console.log("after swap: x=",x , "y=",y);

 //3rd Method//
 var p =12;
 var q = 14;
 [p,q] = [q,p];
 console.log("after swap: p=",p , "q=",q);