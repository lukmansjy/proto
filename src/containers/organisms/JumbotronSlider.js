import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import ArrowIcon from '../../components/atoms/ArrowIcon'

const JumbotronSlider = ()=> {
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
                    <div>
                        <img src={require('../../assets/images/jumbotron-picture-1.png')} style={{width: 540}}/>
                    </div>
                    <div className="jumbotronSliderContent">
                        <img className="jumbotronSliderIcon" src={require('../../assets/icons/quote.png')} alt="quote"/>
                        <h3 className="jumbotronSliderTitle">Program "Diaspora Peduli" family-to-family ini merupakan wujud solidaritas nyata diaspora Indonesia terhadap saudara-saudara di tanah air yang terkena PHK akibat krisis Covid-19</h3>
                        <p className="jumbotronSliderSubTitle">Dr. Dino Patti Djalal</p>
                    </div>
                </div>
            </Carousel.Item>

            <Carousel.Item>
                <div className="jumbotronSlider">
                    <div>
                        <img src={require('../../assets/images/jumbotron-picture-1.png')} style={{width: 540}}/>
                    </div>
                    <div className="jumbotronSliderContent">
                        <img className="jumbotronSliderIcon" src={require('../../assets/icons/quote.png')} alt="quote"/>
                        <h3 className="jumbotronSliderTitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                        <p className="jumbotronSliderSubTitle">Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
            </Carousel.Item>
                
        </Carousel>
    )
}

export default JumbotronSlider
