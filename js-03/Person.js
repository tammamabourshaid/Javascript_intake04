class Person{
constructor(firstname,lastname,date){
this.firstname=firstname;
this.lastname=lastname;
this.arrayFather=[];
this.arrayMother=[];
this.date=date;
this.arrayChild=[];

}
setFathar(name){
    return this.arrayFather+=name;
}
setMother(name){
    return this.arrayMother+=name;
}
getParents(){
    return setFathar(name)+","+setMother(name);
}
getFirstName(){
    return this.firstname;
}
addChild(name){
    return this.arrayChild+=name;
}
getSiblings(){
    return addChild(name).sort(year);
}
getChildren(){
    return addChild(name);
}
}
module.exports={Person};