# MediaQuery_Project-_1 (https://alexrodriguezsse.github.io/MediaQuery_Project-_1/)
A begginer project to understand how to apply MediaQuery
    Source (https://www.youtube.com/watch?v=aook54SsfhY&t=3077s)

- What I used?
    - VS CODE
        - Plugins: Live Sass Compiler; Live Server
    - Languages: HTML; SASS; JS; CSS
    
 - General Summary of what I did?
   - Create a folder an inside of it 
     -  Files: .index.html ;  style.scss ; main.js
   - Follow the instructions in the tutorial
   - Make sure I understand the process, learn why and goggling what was new to me
   - Finish the project 1
   - Review for myself by commenting out the code writing earlier
   - Upload to Github, and document my learning process for this particular project 1
   
   
# 1. HTML
  a simple block structure was made with, I create 1 class (.container) and a id (#size)
  
      <body>
        <div class="container">
            <div> Hello Screen!</div>
        </div>
        <div id="size"></div>
      </body>
  
# 2. SASS
  4 color variables and 4 width variables were set to make a single style responsive design.
  
      $color-1 : #cdb4db ; // Mobile
      $color-2 : #fff1e6 ; // Tablet
      $color-3 : #52b788 ; // Laptop
      $color-4 : #bee1e6 ; // Desktop

      $mobile  : 576px;
      $tablet  : 768px;
      $laptop  : 992px; 
      $desktop : 1200px;

Style the body, and general attributes to remove the browser's default styles.
  
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;


        // general basic attributes for the whole body
        body{
            font-family: sans-serif;
            font-size: 35px;
        }
    }
  
Styles for the class (.container) and the id (#size)

    .container{
        height: 100vh;
        display: grid;
        place-content: center;
        background-color: #fff;
    }
  
    #size{
      position: absolute;

      top: 60%;
      left: 50%;
      //the "transform" attribute it's used for compensate the center code default error from above
      transform: translateX(-50%);
      font-size: 35px;
      color: red;
}
  
Applying the media query for make responsive
  
      @media (max-width : $desktop) {
          .container {
              background-color: $color-4;
          }
      }

      @media (max-width : $laptop) {
          .container {
              background-color: $color-3;
          }
      }

      @media (max-width : $tablet) {
          .container{
              background-color: $color-2;        
          }
      }

      @media (max-width: $mobile) {
          .container {
          background-color: $color-1;
          }   
      }
  
# 3. JS
  - At this step I previously have not knowledge of how to code in JS, for that reason was a little difficult to understand what the instructor was saying, But i did my best
  
I learned how to set up events to fulfill a single function; this code below let show us the live value of the width of our window browser

    window.onresize = screen;
    window.onload = screen;

Then the function (screen) was established 
  
      //the next code below is for give functionality by getting an attribute from the .html structure (id="size")
        
        function screen() {
        
        myWidth = window.innerWidth;
        document.getElementById("size").innerHTML = "Width: " + myWidth + "px";
       
        }
  
  
  
  
  
  
  
  
