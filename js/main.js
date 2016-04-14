"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

$(document).ready(function () {

	/*
    $(function() {
    
 	});
 */

});

var test = function () {
	function test(msg) {
		_classCallCheck(this, test);

		this.msg = msg;
	}

	_createClass(test, [{
		key: "say",
		value: function say() {
			console.log(this.msg);
			[1, 2, 3].map(function (n) {
				return n + 1;
			});
		}
	}]);

	return test;
}();

;
var t1 = new test("hi, Chanalaaa");
t1.say();