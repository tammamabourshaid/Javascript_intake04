// alert("you have 5 guesses.Guess 1-5");
// var answer = 5;
// var guess = prompt("what you guess");
// for (i = 0; i < 5; i++) {

//     if (answer == guess) {
//         alert("you geuss");
//         break;
//     } else {
//         guess = prompt("try again")
//     }
// }


// function Observable(subscribe) {
//     this.subscribe = subscribe;
//   }
//   Observable.from = (values) => {
//     return new Observable((observer) => {
//       values.forEach((value) => observer.next(value));
//       observer.complete();
//       return ({
//         unsubscribe() {
//           console.log('unsubscribbed');
//         }
//       });
//     });
//   }
//   const observer = {
//     next(value) {
//       console.log(value);
//     },
//     error(err) {
//      console.error(err);
//     },
//     complete() {
//       console.info('done');
//     }
//   };
//   const numbers$ = Observable.from([0, 1, 2, 3, 4]);
//   const subscription = numbers$.subscribe(observer);
//   setTimeout(subscription.unsubscribe, 500);

const source$ = Observable.interval(1000)
  .share()
  .observeOn(Rx.Scheduler.asap); // magic here
const mapped$ = source$.map(x => {
  if (x === 1) {
    throw new Error('oops');
  }
  return x;
});
source$.subscribe(x => console.log('A', x));
mapped$.subscribe(x => console.log('B', x));
source$.subscribe(x => console.log('C', x));
// "A" 0
// "B" 0
// "C" 0
// "A" 1
// Uncaught Error: "oops"
// "C" 1
// "A" 2
// "C" 2 
// "A" 3
// "C" 3
// ... etc