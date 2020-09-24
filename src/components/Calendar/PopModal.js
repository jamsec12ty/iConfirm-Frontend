import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import DropDownEmployee from './DropDownEmployee.js'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement')

function PopModal(){
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.

  }

  function closeModal(){
    setIsOpen(false);
  }

    return (
      <div>
        <button onClick={openModal}>Add Shift</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >


          <button onClick={closeModal}>x</button>
          <form>
          <DropDownEmployee />
          </form>
        </Modal>
      </div>
    );
}


export default PopModal;
