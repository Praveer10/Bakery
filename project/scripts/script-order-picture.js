var pounds = document.getElementById("pounds");
        var images = document.getElementById("images");
     function pictureOnCake(){
         if (images.value==1) {
             document.getElementById("pictureforcake").src="../images/piccakeimg.png";
             document.getElementById("pictureforcake").style.height="140px";
             document.getElementById("pictureforcake").style.width="140px";
             document.getElementById("pictureforcake").style.paddingTop="130px";
             document.getElementById("pictureforcake").style.paddingLeft="80px";
             document.getElementById("pictureforcake").style.borderRadius = "43%";
             document.getElementById("pictureforcake").style.position="relative";

             
         } 
         else if(images.value==2){
            document.getElementById("pictureforcake").src="../images/piccakeimg2.png";
             document.getElementById("pictureforcake").style.height="165px";
             document.getElementById("pictureforcake").style.width="175px"; 
            document.getElementById("pictureforcake").style.paddingTop="150px";
             document.getElementById("pictureforcake").style.paddingLeft="110px";
             document.getElementById("pictureforcake").style.borderRadius = "43%";
             document.getElementById("pictureforcake").style.position="relative";
         }
     }
     function changeImagePerPound(){
         if (pounds.value==1) {
            document.getElementById("imgCake").src= "../images/piccake1.jpg";
            document.getElementById("imgCake").style.height= "300px";
            document.getElementById("imgCake").style.width= "300px";
            document.getElementById("imgCake").style.paddingTop= "100px";
            document.getElementById("imgCake").style.position= "absolute";
            document.getElementById("price").innerHTML =  700;
            document.getElementById("tobehidden").style.display = "none";

                     } 
         else if(pounds.value==2){
             document.getElementById("imgCake").src= "../images/piccake2.jpg";
             document.getElementById("price").innerHTML =  2* 700;
             document.getElementById("imgCake").style.height="400px"; 
             document.getElementById("imgCake").style.width = "450px";
             document.getElementById("imgCake").style.paddingTop = "80px";
             document.getElementById("imgCake").style.position= "absolute";
             document.getElementById("tobehidden").style.display = "none";
         }
         /*else if (pounds.value==3) {
            document.getElementById("imgCake").src= "../images/piccake2.jpg";
            document.getElementById("price").innerHTML = 3* 700;
            document.getElementById("imgCake").style.height="400px"; 
             document.getElementById("imgCake").style.width = "450px";
             document.getElementById("imgCake").style.paddingTop = "80px";
            document.getElementById("pictureforcake").style.marginTop = "-48%";
             document.getElementById("pictureforcake").style.marginLeft = "150px";
             document.getElementById("pictureforcake").style.fontSize = "30px";
             document.getElementById("tobehidden").style.display = "none";
         }*/

     }
     function totalPrice(){
        var checkbox = document.getElementsByClassName("checkbox");
        var sum = 0;
        for(i=0; i<3; i++){
            if (checkbox[i].checked==true) {
                var value = parseInt(checkbox[i].value);
               sum+= value ;  
            }
        }
        var totalSum = sum +parseInt(document.getElementById("price").innerHTML)
        document.getElementById("totalPrice").innerHTML= parseInt(totalSum) || 0;
       
     }
     function receipt() {
  var popup = document.getElementById("receipt");
  popup.classList.toggle("show");
}
function payment(){
    alert("Payment Successful");
    window.open("receipt.html");
}