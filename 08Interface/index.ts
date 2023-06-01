
interface User {
    readonly dbId: number
    email: string,
    userId: number,
    // startTrial: () => string
    startTrial(): string
    getCoupon(coupon: string, value: number): number
}

interface User {
    githubToken: string
}

interface IAdmin extends User {
    role: "Admin" | "ta" | "learner"
}


const hitesh: IAdmin = {
    dbId: 12,
    role: "Admin",
    email: "h@h.com", userId: 123,
    githubToken: "github",
    startTrial: () => "Trial started",
    getCoupon: (name: "cm", off: 10) => {
        return 12
    }
}

hitesh.email = "h@h.com"









