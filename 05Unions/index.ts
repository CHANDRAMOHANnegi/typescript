
let score: number | string = 33

score = 44
score = '55'



type Person = {
    name: string
    id: number
}


type Admin = {
    username: string
    id: number
}

let cm: Person | Admin = { name: "cm", id: 123 }

cm = { username: "cm", id: 345 }

function getDbId(id: number | string) {
    // making api calls
    console.log(`DB id is : ${id}`);
}

getDbId(3)
getDbId('3')


const data: number[] = [1, 2, 3]
const data2: string[] = ['1', '2', '3']


// wrong
// const data3: number|string[] = [1, '2', 3]

// wrong
// const data3: number[] | string[] = [1, '2', 3]

// this is the right ways
const data3: (number | string)[] = [1, '2', 3]




let seatAllotement: "aisle" | "middle" | "window"

seatAllotement = "aisle"

// wrong
// seatAllotement = "crew"