let Viratinfo = {
    imgurl: "//www.suntiros.com/wp-content/uploads/2017/09/Virat-Kohli-HD-Photos-Gallery.jpg",
    name: "Virat Kohli",
    description: "Indian Cricketer"
  };
  
  
  
  let displayobject={
    name: "",
    imageurl:"",
    description:""
  };
  
  let getRandomUser = function() {
    fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(data=>{
        displayobject.name=data.results[0].name.first + " " + data.results[0].name.last
        displayobject.imageurl=data.results[0].picture.large
        displayobject.description=data.results[0].gender
        document.getElementById("Virat-img").src = displayobject.imgurl;
        document.getElementById("Virat-name").innerHTML = displayobject.name;
        document.getElementById("Virat-description").innerHTML = displayobject.description;
  })
    
  }