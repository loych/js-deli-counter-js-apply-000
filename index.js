let welcoming=[];
 let i=0
function takeANumber(num){
  let i=0
   num +=1
return "Welcome, you are number" + num
}
console.log(takeANumber(i))
console.log(takeANumber(i))

function nowServing(katzDeliLine){
   if (katzDeliLine.length===0){
      return "There is nobody waiting to be served!"
   }else{
 return "Currently serving " + katzDeliLine.shift() + "."
  }
}

function currentLine(currentLineName){
  if(currentLineName.length===0) {
    return "The line is currently empty.";
  }
  var lineNames = [];
  for(var i=0; i<currentLineName.length; i++) {
    lineNames.push(i+1 + ". " + currentLineName[i]);
  }
  return "The line is currently: " + lineNames.join(', ' )
}
