function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
{ }
// issue
createUser({ name: "cm", isPaid: false, email: "cm@gmail.com" });
var user = { name: "cm", isPaid: false, email: "cm@gmail.com" };
// works 
createUser(user);
