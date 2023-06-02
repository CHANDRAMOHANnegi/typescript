


function detectType(val: string | number) {
    if (typeof val === "string") {
        return val.toLowerCase()
    }
    return val + 3
}


function provideId(id: string | null) {
    if (!id) {
        console.log("Please provide ID");
        return
    }
    id.toLowerCase()
}