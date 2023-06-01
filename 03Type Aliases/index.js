"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myUser = {
    _id: "1234",
    name: "cm",
    email: "h@h.com",
    isActive: false,
};
myUser.email = "h@";
// readonly
myUser._id="h@"
function createUser(u) {
    return { name: "", email: "", isActive: true };
}
function printCoord(pt) {
    console.log('cord x :', pt.x);
    console.log('cord y :', pt.y);
}
printCoord({ x: 10, y: 10 });
