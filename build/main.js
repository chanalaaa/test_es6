$(document).ready(function () {

   /*
      $(function() {
      
   	});
   */

});

class test {
	constructor(msg) { 
		this.msg = msg;
	}
	say() {
		console.log(this.msg); 
		[1,2,3].map(n => n + 1);  
	}

};
let t1 = new test("hi, Chanalaaa");
t1.say();