import React from "react"
import "./story.css"
function Story({user, onClick}){
    const seen = React.useRef()

    function removeBorder(){
        onClick()
        seen.current.style.border ="none"
    }
    

    return(
        <button style={{background: "transparent", border: "none"}} variant="primary" onClick={removeBorder}>
            <li id='story'>
                <div ref={seen}>
                    <img alt = "user.key" src={user.image}/> 
                </div>

                <p>{user.username}</p>
                
            </li>
        </button>
        
    )    
}

export default Story
