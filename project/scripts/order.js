var purpose = document.getElementById("purpose");
     var cakename = document.getElementById("name");
     var nickname = document.getElementById("nickname");
     var pounds = document.getElementById("pounds");
         function displayCakeInfoFor(){
         document.getElementById("For").innerHTML = purpose.value;
     }
     function displayCakeInfoName(){
        document.getElementById("Name").innerHTML = cakename.value;
     }
     function displayCakeInfoNickname(){
        document.getElementById("Nickname").innerHTML = nickname.value;
     }
     function changeImagePerPound(){
         if (pounds.value==1) {
            document.getElementById("imgCake").src= "../images/choco1.jpg";
            document.getElementById("imgCake").style.height= "300px";
            document.getElementById("imgCake").style.width= "300px";
            document.getElementById("imgCake").style.paddingTop= "120px";
            document.getElementById("imgCake").style.paddingLeft= "120px";
            document.getElementById("For").style.marginTop = "-45%";
             document.getElementById("For").style.marginLeft = "230px";
             document.getElementById("For").style.fontSize = "15px";
             document.getElementById("Name").style.padding = "10px 0 0 230px ";
             document.getElementById("Nickname").style.padding = "15px 0 0 230px ";
             document.getElementById("Nickname").style.fontSize = "15px ";
             document.getElementById("tobehidden").style.display = "none";
            document.getElementById("price").innerHTML =  600;
            document.getElementById("tobehidden").style.display = "none";

                     } 
         else if(pounds.value==2){
             document.getElementById("imgCake").src= "../images/choco1.jpg";
             document.getElementById("price").innerHTML =  2* 600;
             document.getElementById("imgCake").style.height="400px"; 
             document.getElementById("imgCake").style.width = "450px";
             document.getElementById("imgCake").style.paddingTop = "120px";
             document.getElementById("For").style.marginTop = "-60%";
             document.getElementById("For").style.marginLeft = "180px";
             document.getElementById("For").style.fontSize = "20px";
             document.getElementById("Name").style.padding = "15px 0 0 180px ";
             document.getElementById("Nickname").style.padding = "15px 0 0 180px ";
             document.getElementById("Nickname").style.fontSize = "30px ";
             document.getElementById("tobehidden").style.display = "none";
         }
         else if (pounds.value==3) {
            document.getElementById("imgCake").src= "../images/choco2.jpg";
            document.getElementById("price").innerHTML = 3* 600;
            document.getElementById("imgCake").style.height="400px"; 
             document.getElementById("imgCake").style.width = "450px";
             document.getElementById("imgCake").style.paddingTop = "120px";
            document.getElementById("For").style.marginTop = "-49%";
             document.getElementById("For").style.marginLeft = "150px";
             document.getElementById("For").style.fontSize = "30px";
             document.getElementById("Name").style.fontSize = "30px";
             document.getElementById("Name").style.padding = "5px 0 0 180px ";
             document.getElementById("Nickname").style.padding = "10px 0 0 160px ";
             document.getElementById("Nickname").style.fontSize = "40px ";
             document.getElementById("tobehidden").style.display = "none";
         }

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