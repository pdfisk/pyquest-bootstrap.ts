browserify ./tmp/src/index.js -o ./tmp/pyquest.js
java -jar ./lib/compiler.jar --compilation_level WHITESPACE_ONLY --js ./tmp/pyquest.js --js_output_file ./dist/pyquest.js
