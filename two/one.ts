//Type Inference & Annotations

// Inference: automatically detect wheather it is number or string etc
// Annotations: we have to define type or strictly check the type

///Type Alias
// function data(name:string,salary: number) {
//     // salary.
//     name.
    
// }

//Interface
// interface User  {
//     name: string,
//     email: string,
//     salary: number,
// }
// function getData(obj: User) {
    
// }

interface User {
    name: string,
    salary: number,
    gender?: string //?-optional
}
function abc(obj:User) {
        // obj.name
        
}
abc({name: "naman",salary: 22,gender: "male"})