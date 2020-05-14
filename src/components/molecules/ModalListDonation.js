import React, {useState} from 'react'
import { Modal, Container, Row } from 'react-bootstrap'
import Checkbox from '../atoms/Checkbox'
import CategoryRecip from './CategoryRecip'
import CardUserRecip from './CardUserRecip'

const ModalListDonation = ({handleShow, show, showModalConfrim})=> {
    const [state, setState] = useState({
        checkboxFilter: true
    })

    const handleCheckboxFilter = () =>{
        setState({
            checkboxFilter: !state.checkboxFilter
        })
    }
    return(
        <Modal show={show} onHide={handleShow} size="lg" style={{marginTop: 0, paddingTop: 0}}>
            <div className="modalListDonationWrapper">
                <div className="modalHeader">
                    <h3 className="titleModal">Kirim Donasi</h3>
                    <button className="btnModalClose">
                        <img onClick={handleShow} src={require('../../assets/icons/close.png')} alt="close"/>
                    </button>
                </div>
                <div className="modalContainer">
                    <div className="modalSubtitleWrapper">
                        <div>
                            <h5 className="modalSubtitle">Calon Penerima</h5>
                        </div>
                        <div>
                            <button className="btnModalAcak">
                                <img className="btnImgModalAcak" src={require('../../assets/icons/refresh.png')} alt="random"/>
                                <span>Pilih Secara Acak</span>
                            </button>
                        </div>
                    </div>

                    <div>
                        <Checkbox label="Gunakan Preferensi Pilihan" active={state.checkboxFilter} handleActive={handleCheckboxFilter}/>
                        
                        {state.checkboxFilter ? <CategoryRecip/> : null }
                    </div>

                    <Container>
                        {/* <button onClick={()=>showModalConfrim('data')}></button> */}
                            <Row className="mt-3 mb-4">
                                <CardUserRecip showModalConfrim={showModalConfrim}/>
                                <CardUserRecip showModalConfrim={showModalConfrim}/>
                                <CardUserRecip showModalConfrim={showModalConfrim}/>
                                <CardUserRecip showModalConfrim={showModalConfrim}/>
                                <CardUserRecip showModalConfrim={showModalConfrim}/>
                                <CardUserRecip showModalConfrim={showModalConfrim}/>
                                <CardUserRecip showModalConfrim={showModalConfrim}/>
                                <CardUserRecip showModalConfrim={showModalConfrim}/>
                                <CardUserRecip showModalConfrim={showModalConfrim}/>
                            </Row>
                    </Container>

                </div>
            </div>
        </Modal>
    )
}

export default ModalListDonation
