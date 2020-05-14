import React, { useState } from 'react'

import NavBar from '../../components/molecules/NavBar'
import JumbotronSlider from '../organisms/JumbotronSlider'
import SectionNews from '../organisms/SectionNews'
import SectionPersonInfo from '../organisms/SectionPersonInfo'
import Footer from '../../components/molecules/Footer'
import ModalListDonation from '../../components/molecules/ModalListDonation'
import ModalConfirmPayDonation from '../../components/molecules/ModalConfirmPayDonation'

const Home = ()=> {
    const [state, setState] = useState({
        modalListDonation: false,
        modalConfirmPay: false
    })

    const handleModalListDonation = () => {
        setState({
            ...state,
            modalListDonation: !state.modalListDonation
        })
    }

    const handelModalConfirmPay = (data) => {
        setState({
            ...state,
            modalConfirmPay: !state.modalConfirmPay,
            modalListDonation: false
        })

        if(data){
            console.log(data)
        }
    }

    return(
        <div>
            <NavBar showModalListDonation={handleModalListDonation}/>
            <div style={{paddingTop: 75}}>
                <JumbotronSlider/>
                <SectionNews/>
                <SectionPersonInfo/>
                <Footer/>
            </div>
            <ModalListDonation handleShow={handleModalListDonation} show={state.modalListDonation} showModalConfrim={(data)=>handelModalConfirmPay(data)}/>
            <ModalConfirmPayDonation handleShow={handelModalConfirmPay} show={state.modalConfirmPay}/>
        </div>
    )
}

export default Home