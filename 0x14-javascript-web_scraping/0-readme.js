#!/usr/bin/node


// Import the 'fs' module for file system operations
const fs = require('fs');

// Get the filename from the command-line arguments
const filename = process.argv[2];

// Use 'fs.readFile' to read the file asynchronously
fs.readFile(filename, 'utf-8', (error, content) => {

  // If an error occurred, log it to the console
  if (error) {
    console.log(error);
 // Otherwise, print the content of the file
  } else {
    console.log(content);
  }
});
