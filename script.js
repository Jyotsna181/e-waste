const content = document.querySelectorAll('.content');
const next = document.querySelector('.fa-circle-arrow-right');
let currentPage = 0;

next.addEventListener("click", () => {
	if (currentPage < content.children.length - 1) {
	  content.children[currentPage].style.display = "none";
	  currentPage++;
	  content.children[currentPage].style.display = "block";
	} else {
	  addPage();
	}
  });
  
  
  
 

        
   


