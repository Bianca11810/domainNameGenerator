/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  let div = document.querySelector("#container");
  let pronoun = ["The", "Our"];
  let adj = ["Big", "Magnificent"];
  let noun = ["Boi", "Mango"];
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let b = 0; b < noun.length; b++) {
        //create the domain
        let domain = pronoun[i] + "" + adj[j] + "" + noun[b] + "" + ".com";

        // create a new html element
        let p = document.createElement("p");
        // add domain as value to the element
        p.innerHTML = domain;

        // add element to html
        div.appendChild(p);
      }
    }
  }
};
