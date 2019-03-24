const person=new person();

function nameSetter(fn, context) {
    fn.call(context, "Hubert");
  }
  
  nameSetter(person.setName, person);
  person.introduce();
  