DemoFrame Usage
===============

## Browser-side Demo Environment:

### Basics:

DemoFrame interacts with your code in three basic ways:
 - Slot functions are functions defined and used inside DemoFrame's code. When you redefine them in your demo, they are automatically called when certain conditions are met. They are effectively "slots" for your code.
 - System constants are global variables which hold information about or facilitate interaction with the enviroment in which your demo is running. When conditions change, these variables are updated. You can use them freely to control your demo
 - Standard functions, defined in `standard.js`, provide shortcuts for some particularly useful functionality in order to clarify and simplify your code. They are all global functions with four-letter names. You can call them whenever you want.


### Slot Functions:

 - `initMain`
     - Called when the user starts the program.
     - Useful for setup code that shouldn't be run in the global scope.
 - `initLoad`
 	 - An array of functions which will be run in order asynchronous to the rest of the page just after `initMain` is called. Only when every function in the array has returned does the demo begin to execute.
 	 - Useful for performing large initial computations which would otherwise block the UI.
 - `initDraw`
 	 - An function which will be called whenever the canvas is resized and at page load.
 	 - Useful for doing formatting on the canvas that doesn't need to be done with each `draw`.
 - `chronometric`
 	 - A function which, once the demo is initialized, will be called once at the start of each animation frame.
 	 - This is where the main frame-by-frame logic of your demo should go.
 	 - You do not need to call or request additional frames; this will be done automatically.
 - `draw`
 	 - A function which will be called every time the canvas is resized, just after `initDraw`.
 	 - This is where the main drawing logic of your demo should go.
 	 - `draw` is not called automatically for each frame, so you will probably want to call it explicitly in your `chronometric`.
 - `callW`
 	 - A function which is called each time the user presses down either their `w` or `up arrow` key.
 	 - Useful for triggering events on key press.
 - `callA`
 	 - A function which is called each time the user presses down either their `a` or `left arrow` key.
 - `callS`
 	 - A function which is called each time the user presses down either their `s` or `down arrow` key.
 - `callD`
 	 - A function which is called each time the user presses down either their `d` or `right arrow` key.
 - `call_`
 	 - A function which is called each time the user presses down either their `enter` key or `spacebar`.
 - `callMove`
 	 - A function which is called each time the user moves their mouse.
 - `callClick`
 	 - A function which is called each time the user clicks their mouse.


### System Constants:

 - `wW`
 	 - Holds the actual width of the canvas in CSS pixels.
 	 - "Window Width"
 - `wH`
 	 - Holds the actual height of the canvas in CSS pixels.
 - `ctx`
 	 - Holds a reference to the preformatted Canvas's drawing context.
 - `log(txt)`
 	 - A function which logs some text on a new line to the upper left corner of the screen via HTML.
 - `clearLog`
 	 - A function which clears every previous log.
 - `point`
 	 - A function which changes the user's cursor, when over the canvas, to a clickable pointer.
 - `unpoint`
 	 - A function which changes the user's cursor back to an arrow.
 - `chron`
 	 - A number referring to the count of animation frames that have been called so far.
 	 - Increments just after each automatic call to `chronometric`.
 - `userX`
 	 - Holds the current horizontal location of the user's mouse in scaled canvas units.
 	 - Has some subtle exponential smoothing.
 - `userY`
 	 - Holds the current vertical location of the user's mouse.
 - `userXV`
 	 - Holds an estimate of the horizontal speed of the user's mouse in canvas units per frame.
 - `userYV`
 	 - Holds an estimate of the vertical speed of the user's mouse.
 - `userW`
 	 - A boolean.
 	 - True when the user is pressing down either their `w` or `up arrow` key.
 - `userA`
 	 - True when the user is pressing down either their `a` or `left arrow` key.
 - `userS`
 	 - True when the user is pressing down either their `s` or `down arrow` key.
 - `userD`
 	 - True when the user is pressing down either their `d` or `right arrow` key.
 - `user_`
 	 - True when the user is pressing down either their `enter` key or `spacebar`.
 - `userC`
 	 - True when the user is pressing down their left mouse button.
 - `pi`
 	 - holds a 15-digit approximation of pi.


### Standard Functions:

 - `absv(x)`
 	 - Shortcut to `Math.abs`.
 - `rand`
 	 - Shortcut to `Math.random`.
 - `expo(x)`
 	 - Shortcut to `Math.exp`.
 - `sqrt(x)`
 	 - Shortcut to `Math.sqrt`.
 - `sine(x)`
 	 - Shortcut to `Math.sin`.
 - `cosi(x)`
 	 - Shortcut to `Math.cos`.
 - `atan(x,y)`
 	 - Shortcut to `Math.atan2(y,x)`.
 	 - Notice that `x` and `y` are reversed.
 	 - Given a set of 2d coordinates, this calculates the angle of the line to them from the origin.
 - `hypo(x,y)`
 	 - Returns the distance from the origin to `(x,y)`.
 	 - Pythagoream Theorem.
 - `sign(x)`
 	 - Returns the sign of `x`.
 	 - `1` if `x` is positive.
 	 - `-1` if `x` is negative.
 - `pow2(x)`
 	 - Returns `x*x`.
 	 - Useful for briefly squaring the results of cumbersome expressions without using an extra variable.
 - `pow3(x)`
 	 - Returns `x*x*x`.
 - `magn(v)`
 	 - Returns the magnitude of `v`.
 	 - `v` must be a two-vector defined as an array:
 	 	 - `[x,y]`
 - `scal(c,v)`
 	 - Scales a vector `v` by `c` and returns the result.
 - `addi(u,v)`
 	 - Adds two vectors, `u` and `v`, and returns the result.
 - `comb(x,u,v)`
 	 - Linearly combines two vectors, `u` and `v`, by a third vector, `x`, and returns the result.
 	 - Returns `x[0] * u + x[1] * v`.
 	 - Can also be used for matrix transformations:
 	 	 - If `u` and `v` are the columns of a matrix `A`, then `comb(x,u,v)` returns `A*x`.
 - `unit(theta)`
 	 - Returns a vector of magnitude one pointing in the direction specified by the angle `theta`.
 - `dpro(u,v)`
 	 - Takes the dot product of `u` and `v` and returns the result.
 - `xpro(u,v)`
 	 - Takes the cross product of `u` and `v` and returns the value of the z-component.
 	 - `|u| * |v| * sine(theta)`, where `theta` is the angle between `u` and `v`.
 	 	 - This is much faster than using an actual trig function.
 - `rgba(r,g,b,a)`
 	 - Takes four numerical values between 0 and 1, and returns the corresponding valid CSS rgba color.
 	 - "rgba(0,0.5,1,0.7)" is shorter than "rgba(0,128,255,0.7)".
 - `hsla(h,s,l,a)`
 	 - Takes four numerical values between 0 and 1, and converts them to a CSS hsla color.
 - `mark(x,y,r,fill,stroke)`
 	 - Draws a circle on the canvas at `(x,y)` with radius `r`.
 	 - If fill is defined, it fills the circle with that color.
 	 - If stroke is defined, it strokes the circle with that color.
 	 - A useful shorthand, but, when drawing many circles, better performance can be attained by writing them as a single path and drawing them all at once.
 - `time()`
 	 - A shortcut to `Date.now`.
 	 - Useful for timing.


## Server-side:


### Demos:

Each demo is stored in its own folder. A list of all of the installed demos is stored in `manifest.json`. Each is defined by a set of JavaScript files, listed, along with basic system information in an `info.json` file.


### JavaScript Files:

Are just ordinary JavaScript files. They will be spliced in order into the Demoframe packaging and sent to the browser to be executed.


### `manifest.json`:

A list of all of the packages (currently just demos) installed in this instance of DemoFrame. See this example:

```js
{
	"demos":[
		{
			"name":"Hello",
			"url":["hello","Hello","h"],
			"description":"A simple 'Hello, World!' demo program, for demonstrating the use of this framework. Click to interact.",
			"summary":"Hello, World!",
			"location":"hello"
		}
	]
}
```

Here, `"demos"` is an array of objects referring to each demo.

 - `"name"` is the title of the demo. It will appear as the HTML `title` in browsers.
 - `"url"` is a list of all of the locations at which the demo can be accessed. A URL for a demo will be any of these entries appended to the end of `"my_demo_frame/demos/"`.
 - `"description"` is a paragraph-length description of your demo.
 - `"summary"` is a one-line summary of your demo.
 - `"location"` is the location of the folder containing your demo, relative to `main.js`.

 
### `info.json`:

```js
{
	"dpp":1.5,
	"jsFiles":[
		"abstract.js",
		"main.js"
	]
}
```

 - `jsFiles` is a list of the locations JS files that make up your demo relative to `info.json`.
 - `dpp` is the maximum allowable dots-per-pixel of the demo. DemoFrame will automatically increase the resolution of the canvas to match that of the user's screen. (For example, a retina display has a dpp of 2, while a standard display has a dpp of 1.) DemoFrame will not increase the resolution of the canvas above `dpp`; this prevents performance slowdown on high definition devices. Use a high `dpp` on demos that can render their graphics quickly and easily, and a lower `dpp` on more graphics-intensive demos.
