import React from "react"
import "./slider.css"

function Slider(){

  

  const slides =[
      {key: 1, source: "https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg"},
      {key: 2, source: "https://www.instagram.com/static/images/homepage/screenshot4.jpg/842fe5699220.jpg"},
      {key: 3, source: "https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg"},
      {key: 4, source: "https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg"}
  ]
  
  let slideIndex = 0
  React.useEffect(()=>{
      slide(slideIndex)
    },[]
  )
  
  function slide(){
    var x = document.getElementsByClassName("slide");
    for( var i = 0; i < x.length; i++){
        x[i].style.display = "none"
    }

    slideIndex++;
    if(slideIndex > x.length){
        slideIndex = 1
    }
    if(x != null){
      x[slideIndex - 1].style.display = "flex";
    }
    setTimeout(slide, 3000);

  }

  return(


    <div className="slider">
      { 
      
        slides.map(element => {
           return <img key={element.key} className="slide" src={element.source}/>
        })
      }
        
    </div>
  );
}

export default Slider