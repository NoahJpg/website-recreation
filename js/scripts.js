// window.onload = function()
// function removeH1() {
//   const rElement = document.querySelector("h1");
//   rElement.remove("h1");
// }
// function createP() {
//   const p = document.createElement("p");
//   p.append("The HTML of this webpage was created with JavaScript.")
//   body.append(p);
// }

window.addEventListener("load", function(){
  // removeH1();
  
  const rElement = document.querySelector("h1");
  rElement.remove("h1");
  console.log("we've removed h1")

  const h1 = document.createElement("h1");
  console.log("added h1 again");
  h1.append("Webpage Recreation Practice");
  console.log("added text");
  const body = document.querySelector("body");
  // createP();
  const p = document.createElement("p");
  p.append("The HTML of this webpage was created with JavaScript.")
  const img = document.createElement("img");
  img.setAttribute("src", "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900");
  img.setAttribute("alt", "This is an image of a Multicolored Tanager bird from birdsoftheworld.org");
  img.setAttribute("style", "width:50%"); //come back to width
  const secondH1 = document.createElement("h1");
  secondH1.append("Facts about the Multicolored Tanager");
  const ul = document.createElement("ul");
  const firstLi = document.createElement("li");
  const secondLi = document.createElement("li");
  firstLi.append("It is endemic to the mountains of Colombia");
  secondLi.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");
  const h2 = document.createElement("h2");
  h2.append("Source");
  const a = document.createElement("a");
  a.setAttribute("href", "https://en.wikipedia.org/wiki/Multicoloured_tanager");
  a.append("Wikipedia");
  
  body.append(p);
  body.prepend(h1);
  body.append(img);
  body.append(secondH1);
  body.append(ul);
  ul.append(firstLi, secondLi);
  body.append(h2);
  body.append(a);

})


