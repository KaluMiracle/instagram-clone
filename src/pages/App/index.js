
import app from  './app.module.css';
import fbLogo from '../../assets/images/fbLogo.png'
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from "../../components/Footer"
import Slider from "../../components/Slider"



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
      <div className={app.container}>
            <h1 className={app.instagram}>Instagram</h1>
            <div className={app.login}>
                
                <input ref={usernameRef} className={app.input} placeholder="Phone number, username, or email"/>
                <input ref={passwordRef} className={app.input} placeholder="Password" type={"password"}/>
                
                <button  className={app.loginBtn}disabled={true } >
                  <Link to={"dashboard"} style={{color: "white", width: "100%",}}>
                    log in
                  </Link>
                  <Outlet/>
                 
                </button>
              
                
                <div className={app.or}>
                    <div className={app.line}></div>
                    <div className={app.orText}>OR</div>
                    <div className={app.line}></div> 
                </div>
                <div className={app.fbLogin}>
                    <img className={app.fbImage}  src={fbLogo}/>
                    <p>Log in with Facebook</p>
                
                </div> 
                <a className={app.forgotPassword}>
                    <p>Forgot password</p>
                </a>
            </div>       
      </div>

      <div className={app.signUp}>
          <p>Don't have an account?</p>
          <p  style={{color: "#385185"}}>sign up</p>
      </div>

      <div className={app.getTheApp}>
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






function App() {
  
  return (
    <div className={app.appRoot}>
      <Slider />
      <Wrapper />
      <Footer/>
    </div>
   
   
  );
}

export default App
