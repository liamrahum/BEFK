document.getElementById("body").style.backgroundImage = "url('../assets/background-girls.png')";


welcome = function welcomeMsg()
{
    if(localStorage.getItem("myName") == undefined)
    {
        let personName = prompt("שלום! מה שמך?");
        localStorage.setItem("myName", personName);
    }
    var myName = localStorage.getItem("myName");            
    var welcomeText = "שלום, ";    
    document.getElementById("welcome-msg").innerHTML = (welcomeText + myName + "!");
}

welcome();
