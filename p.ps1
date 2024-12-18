browserify ./tmp/app.js -o ./tmp/app.js
java -jar ./lib/compiler.jar --compilation_level WHITESPACE_ONLY --js ./tmp/app.js --js_output_file ./dist/app.js
