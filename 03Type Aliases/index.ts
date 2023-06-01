

type User = {
    readonly _id: string
    name: string,
    email: string
    isActive: boolean
    creditCardDetails?: number
}

let myUser: User = {
    _id: "1234",
    name: "cm",
    email: "h@h.com",
    isActive: false,
}

myUser.email = "h@"

// readonly
// myUser._id="h@"


function createUser(u: User) {
    return { name: "", email: "", isActive: true }
}

// createUser({ name: "", email: "", isActive: true })


// example
type Point = {
    x: number
    y: number
}

function printCoord(pt: Point) {
    console.log('cord x :', pt.x);
    console.log('cord y :', pt.y);
}

printCoord({ x: 10, y: 10 })







type cardNumber = {
    cardNumber: string
}


type cardDate = {
    cardDate: string
}


type cardDetails = cardNumber & cardDate & {
    cvv: number
}

export { }