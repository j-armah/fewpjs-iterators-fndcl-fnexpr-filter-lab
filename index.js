// Code your solution here


function findMatching (driverArray, string) {
    let match = driverArray.filter(i => i.toLowerCase() === string.toLowerCase())
    return match
}

function fuzzyMatch(drivers, string) {
    let match = drivers.filter(i => i.substr(0, string.length) === string)
    return match 
}

function matchName(drivers, string) {
    let match = drivers.filter(i => i.name === string)
    return match
}