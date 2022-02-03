import Modal from 'react-bootstrap/Modal'
import React from 'react';
import storiesModal from "./storiesModal.module.css"

function StoriesModal({show ,onHide, user}) {
    
    return (
      <>
        <Modal
          show={show}
          onHide={onHide}
          dialogClassName={storiesModal.modal}
          aria-labelledby="example-custom-modal-styling-title"
          centered = {true}
          enforceFocus ={true}
          animation = {true}
          fullscreen={true}
          scrollable={false}
          
          
        >
          
              <div className={storiesModal.story}>
                <div style={{display: "flex", justifyContent: "space-between" ,width: "90%", alignItems: "center" }}>
                  <p >Instagram</p>
                  <button onClick={onHide} className={storiesModal.closeButton} > x</button>
                </div>
                
                <img className={storiesModal.image} src={user.image}></img>
              </div>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
           
        </Modal>
            
      </>
    );
  }

  export default StoriesModal