//Start books
let categories = document.querySelectorAll(".categories li");
let categoriesArray = Array.from(categories);
let divs = document.querySelectorAll(".content  .thediv");
let divsArray = Array.from(divs);
let bookSection = document.querySelector(".books");

categoriesArray.forEach(function (li) {
  li.addEventListener("click", function (e) {
    categoriesArray.forEach((el) => {
      el.classList.remove("active");
    });
    e.target.classList.add("active");
    divsArray.forEach(function (div) {
      div.style.display = "none";
    });
    let i = 1;
    document.querySelectorAll(li.dataset.work).forEach((el) => {
      el.style.display = "block";
      console.log(i);
      i++;
      window.scrollTo({
        top: 500,
        behavior: "smooth",
      });
    });
  });
});
//end books
