

var jdLibrary = function(selector) {
    this.elements;    
}
jdLibrary.prototype.isClass = function (selector) {
    return selector[0] == '.'
}
jdLibrary.prototype.isId = function (selector) {
    return selector[0] == '#'
}
jdLibrary.prototype.isTag = function (selector) {
    return ['#','.'].indexOf(selector[0]) == -1
}
jdLibrary.prototype.getByClass = function (selector) {
    return document.getElementsByClassName(selector[0])
}
jdLibrary.prototype.getByTag = function (selector) {
    return document.getElementsByTagName(selector)
}
jdLibrary.prototype.getById = function (selector) {
 
}