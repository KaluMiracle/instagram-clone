import "./dashBoard.css";
import React, { useReducer } from "react";

import rihanna from "./images/rihanna.jpg";
import miracle from "./images/miracle.jpg";
import bright from "./images/bright.jpg";
import chinaza from "./images/chinaza.jpg";
import kasmir from "./images/kasmir.jpg";
import supercar from "./images/supercar.jpg";
import melody from "./images/melody.jpg";
import StoriesModal from "./StoriesModal";

import Story from "./Story";
import NavBar from "./NavBar";
import Post from "./Post";
import DashBoard2 from "./Dashboard2";

import StoriesCarousel from "./carousel";

function DashBoardApp() {
  const users = [
    {
      key: 1,
      username: "miracle",
      name: "Kalu Miracle",
      image: miracle,
      comment: "Good morning y'all, have a nice day",
    },
    {
      key: 2,
      username: "rihanna",
      name: "Rihanna Fenty",
      image: rihanna,
      comment: "music!!!!",
    },
    {
      key: 3,
      username: "chinaza",
      name: "Kalu Chinaza",
      image: chinaza,
      comment: "make some noise",
    },
    {
      key: 4,
      username: "supercars",
      name: "supercars global",
      image: supercar,
      comment: "looking good",
    },
    {
      key: 5,
      username: "kasmir",
      name: "Kasmir Diamond",
      image: kasmir,
      comment: "goodDay",
    },
    {
      key: 6,
      username: "melody",
      name: "Kalu Melody",
      image: melody,
      comment: "they cant stop my shine",
    },
    {
      key: 7,
      username: "bright",
      name: "Kalu Bright",
      image: bright,
      comment: "ZAZU Zehhhhh",
    },
  ];

  function Stories() {
    const [storiesModalShow, setStoriesModalShow] = React.useState(false);
    const [user, setUser] = React.useState(users[0]);

    function hideStoriesModal() {
      setStoriesModalShow(false);
    }

    return (
      <>
        <ul id='storiesDiv'>
          {users.map((user) => {
            function handleOnClick() {
              setUser(user);
              setStoriesModalShow(true);
            }
            return (
              <>
                <Story onClick={handleOnClick} user={user} key={user.key} />
              </>
            );
          })}

          <StoriesModal
            user={user}
            show={storiesModalShow}
            onHide={() => setStoriesModalShow(false)}
          />
        </ul>
      </>
    );
  }

  function NewsFeed() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
      <div className='newsFeed'>
        <Stories />
        {users.map((user) => {
          return <Post user={user} key={user.key} />;
        })}
      </div>
    );
  }

  return (
    <>
      <div id='dashBoardRoot'>
        <NavBar user={users[0]} />
        <NewsFeed />
        <DashBoard2 user={users[0]} users={users} />
      </div>
    </>
  );
}

export default DashBoardApp;
