//Example for callback function
function greet1(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}
function callMe() {
    console.log('I am callback function');
}
greet1('Ram', callMe);