function callbackBased(text,callback){
  setTimeout(()=> callback(`Hello ${text}`),1000);
}
callbackBased("Ricardo",greeting=>{
  console.log(greeting);
});

const greet=()=>new Promise(resolve=>resolve("Hello Carla"));
const sayHello = async function(){
  const visit= await greet();
  console.log(visit);
};
sayHello();
