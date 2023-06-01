

function createUser({ name: string, isPaid: boolean }) { } { }

// issue
createUser({ name: "cm", isPaid: false, email: "cm@gmail.com" })

const user = { name: "cm", isPaid: false, email: "cm@gmail.com" }

// works 
createUser(user)

