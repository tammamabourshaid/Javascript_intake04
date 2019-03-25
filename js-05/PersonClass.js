const person=new person();

function nameSetter(fn, context) {
    fn.call(context, "Hubert");
  }
  
  nameSetter(person.setName, person);
  person.introduce();
  
  function nameSetter(fn, context) {
    fn.apply(context, ["Hubert"]);
  }
  
  nameSetter(person.setName, person);
  person.introduce();
  
  function nameSetter(fn) {
    fn("Hubert");
  }
  
  nameSetter(person.setName.bind(person));
  person.introduce();

  function nameSetter(fn) {
    fn("Hubert");
   }
   
   nameSetter(name => person.setName(name));
   person.introduce();
   