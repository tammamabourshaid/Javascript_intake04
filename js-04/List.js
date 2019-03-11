 class List {
     constructor() {
         this.list = [];
     }
     add(number, position) {
         if (position === undefined) {
             return this.list.push(number);
         }
        
       else  return this.list.splice(position, 0, number);
     }
     count() {
         return this.list.length;
     }
     get(elemetnPosition) {
         return this.list[elemetnPosition];
     }

     toArray() {
         return [...this.list];

     }
 }
 module.exports = {
     List
 };