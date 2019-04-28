import React from 'react'
import Modal from 'react-modal'

const OptionalModal = (props) => (
    <Modal
        contentLabel="Selected"
        closeTimeoutMS={ 200 }
        className="modal"
        isOpen={!!props.selectedOption}
        onRequestClose={process.wipeSelectedOption}

    >
        <h3 className="modal__title">Selected option</h3>
        { props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.wipeSelectedOption}>OKAY</button>
    </Modal>
)


export default OptionalModal