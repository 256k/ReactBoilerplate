React App Boilerlate:
=====================

This is a basic boilerplate for react apps created following the Udemy course on react.

this boilerplate uses:
----------------------

1. Webpack to bundle all the javascript modules together.

2. Express to create a local server.

3. Babel to transpile all of our jsx and ES2015 syntax into standard js code.

this boilerplate will surely extend throughout the course.

NOTE:
=====

WHEN CLONING THIS REPO TO USE IN A NEW APP, FIRST COMMAND MUST BE:
    npm install
to install all of the node module dependencies...

i haven't added them in the repo because the files are too big and will take too much space on the cloud. just installing npm will download all the dependencies in our project.json file.

the versions of each package are indentified in the package.json file... feel free to go and remove them to fetch the latest versions or specify the version you're looking for.

then we run simply webpack and this will take care of all the bundling we need to do. we can also add the -w flag to keep watching for changes.

once npm install and webpack is finished. run node server.js and this will start a local host server that shows our website on port 3000.
