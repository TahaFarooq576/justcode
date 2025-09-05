// var student={
//     name:"David Rayy",
//     sclass:"IV",
//     rollno:12
// }
// console.log("Before deleting any entity");
// console.log(student);
// delete student.sclass
// console.log("After deleting second entity");
// console.log(student);

//_____________________________________________________________________________________

// PROGRAM # 01


// class student{
//     constructor(name,sclass,rollno){
//         this.name=name;
//         this.sclass=sclass;
//         this.rollno=rollno;
//     }
//    printname(){
//     console.log("name",this.name)
//    } 
// }

// var studentobj=new student("TAHA","IV","04")
// console.log(studentobj)
// studentobj.printname();
// delete studentobj.sclass
// console.log("After deleting an entity",studentobj)

// var studentobj=new student("TAYYAB","XI","225")
// console.log(studentobj)
// studentobj.printname();
// var studentobj=new student("HAMZA","BSCS","242")
// console.log(studentobj)
// studentobj.printname();
// studentobj.printname(delete studentobj.sclass);
// console.log(studentobj);

//__________________________________________________________________________________________________

//PROGRAM NO # 2


// class student{
//     constructor(name,sclass,rollno){
//         this.name=name;
//         this.sclass=sclass;
//         this.rollno=rollno;

//     }
//     printname(){
//         console.log("NAME",this.name)
//     }
// }
// studentobj=new student("TAHA","4TH YEAR","225")
// console.log(studentobj)
// delete studentobj.sclass
// console.log("After deleting an entity",studentobj)
// studentobj.printname()
// studentobj=new student("TAYYAB","2ND YEAR","10")
// console.log(studentobj)
// studentobj.printname()
// studentobj.printname(delete studentobj.sclass)
// console.log(studentobj)

// _________________________________________________________________________________________________________________


//PROGRAM # 04
// class student{
//    constructor(name,rollno,address,marksofsubjects){
//     this.name=name;
//     this.rollno=rollno;
//     this.address=address;
//     this.marksofsubjects=marksofsubjects;

//    }

// }
// var objects=new student("TAHA",225,"MAMUMKANJAN",[76,77,78,79,80]);
// console.log("Before deleting a value",objects);
// delete objects.address;
// console.log("After deleting address value",objects);
// objects.Fathername="Amjad Farooq";
// console.log("After adding an element in excisting object",objects);
// //How to check any property in an excisting object
// console.log(objects.marksofsubjects[2]);





// var student={
//     name:"TAHA",
//     sclass:"BSCS",
//     address:"MAMUNKANJAN",
//     details:{
//         Primary:"Misali school",
//         Middle:"Govt school",
//         MAtric:"NOOR MISALI PUBLIC HIGH SCHOOL",
//         intermediate:"ASpire college samundri",
//     }
// }

// console.log("complete objects",student);
// console.log("For some special property",student.details.Primary);
// console.log("for check aa property",student.details.hasOwnProperty("Primary"));


//_______________________________________________________________________________________________


class Student{
    constructor(_name,_class,rollno,fathername){
        this._name=_name;
        this._class=_class;
        this.rollno=rollno;
        this.fathername=fathername;
    }
};
var studentobj=new Student("TAHA","2nd year",225,"Amjid Farooq");
console.log(studentobj);
var studentobj2=new Student("Tayyab","2nd year",101,"Amjid Farooq");
console.log(studentobj2);
delete studentobj2.fathername;
console.log("After deleting a property",studentobj2);