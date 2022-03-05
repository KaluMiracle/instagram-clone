
import styles from './dashBoard.module.css';
import React from 'react';


import rihanna from '../../assets/images/rihanna.jpg'
import miracle from '../../assets/images/miracle.jpg'
import bright from '../../assets/images/bright.jpg'
import chinaza from '../../assets/images/chinaza.jpg'
import kasmir from '../../assets/images/kasmir.jpg'
import supercar from '../../assets/images/supercar.jpg'
import melody from '../../assets/images/melody.jpg'

import StoriesModal from '../../components/StoriesModal';


import Story from '../../components/Story';
import NavBar from '../../components/NavBar';
import Post from '../../components/Post';
import DashBoard2 from '../../components/Dashboard2';

import CommentsModal from '../../components/commentsModal';


function DashBoardApp(){
    
    const users =[
                {
                    key: 1,
                     username:"miracle", 
                     name:"Kalu Miracle", 
                     image: miracle, 
                     comment: "Good morning y'all, have a nice day"
                },
                {
                    key: 2, 
                    username:"rihanna", 
                    name:"Rihanna Fenty", 
                    image: rihanna, 
                    comment: "music!!!!" 
                },
                {
                    key: 3, 
                    username:"chinaza", 
                    name:"Kalu Chinaza", 
                    image: chinaza, 
                    comment: "make some noise"
                },
                {
                    key: 4, 
                    username:"supercars", 
                    name:"supercars global", 
                    image: supercar, 
                    comment:"looking good" 
                },
                {
                    key: 5, 
                    username:"kasmir", 
                    name:"Kasmir Diamond",  
                    image: kasmir, 
                    comment: "goodDay"
                },
                {
                    key: 6, 
                    username:"melody", 
                    name:"Kalu Melody", 
                    image: melody, 
                    comment:"they cant stop my shine"
                },
                {
                    key: 7, 
                    username:"bright", 
                    name:"Kalu Bright", 
                    image: bright, 
                    comment: "ZAZU Zehhhhh"
                },

    ]


    


    function Stories(){
       
        const [storiesModalShow, setStoriesModalShow] = React.useState(false);
        const [user, setUser] = React.useState(users[0])
        
        function hideStoriesModal(){
            setStoriesModalShow(false)

        }
        
        return(
            <>

                <ul  className={styles.storiesDiv}>

                    {users.map(user=>
                        {  
                            function handleOnClick(){
                                        setUser(user)
                                        setStoriesModalShow(true)
                                
                            }
                            return( 
                                <>
                                    <Story onClick={handleOnClick} user={user} key={user.key}/>
                                      
                                </>
                            
                            )
                        }
                    )
                    }

                    <StoriesModal user={user} show={storiesModalShow} onHide={() => setStoriesModalShow(false)}/>
                    

                </ul>

                
            </>
            
        )

    }


    function NewsFeed(){

        const [user, setUser] = React.useState(users[0]);
        

        return(
            
            <div className={styles.newsFeed} >
                <Stories />
                {users.map(user =>{
                    return <Post user= {user} key={user.key} />
                })}
                
                
            </div>

            
        )

    }


    



    return(

        <>

            <div className = {styles.dashBoardRoot}>
                <head>
                    <title>Instagram</title>
                </head>
                <div className={styles.container}>
                    <NavBar user={users[0]} />
                    
                    <NewsFeed/>
                    <DashBoard2  user= {users[0]} users={users}/>
                </div>
                
                
               
            </div>

            
        </>
        
         
    

    )
}



export default DashBoardApp
