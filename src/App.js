
import './App.css';
import fbLogo from './components/images/fbLogo.png'
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import DashBoardApp from './components/DashBoard';
import { Switch, 
  Route, Redirect, BrowserRouter, Routes,} from "react-router-dom";
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


    <div id="slider">
      { 
      
        slides.map(element => {
           return <img key={element.key} className="slide" src={element.source}/>
        })
      }
        
    </div>
  );
}


function Wrapper(){

  const [disableLogin, setDisableLogin] = React.useState(true)
  const usernameRef = React.useRef()
  const passwordRef = React.useRef()

  React.useEffect(()=>{
    if(usernameRef.current.value === "miracle" && passwordRef.current.value === "12345"){
        setDisableLogin(false)
    }
  })


  
  function HandleLogin(){
    
  }
  return(
    <div >
      <div className="container">
            <h1 id="instagram">Instagram</h1>
            <div className="login">
                
                <input ref={usernameRef} className="input" placeholder="Phone number, username, or email"/>
                <input ref={passwordRef} className="input" placeholder="Password" type={"password"}/>
                
                <button  className="loginBtn" disabled={true } >
                  <Link to={"dashboard"} style={{color: "white", width: "100%",}}>
                    log in
                  </Link>
                  <Outlet/>
                 
                </button>
              
                
                <div id="or">
                    <div className="line"></div>
                    <div id="orText">OR</div>
                    <div className="line"></div> 
                </div>
                <div id="fbLogin">
                    <img id="fbImage"  src={fbLogo}/>
                    <p>Log in with Facebook</p>
                
                </div> 
                <a id="forgotPassword">
                    <p>Forgot password</p>
                </a>
            </div>       
      </div>

      <div id="signUp">
          <p>Don't have an account?</p>
          <p  style={{color: "#385185"}}>sign up</p>
      </div>

      <div id="getTheApp">
          <p>Get the app</p>
          <a  styles={{marginRight: 10}} href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.loginPage.badge&amp;mt=8&amp;vt=lo" tabIndex="0">
              <img alt="Available on the App Store" className="getTheAppImage " src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"/>
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DEF8B08C7-31A4-478F-9400-B5AF1BFC04D4%26utm_content%3Dlo%26utm_medium%3Dbadge" tabIndex="0">
              <img alt="Available on Google Play" className="getTheAppImage " src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"/>
          </a>
          

      </div>

    </div>

 

    
    )
}




function Footer(){
  class MetaItem{
    constructor(key, link){
      this.key = key
      this.link = link
    }
    
  }
  const metaItems =[
    new MetaItem("Meta",  "https://about.facebook.com/meta"),
    new MetaItem("About", "https://about.instagram.com/"),
    new MetaItem("Blog",  "https://about.instagram.com/blog/"),
    new MetaItem("Jobs",  "https://www.instagram.com/about/jobs/"),
    new MetaItem("API", "https://developers.facebook.com/docs/instagram"),
    new MetaItem("Privacy", "https://www.instagram.com/legal/privacy/"),
    new MetaItem("Terms", "https://www.instagram.com/legal/terms/"),
    new MetaItem("Top Account", "https://www.instagram.com/directory/profiles/"),
    new MetaItem("HashTags", "https://www.instagram.com/directory/hashtags/"),
    new MetaItem("Locations", "https://www.instagram.com/explore/locations/"),
    new MetaItem("Instagram lite", "https://www.instagram.com/web/lite/")
  ]

  const footerItems = [
    new MetaItem("Beauty",  "https://www.instagram.com/topics/beauty/"),
    new MetaItem("Dance", "https://www.instagram.com/topics/dance-and-performance/"),
    new MetaItem("Fitness",  "https://www.instagram.com/topics/fitness/"),
    new MetaItem("Food & Drinks",  "https://www.instagram.com/topics/food-and-drink/"),
    new MetaItem("Home & Garden", "https://www.instagram.com/topics/home-and-garden/"),
    new MetaItem("Music", "https://www.instagram.com/topics/music/"),
    new MetaItem("Visual Arts", "https://www.instagram.com/topics/visual-arts/"),
  ]



  return (
    <div id='footer' >
      <div>
        {metaItems.map(element => {
          return <a key={element.key} href={element.link} >{element.key}</a>
        })}
      </div>
      <div>
        {footerItems.map(element => {
          return <a key={element.key} href={element.link} >{element.key}</a>
        })}
      </div>
      <div  style={{marginBottom: 20}}>
            <p >English</p>
            <p >@2020 instagram from meta</p>
        </div>
    </div>
  )
}

function LandingPage(){
  return (
    <div id='root'>
      <Slider />
      <Wrapper />
      <Footer/>
    </div>
   
  );
}

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<LandingPage/>}/>
        <Route exact path="dashboard" element={<DashBoardApp/>} />
        
      </Routes>  
    
    </BrowserRouter>
  )
}

export default App
