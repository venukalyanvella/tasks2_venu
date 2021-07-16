var input = 5;
const output = [];
try {
  for(let i=1; i <=(input-1)*2; i+=1){
    const reverse = (i%2) === 0;
    let start = 1;
    let end = i> input ? (2*input)-i: i;
    if(reverse){
      let temp = start;
      start = end;
      end = temp;
    }
    const arr =[]
    for(; reverse ? end<- start: start<= end; reverse? start -= 1: start +=1){
      if(arr.length !== input -1){
        arr.push(start);
      }else {
        break;
      }
    }
    output.push(arr)
  }
  for(let i =0; i<output.length;i++){
    console.log(output[i].join(','))
  }


} catch (error) {
  console.log(error)
}