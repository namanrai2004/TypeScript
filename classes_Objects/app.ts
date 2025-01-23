// Classes and Objects

// Class definition
// Constructors
// Access modifiers (public, private, protected)
// Readonly properties
// Optional properties
// Parameter properties
// Getters and setters
// Static members
// Abstract classes and methods

//  1
// class Device{
//     name= "lg"
//     price= 12000
//     category= "digital"
// }
// let d1 =  new Device()
// let d2 =  new Device()

// class bottle{
//     radius = 22
//     price = 4567
// }
// let b1 = new bottle()

//Constructor
// class bottle {
//     constructor(public name: string, public price: number){}
// }
// let b1 = new bottle("milton",299)

// class humanMaker{
//     color = "white"
//     constructor(public name: string, public age: number){}
// }
// let h1 = new humanMaker("naman",22)

// class family{
//     constructor(public name:string, public members:number){

//     }
// }
// let fam = new family("naman",2)
// fam.name = "neha"
// let fam1  = new family("neha",22)

// class names{
//      name = "naman"

//     changeName(){

//         this.name
//     }
// }

// class BootleMake{
//     public name;
//     constructor(names: string){
//         this.name = name;    // second approch
//     }
// }
// let b1 = new BootleMake("naman")

// class BootleMake{
//     constructor(public name: string){ // first approch
//     }
// }
// let b1 = new BootleMake("naman")

// Access Modifier
// class BottleMaker{
//     constructor(public name: string){}
// }
// let b1 = new BottleMaker("Milton")
// // let b2 = b1.name = "hehehoho"

//readOnly
// class user{
//     constructor(public readonly name: string){}// cannot change name

//     changeName(){
//         this.name = "neha"
//     }
// }
// let u1 = new user("naman")

//Optinal properties
// class Users{
//     constructor(public name:string,public age?:number){}// ?- its okay to not put any val
// }
// let u1 = new Users("naman",12)
// let u2 = new Users("naman")

//normal properties...
// class Users {
//   public name;
//   public age;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }
//parameters properties...
// class Users {
//   constructor(public name: string, public age: number) {}
// }
// let u1 = new Users("naman", 22);

//Getter And setters..
// class User{
//     constructor(public _name:string, public _age:number){}
   
//     get name(){
//         return this._name // getters
//     }
//     set name(val:string){
//         this._name  = val
//     }
// }

// let u1 = new User("naman",22)
// let u2 = u1._name
// let u3 = u1.name = "neha"


// -------------****************-----

// static
// class Naman{
//     version = 1.2
// }
// let v1 = new Naman.version

// class Naman{
//    static version = 1.2
// }
// let v1 = Naman.version

// class names{

//     static getName(){
//         return Math.PI
//     }
// }
// let n1=  names.getName()

//************************** */
// Abstract Classes
class cooking{
    constructor(protected gas:string, public name:string ){}
}

        





