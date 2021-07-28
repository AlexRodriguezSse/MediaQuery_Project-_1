// this code show us the live value of the width of our window browser
window.onresize = screen;
window.onload = screen;

//the next code below is for give functionality by getting an attribute from the .html structure (id="size")
function screen() {

    //variable containing the window width value 
    myWidth = window.innerWidth;
    
    //get the value from the .html id; (.innerHTML is for give the div html a text)
    document.getElementById("size").innerHTML = "Width: " + myWidth + "px";
}