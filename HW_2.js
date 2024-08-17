function checkSimpleNumber(num){
	let countDividers = 0;
	if(num > 1000){
  	console.log("Данные не верны")
  }else if(num == 0){
  	console.log("0 - не простое число")	
  }else if(num == 1){
  	console.log("1 - не простое число")	
  }else{
  	for(let i = 2; i < num; i++){
      if(num % i == 0){
      	countDividers++
      }
    }
  }
  if(countDividers == 0){
  	console.log("Ваше число - простое")
  }else{
  	console.log("Ваше число - не простое")
  }
}
checkSimpleNumber()