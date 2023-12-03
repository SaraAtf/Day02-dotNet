/** Agenda
 * ---------------------
 * == Object
 *      user defined
 *      == access (read / write)
 *          -- dot notation
 *          -- subscript notation
 *
 * == Math Object  (built in )
 *
 * -- Dom Tree
 * -- Dom
 *      -- How to select Elements From Dom
 *
 *
 * Date --> self study
 */

/** Object
 * ---------------------
 * Properties == Methods
 * -----------------------
 * == property --> [key]:value (any datatype)
 *
 *
 */

// var myKey = "age";
// user defined object
// var person = {
// 	fname: "ali",
// 	age: 30,
// 	address: {
// 		city: "Benha",
// 		street: "Saad Str",
// 		code: 123,
// 	},
// 	colors: ["red", "green"],
// 	// method
// 	display: function (x) {
// 		console.log("Welcome display function");
// 		return x;
// 	},
// 	test: "Ali",
// };

// var result = person.display;
// var output = result("mona");
// console.log(output);
// console.log(person.display("ITI"));
// var result = person.display(true);
// console.log(result);

// console.log(person.display());

// console.log(person.myKey); // undefined
// console.log(person["myKey"]); // undefined

// console.log(person[myKey]); //30

// console.log(person["address"]["city"]); // get
// console.log(person.address.city);
// console.log(person["address"].city);
// console.log( person.address[ "city" ] );

// console.log(person["fname"]); // subscript
// console.log(person.fname); // dot notation
// console.log(person.gender); // get
// console.log(person.colors[0]);
// console.log(person.colors[1]);
// var address = person.address;
// console.log(address.city); // get
// console.log(person.address.street); // get
// console.log(person.address.code); // get
// console.log("---------- Set -----------");
// person.fname = "ahmed"; // -- founded -- override
// person.color = "red"; // added to object
// console.log("------- GET----------");
// console.log(person.age); // get
// console.log(person.fname); // get
// console.log(person.address);
// console.log("-----------------");

/** ------------- */
// var fname = "hello";

// console.log(fname.length); // length
// var result = fname.charAt(0); // method
// console.log(result);

// var arr = [];
// console.log(arr.length);

// arr.push("ali"); // method

// console.log(arr);
/** Math
 * ----------------------
 *  ==PI
 * -----------------------
 * == sqrt
 * == pow
 * == max
 * == min
 * == abs
 * == sign
 *      == poistive ==> 1
 *      == negative --> -1
 *      == 0 --> 0
 * ---------------------
 * == round ==> 5.3 -->
 * == floor -->
 * == ceil -->
 * == random
 * --------------------
 * == sin
 */

// console.log(Math.sin((90 * Math.PI) / 180));
// console.log(Math.floor(Math.random() * 10)); // 0 -- 1
// console.log(Math.floor(5.3));
// console.log(Math.floor(5.9));
// console.log(Math.ceil(5.9));
// |-5| --> 5
// console.log(Math.sign(0));
// console.log(Math.sign(-100));
// console.log(Math.sign(100));

/** How To Select Elements From Dom
 * ------------------ Methods -----------------
 * == getElementById --> element
 * == querySelector --> element
 * == getElementsByClassName --> collection
 * == getElementsByTagName --> collection
 * == getElementsByName --> NodeList
 * == querySelectorAll --> NodeList
 * ------------- Properties ---------------
 *  == element.firstChild
 *  == element.firstElementChild
 *  == element.lastChild
 *  == element.lastElementChild
 *  == element.childNodes
 *  == element.children
 *  == document.body
 *  == document.links
 *  == document.forms
 *  == document.images
 
 */

// console.log(document.forms); // anchors

// var element = document.getElementById("parent");
// console.log(element.childNodes);
// console.log(element.children);

// var element = document.querySelector("div .content");

// console.log(element); // element ,[element]
// for (var i = 0; i < elements.length; i++) {
// 	console.log(elements[i]);
// }
