function myRead(e) {
    var parent_id = e.target.parentNode.id;
    var dots = document.getElementById(parent_id+'-dots');
    var moreText = document.getElementById(parent_id+'-more');
    var btnText = document.getElementById(parent_id+'-myBtn');
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }