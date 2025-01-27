//Functions
// function abcd(name:string, cb: (val:string)=> void) {

// }
// abcd("naman",(val: string)=>{
//     console.log(val);  
// }
// )

// function cdef(name:string,cb:(value:string)=>void) {
//         cb("heyy")
// }
// cdef("naman",(value:string)=>{
//     console.log(value);
    
// })

// function cdef(name:string,cb:(value:string)=>void) {
//         cb("heyy")
// }
// cdef("naman",(value:string)=>{
//     console.log("naman");
    
// })

// function xyz(name:string,age:number, cb:(values:string) =>{
//     cb("heyy")
// }) {
    
// }

// xyz("naman",22,(value:string) =>{
//     console.log("naman");
    
// })


// Default & Optional parameter
// function names(naman:string, height: number, gender: string = "mein nahi bataunga") {
//         console.log(naman,height,gender);
        
// }
// names("naman",170,"female")

// function names(naman:string, height: number, gender?:string) {
//         console.log(naman,height,gender);
        
// }
// names("naman",170)

// rest and spread operator
// function friends(...args: string[]) {
//     console.log(args.length);
//     console.log(args);
    
// }

// friends("naman","neha","narendra")

// let arr: number = [1,2,3,4]
// let arr2: number = [...arr]
// console.log(arr2);


//Function Overloading....
// function abcd(a:string):void
// function abcd(a:string,b:number):number

// function abcd(a:any,b?: any){
//     if (typeof a === "string" && typeof b === undefined) {console.log("hey");}
//     if(typeof b ==="string" && typeof b === "number"){return 123}
//     else{console.log("ERROR");}
// }
// abcd("naman")
// abcd("hey",22)




