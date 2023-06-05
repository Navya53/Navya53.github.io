let Viratinfo{
    imgurl: "//www.suntiros.com/wp-content/uploads/2017/09/Virat-Kohli-HD-Photos-Gallery.jpg",
    name: "Virat Kohli",
    Description: Indian Cricketer
}
let Viratyounginfo{
    imgurl: "http://1.bp.blogspot.com/-iV6xrJt2vpY/UaB6BMlYp6I/AAAAAAAAJQI/IbngTaQmDhM/s1600/cricketer-virat-kohli-childhood-pictures-childhood-images.blogspot.com-(2).jpg",
    name: "Virat Kohli",
    Description: Indian Cricketer
}
let isViratinfo=true;
let displayobject;
let flipdata=function(){
    if(isViratinfo==true){
        displayobject=Viratyounginfo;
        isViratinfo=false;
    }
    else{
        displayobject=Viratinfo;
        isViratinfo=true;
    }
    document.getElemnentById("Virat-img").src=displayobject.imgurl;
    document.getElemnentById("Virat-name").innerHTML=displayobject.name;
}   document.getElemnentById("Virat-description").innerHTML=displayobject.Descripti;