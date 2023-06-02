function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
}

type Fish = { swim(): void }
type Bird = { Fly(): void }


function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        console.log(pet);
        return 'fish food'
    } else {
        console.log(pet);
        return 'bird food'
    }
}

