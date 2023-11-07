let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();

  //changes

  // Do all of your work inside the document.addEventListener  

  // Part 1
  const webTitle = document.getElementById("main-title")
  webTitle.textContent = "Doms Websites"
  // Part 2
  const bodyEl = document.querySelector("body")
  bodyEl.style.backgroundColor = "orange"

  // Part 3
  const favThings = document.getElementById("favorite-things")
  const lastListItem = favThings.lastElementChild
  favThings.removeChild(lastListItem)
  // Part 4
  const specialTitleEl = document.querySelectorAll(".special-title")
  specialTitleEl.forEach(function(element){
    element.style.fontSize = "2rem";
  });

  // Part 5
  const pastRaces = document.getElementById("past-races")
  const lastRaceItem = pastRaces.lastElementChild
  pastRaces.removeChild(lastRaceItem)
  // Part 6
  const newCity = document.createElement("li")
  newCity.textContent = "Boston"
  pastRaces.appendChild(newCity)
  // Part 7
  const mainContent = document.querySelector(".main")
  const newBlog = document.createElement("div")
  newBlog.className = "blog-post-red"

  const cityH1 = document.createElement("h1")
  cityH1.textContent = ("Las Vegas")
  
  const cityDescript = document.createElement("p")
  cityDescript.textContent = "Las vages be hot somtimess"

  newBlog.appendChild(cityH1)
  newBlog.appendChild(cityDescript)
  // Part 8
  const quoteTitle = document.getElementById("quote-title")
  quoteTitle.addEventListener("click", randomQuote)
  // Part 9
  const blogPostEl = document.querySelectorAll(".blog-post")

  blogPostEl.forEach(function (blogPost) {s
    blogPost.addEventListener("mouseout", function () {
      blogPost.classList.toggle("purple");
    });

    blogPost.addEventListener("mouseenter", function () {
      blogPost.classList.toggle("red");
    });
  });

});
