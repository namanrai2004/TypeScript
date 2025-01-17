// Extending Interface
// const obj  = {
//     name: "naman",
//     sirname: "rai"
// }
// interface User {
//     name: string,
//     id: number,
//     salary: number 
// }

// interface Admin extends User {
//     admin: boolean,
// }

// function abc(obj: Admin) {
//     obj.
// }

// interface abc {
//     name: string
// }                    // Both interface are merge
// interface abc {
//     email: string
// }


// Alias Types Codes
// type sankya = number
// let a: sankya

// type value = null | number | boolean
// function names(obj:value){

// }
// function names(obj:string){
//     // Not alllowed
// }
// let val: value


// let val: number | null | string


// Intersection 
//   Interfaces are similar to type aliases, except they only apply to object types.
// type user  = {
//     name: string,
//     sirname: string
// }
//  type admin = user & {
//     getDetails()
//  }

//Intersection Types
type User = {
    name: string,
    roll: number,
}
type Admin = User & {
    getDetails(User: string): void
}
function abcd(a:Admin) {
    a.name
    a.getDetails
}




