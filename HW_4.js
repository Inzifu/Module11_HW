function counter(num1,num2){
  let current = num1;
  let timerId = setInterval(function(){
    console.log(current);
    if (current == num2) {
      clearInterval(timerId);
    }else{
    	current++	
    }
  }, 1000);
}
counter(5, 15);