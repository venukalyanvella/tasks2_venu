
var input = 5;
const output = [];
let index= 0;
while(true){
 if(input==1){
   output.push(1)
   break;
 }
 if(index % 2 ==1){
   let obj ={}
   for(let i=1; i<=index;i++){
        obj[i]=i
   }
   output.push(Object.keys(obj).join("#"));
 }
 if(index % 2 == 0){
   let obj ={}
   for(let i=index; i>=1;i--){
     obj[i]=i;
   }
   output.push(Object.keys(obj).reverse().join( ' # '))
 }

 if(input==index){
   break;
 }
 index+=1;

}
const finalArr =  input >1? output.slice(1):['1'];
for(let item of finalArr){
 console.log(item);
}