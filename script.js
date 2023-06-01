let submitButton=document.querySelector(".turn-in")
let question2=document.querySelector(".question2")
let input1=document.querySelector(".input1")
let input2=document.querySelector(".input2")
let result=document.querySelector(".result")
let image1=document.querySelector(".image1")
let image2=document.querySelector(".image2")
let image3=document.querySelector(".image3")
let image4=document.querySelector(".image4")

submitButton.onclick=function(){
let userinput1=input1.value
let userinput2=input2.value  
if(userinput1==="yes"&& userinput2==="no"){
 result.innerHTML="Since you picked " + userinput1 +" and " + userinput2 + " you are a Great Dane";
image1.src="https://dinoanimals.com/wp-content/uploads/2014/01/Great-dane.jpg";  
}
 else if (userinput1==="no"&& userinput2==="yes"){
 result.innerHTML="Pomeranian";
 image1.src="https://image.petmd.com/files/styles/863x625/public/2022-10/pomeranian.jpeg";  
}  
 if(userinput1==="yes"&& userinput2==="yes"){
   result.innerHTML="Chihuahua";
   image1.src="https://cdn.britannica.com/44/233244-050-A65D4571/Chihuahua-dog.jpg";
} 
   else if (userinput1==="no"&& userinput2==="no"){
 result.innerHTML="Golden Retriever";
 image1.src="https://www.hepper.com/wp-content/uploads/2021/11/golden-retriever_Shutterstock.jpg";    
}
};
// <img class="image1" src="https://dinoanimals.com/wp-content/uploads/2014/01/Great-dane.jpg">
//           <img class="image2" src="https://image.petmd.com/files/styles/863x625/public/2022-10/pomeranian.jpeg">
//           <img class="image3" src="https://cdn.britannica.com/44/233244-050-A65D4571/Chihuahua-dog.jpg">
//           <img class="image4" src="https://www.hepper.com/wp-content/uploads/2021/11/golden-retriever_Shutterstock.jpg">
//         </div>