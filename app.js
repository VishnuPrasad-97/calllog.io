     function toggleContent(element) {
          // Toggle the 'expanded' class for the clicked li
          element.classList.toggle("expanded");
    
          // Toggle the visibility of the expandable content
          var content = element.querySelector(".expandable-content");
          if (content.style.display === "block") {
              content.style.display = "none";
          } else {
              content.style.display = "block";
          }
      }