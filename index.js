const input = document.querySelector("#input");

function reverseString (str){
    return str.split("").reverse().join("");
}

document.
querySelector("#btnCheck").
addEventListener("click", function(show) {
    show = input.value;
    const reverseWord = reverseString(show);
    alert(reverseWord);
    
    if (show === reverseWord) {
        alert("P A L I N D R O M E")
    } else{
        alert("Not Palindrome ");
    }
    input.value = "";

    var animateBtn = document.querySelector("#btnCheck");
    animateBtn.classList.add("pressed");
    setTimeout(function(){
        animateBtn.classList.remove("pressed")
        }, 100);
    
});



