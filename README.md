DemoFrame
=========


A lightweight framework and node server for the swift, pure development of Javascript &amp; HTML5 canvas demos.

You can see an instance of it running here: http://mindoftea.jit.su/demos/h.


## Philosophy:

One of the great features of JavaScript is the environment it runs in; the browser allows programs to be quickly and easily run by any user, and supplies the programmer with an excellent slate of user interaction: HTML, CSS, and the Canvas. Unfortunately, the browser is also one of the great drawbacks of JavaScript. The DOM is slow, consistent formatting is all but unatainable, and HTML code can be downright ugly.

For a developer working on a JavaScript & Canvas demo, the huge capabilities of the web format are an unnecessary burden. Every demo will need a formatted canvas and an animation loop; no demo will need HTML forms or nested text. This framework eliminates boilerplate setup, and allows users to get straight to coding the heart of their demo. DemoFrame is lightweight and efficient so that your demo can use the full power of JavaScript without being encumbered by a heavy interface.

Programming, and especially demo programming, should be fun; if it's fun for the programmer to write, then it's more fun for the user to see. Fun in coding flows from clear understanding. When you look at your code from above, it should be neat and clear, easily understandable, and free of clutter, even in the face of complexity. When you look at your close up, it should just make sense; every part should be instantly self-explanatory. These two forces are often at odds: low level environments are extremely simple, but lack neatness, while high-level environments attain beautiful abstraction, but lose focus on fine detail; useful functions too often become black boxes. DemoFrame is designed to cut a compromise. It saves the developer from the work of repetition, but does not shield them from the work of thought. Each function provided by DemoFrame is small and simple, so that a developer can use to avoid wordiness in their code without losing their understanding of it.

Part of what makes JavaScript an excellent language for learning is its interpreted nature. When JavaScript is served to a browser, it remains human readable. This allows a user to quickly and easily view its source, and even edit it live with the help of a developer console. Unfortunately, as JavaScript has matured and libraries have proliferated, more and more pages have needed to minify their code. Although this provides a crucial decrease in file size to many projects, it makes live viewing and editing impossible. Because it is so lightweight, DemoFrame can avoid this roadblock; it serves unminified, neatly formatted code to all users.


## What it does:

DemoFrame wraps JavaScript demos in a webpage which provides:

 - A formatted canvas, automatically sized to be as large as possible on the page while maintaining a 2:1 aspect ratio. When the window size or orientation changes, the Canvas adapts gracefully. It also has a 1px CSS border to protect against edge-bleeding, and its internal coordinate system is adjusted so that `<0,0>` is centered on the page, `+100` is the rightmost edge of the canvas, and `+50` is its top; this will be true on any screen with any window size.
 - An animation loop which runs automatically when the demo is started. It calls the function `chronometric` at regular intervals, using `requestAnimationFrame` where possible.
 - An asynchronous loading and precomputing system.
 - Text output functions.
 - User input functions.
 - Shortcut functions.


## Running:

Simply `sudo node main.js` to start the program. Now, point a web browser to `http://localhost/demos/h` to see the built-in demo.

Once you change a file, either in a demo or in `main.js` itself, you will need to kill the old `node` process and start it, because DemoFrame caches each demo on initialization.


## Usage:

See `USAGE.md`.

For examples of demos that can be used in DemoFrame, see https://github.com/mindoftea/Waves and https://github.com/mindoftea/Particles.

