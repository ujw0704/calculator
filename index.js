let value = document.querySelector(".values");
let result =document.querySelector(".result");
let btn = document.querySelectorAll(".btn")
let output = document.querySelector(".output")
let clear = document.querySelector(".c")

let  display =  ""
 
// let res = "";
for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", function(){

        result.innerHTML += btn[i].value 

        if(result.innerHTML < 10){
            result.innerHTML = btn[i].value
        } 

        display = result.innerHTML; 

    }) 
    
     
}

output.addEventListener("click", () =>{
    result.innerHTML = eval(display)
})
 

 clear.addEventListener("click",function(){
    result.innerHTML= ""

 });






     
        
    
        
        
        
    
     

    

 
    


 


    

   
    
    
    
    

// });


