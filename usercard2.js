let Viratinfo = {
    imgurl: "//www.suntiros.com/wp-content/uploads/2017/09/Virat-Kohli-HD-Photos-Gallery.jpg",
    name: "Virat Kohli",
    description: "Indian Cricketer"
  };
  
  let Viratyounginfo = {
    imgurl: "https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/virat-kohli-in-his-childhood-201605-1464674807.jpg",
    name: "Virat",
    description: "Indian Cricketer"
  };
  
  let isViratinfo = true;
  let displayobject;
  
  let flipdata = function() {
    if (isViratinfo == true) {
      displayobject = Viratyounginfo;
      isViratinfo = false;
    } else {
      displayobject = Viratinfo;
      isViratinfo = true;
    }
    document.getElementById("Virat-img").src = displayobject.imgurl;
    document.getElementById("Virat-name").innerHTML = displayobject.name;
    document.getElementById("Virat-description").innerHTML = displayobject.description;
  };