let convert = function(bytes) {
    return (bytes / (1024 * 1024)).toFixed(2) + " Mb";
};

// Call func through console.log 
console.log(convert(10000)); // 0.01 Mb
const bytesInput = prompt("Enter bytes to convert into megabytes: ");
console.log(convert(bytesInput));