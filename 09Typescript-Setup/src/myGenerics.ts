const score: Array<number> = []

const names: Array<string> = []

function identityOne(val: boolean | number): number | boolean {
    return val
}

function identityTwo(val: any): any {
    return val
}

function identityThree<Type>(val: Type): Type {
    return val
}

identityThree(3)
identityThree('3')
identityThree(true)

function idenityFour<T>(val: T): T {
    return val
}

interface Bootle {
    brand: string,
    type: number
}

// idenityFour<Bootle>({ brand: "", type: 1 })

function getSearchProducts<T>(products: T[]): T {
    return products[0]
}

const getMoreSearchProducts = <T>(products: T[]): T => {
    return products[3]
}
