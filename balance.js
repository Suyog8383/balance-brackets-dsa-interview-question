/* Program to check a string with balanced brackets. */
const isValid = (str) => {

  let arr=[];
  let open=["(","[","{"];
  let close=[")","]","}"];
  
  for(let i=0;i<str.length;i++){
  const data=str[i];
  if(open.includes(data)){
  arr.push(data)
  }else if(close.includes(data)){
  	const final=open[close.indexOf(data)];
    if(arr.length===0 || arr.pop() !== final){
    return false;
    }
  }  
      
  }
	return arr.length===0;
};

const str1 = "({} [] ({}))";   //({}

const str2 = "}}";

console.log(isValid(str1)); // Should return true
console.log(isValid(str2)); // Should return false
