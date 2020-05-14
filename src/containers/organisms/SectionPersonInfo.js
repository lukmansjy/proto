import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'

import ArrowIcon from '../../components/atoms/ArrowIcon'
import CardPersonInfo from '../../components/molecules/CardPersonInfo'

const SectionPersonInfo = ()=> {
    const [index, setIndex] = useState(0)

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    return(
        <Carousel 
            activeIndex={index}
            onSelect={handleSelect}
            indicators={false}
            prevIcon={<ArrowIcon img={require('../../assets/icons/arrow-left.png')}/>}
            nextIcon={<ArrowIcon img={require('../../assets/icons/arrow-right.png')}/>}>

            <Carousel.Item>
                <div className="jumbotronSlider">
                    <CardPersonInfo
                        img={null}
                        name="Dra. Hj. Ida Fauziyah, M.Si"
                        profession="Menteri Tenaga Kerja Republik Indonesia"
                        content="Diaspora Peduli adalah wujud dari eksistensi kita sebagai satu bangsa. Saudara-saudara kita yang mukim di luar negeri, bekerja dan berusaha, mengulurkan donasinya untuk rekan-rekan pekerja yang terkena PHK sebagai akibat dari pandemi virus Corona."/>

                    <CardPersonInfo
                        img={require('../../assets/images/person.png')}
                        name="Dita Indah Sari"
                        profession="Staff Khusus Kementerian Ketenagakerjaan RI"
                        content="Diaspora’s Care memicu adrenalin kami. Rekan-rekan pekerja yang terkena PHK akibat dampak virus Corona harus dimuliakan hidupnya, keluarganya, dan orang-orang yang mereka cintai. Humanitas merekatkan semuanya. Diaspora Peduli adalah proyek kemanusiaan dalam arti yang sebenarnya."/>                    
                    
                </div>
            </Carousel.Item>
                
        </Carousel>
    )
}

export default SectionPersonInfo