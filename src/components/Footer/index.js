import footer from './footer.module.css'
import React from 'react'


function Footer(){

    class FooterItem{
      constructor(key, link){
        this.key = key
        this.link = link
      }
      
    }
    
    const metaItems =[
      new FooterItem("Meta",  "https://about.facebook.com/meta"),
      new FooterItem("About", "https://about.instagram.com/"),
      new FooterItem("Blog",  "https://about.instagram.com/blog/"),
      new FooterItem("Jobs",  "https://www.instagram.com/about/jobs/"),
      new FooterItem("API", "https://developers.facebook.com/docs/instagram"),
      new FooterItem("Privacy", "https://www.instagram.com/legal/privacy/"),
      new FooterItem("Terms", "https://www.instagram.com/legal/terms/"),
      new FooterItem("Top Account", "https://www.instagram.com/directory/profiles/"),
      new FooterItem("HashTags", "https://www.instagram.com/directory/hashtags/"),
      new FooterItem("Locations", "https://www.instagram.com/explore/locations/"),
      new FooterItem("Instagram lite", "https://www.instagram.com/web/lite/")
    ]
  
    const footerItems = [
      new FooterItem("Beauty",  "https://www.instagram.com/topics/beauty/"),
      new FooterItem("Dance", "https://www.instagram.com/topics/dance-and-performance/"),
      new FooterItem("Fitness",  "https://www.instagram.com/topics/fitness/"),
      new FooterItem("Food & Drinks",  "https://www.instagram.com/topics/food-and-drink/"),
      new FooterItem("Home & Garden", "https://www.instagram.com/topics/home-and-garden/"),
      new FooterItem("Music", "https://www.instagram.com/topics/music/"),
      new FooterItem("Visual Arts", "https://www.instagram.com/topics/visual-arts/"),
    ]
  
  
  
    return (
      <div className={footer.footer} >
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
        <div 
         style={
            {marginBottom: 20}
            }
        >
              <p >English</p>
              <p >@2020 instagram from meta</p>
          </div>
      </div>
    )
  }
  
  export default Footer