let Viratinfo = {
    imgurl: "//www.suntiros.com/wp-content/uploads/2017/09/Virat-Kohli-HD-Photos-Gallery.jpg",
    name: "Virat Kohli",
    description: "Indian Cricketer"
  };
  
  
  
  let displayobject;
  
  let getRandomUser = function() {
    fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(data=>console.log(data))
    document.getElementById("Virat-img").src = displayobject.imgurl;
    document.getElementById("Virat-name").innerHTML = displayobject.name;
    document.getElementById("Virat-description").innerHTML = displayobject.description;
  };