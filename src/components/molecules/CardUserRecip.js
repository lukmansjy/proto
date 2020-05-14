import React from 'react'

import MyButton from '../atoms/MyButton'
import { Col } from 'react-bootstrap'

const CardUserRecip = ({showModalConfrim})=> {
    return(
        <Col xs="12" lg="3">
            <div className="itemModalDonation">
                <div>
                    <img src={require('../../assets/images/person-2.png')} alt="User"/>
                </div>
                <h4>SALSABEILA AZKY</h4>
                <p>Dagang</p>
                <label>PHK</label>
                <MyButton onClick={()=>showModalConfrim('data')}  title="Donasi" active fullWidth/>
            </div>
        </Col>
    )
}

export default CardUserRecip
