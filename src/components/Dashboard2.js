import React from "react"
import "./dashBoard2.css"



function DashBoard2({user, users}){
        

    function ProfileLink({user, imageSize}){
        
        return(
            <div 
                style={{display: "flex", justifyContent: "flex-start", alignItems: "center"}} 
            >
                <img  style={{width: `${imageSize}px`, height:`${imageSize}px`,borderRadius: "50%"}} className='profilePicture' alt={user.username} src={user.image}/>
                <div style={{ height: `${imageSize-10}px`,display: 'flex',flexDirection: "column", justifyContent: "center", marginLeft: "3px"}}>
                    <p style={{fontWeight: 600, color: 'black', marginBottom: "3px"}}>{user.username}</p>
                    <p >{user.name}</p>
                </div>
                                        
            </div>
        )
    }

    function FollowUser({user}){

    }


    return(
        <div className='dashboard2' role={"button"}>
            <ProfileLink user={user} imageSize={60}></ProfileLink>

            <div style={{display: "flex" ,justifyContent: "space-between", marginBottom: "10px",  marginTop: "20px"}}>

                <p>Suggestions For You</p>
                <p style={{color: "black", fontSize: "12px"}}>See All</p>
                
            </div>
            {
                users.map(user=>{
                    return (
                        <div style={{display: "flex", width: "100%", height: "50px", justifyContent: "space-between"}}>
                            <ProfileLink user={user} imageSize={40}></ProfileLink>
                            <button >Follow</button>

                        </div>
                    )
                })
            }
            
            
            
        </div>
    )
}

export default DashBoard2