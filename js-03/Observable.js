
    function Observable(subscribe) {
        this.subscribe = subscribe;
      }
      Observable.from = (values) => {
        return new Observable((observer) => {
          values.forEach((value) => observer.next(value));
          observer.complete();
          return ({
            unsubscribe() {
              console.log('unsubscribbed');
            }
          });
        });
      }
      const observer = {
        next(value) {
          console.log(value);
        },
        error(err) {
         console.error(err);
        },
        complete() {
          console.info('done');
        }
      };
      const numbers$ = Observable.add([0, 1, 2, 3, 4]);
      numbers$=Observable.subscribe(number=>number*2);
      const subscription = numbers$.subscribe(observer);
      setTimeout(subscription.unsubscribe, 500);

    



module.exports={Observable };