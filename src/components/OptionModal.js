import React from 'react'
import Modal from 'react-modal'

const OptionalModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected"
        onRequestClose={process.wipeSelectedOption}
    >
        <h3>Selected option</h3>
        { props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.wipeSelectedOption}>Thanks</button>
    </Modal>
)


export default OptionalModal