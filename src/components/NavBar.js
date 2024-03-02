import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  //create a variable and iterate through the array 
  //pass two callback functions, the array and index to give it a unique ID
  //need to string interpolate 
  //return the who function but calling the name of your variable in your component 

  const linkTags = links.map((link, index) => {
    return <a key={index} href={`#${link}`}>{link}</a>
  })
  return (
  <nav>
    {linkTags}
  </nav>
  );
}

export default NavBar;
