console.log("typescript is here");

// class User {
//     public email: string
//     private name: string
//     private readonly city: string = "delhi"
//     constructor(email: string, name: string) {
//         this.email = email
//         this.name = name
//     }
// }


class User {
    protected _courseCount = 1

    private readonly city: string = "delhi"
    constructor(
        public email: string,
        public name: string,
        // private userId : string
    ) {
        // this.email = email
        // this.name = name
    }

    private deleteToken() {
        console.log("token deleted");
    }

    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("COurse count should be more than 1")
        }
        this._courseCount = courseNum
    }
}


class SubUser extends User {
    isFamily: boolean = true

    changeCourseCount() {
        this._courseCount = 4
    }

}

const hitesh = new User("h@h.com", "hitesh")

// hitesh.city = "delhi"
// hitesh.deleteToken()





