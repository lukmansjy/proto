import React, {useState} from 'react'
import { Modal } from 'react-bootstrap'

const ModalConfirmPayDonation = ({handleShow, show})=> {
    const [state, setState] = useState({
        payOnce: true
    })

    const handlePayOne = () =>{
        setState({
            payOnce: !state.payOnce
        })
    }
    return(
        <Modal show={show} onHide={()=>handleShow(null)} style={{marginTop: 0, paddingTop: 0}}>
            <div className="modalListDonationWrapper">
                <div className="modalHeader">
                    <h3 className="titleModal">Kirim Donasi</h3>
                    <button className="btnModalClose">
                        <img onClick={()=>handleShow(null)} src={require('../../assets/icons/close.png')} alt="close"/>
                    </button>
                </div>
                <div className="modalContainer">
                    <div className="modalSubtitleWrapper">
                        <div>
                            <h5 className="modalSubtitle">Calon Penerima</h5>
                        </div>
                    </div>
                    <h5 style={{textAlign: 'center', margin: 24, color: 'red'}}>Belum Selesai</h5>
                </div>
            </div>
        </Modal>
    )
}

export default ModalConfirmPayDonation