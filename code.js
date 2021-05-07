// To run this assignment, right click on index.html in the Visual Studio file explorer to the left
// and select "Open with Live Server"

// You can access the story by using the pages array.
// You can find the pages array in story.js
// The first page is at index 0.
console.log(pages[0]);

let endingPages = [4, 9, 13, 17, 19, 20];
let currentPage = 0;

// Your Code Here.
// need to start with a promt after the first page is printed
//need to loop through the pages? or a bunch of if else statements?
// had to print out pages until an end page is reached
// once end page is reached print out everything that was selected to the screen

//has to start with page 0, then ask which page to go to

function isEndingPage(currentPage){
    for(let index = 0; index <= endingPages.length; index++) {
      if(currentPage === endingPages[index]) {
        return true;
      } 

    }
    return false;
}

//console.log(isEndingPage(currentPage))

//step 2 while loop

while (currentPage !== null) {
    currentPage = parseInt(currentPage);
    document.write(`<p> ${pages[currentPage]} </p>`);
   

    if(isEndingPage(currentPage) === true){
        currentPage = null;
        document.write(`<h2>You Have Reached the End! Game Over! </h2>`);
    }

    if (currentPage !== null) {
        currentPage = prompt(pages[currentPage] + "\n What page would you like to go to?");
        
        
        document.write(`<p> You cancelled the story.  </p>`);
    }
   
     
}

