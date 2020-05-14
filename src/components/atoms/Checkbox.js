import React from 'react'

const Checkbox = ({active, label, handleActive})=> {
    return(
        <button onClick={handleActive} className="myCheckBox">
            {active ? 
                <div className="myCheckBoxIndicatorActive">
                    <img src={require('../../assets/icons/icon-checkbok.png')} alt="Indocator Checkbox" />
                </div>
            :
                <div className="myCheckBoxIndicator"></div>
            }
            <span className="myCheckBoxLabel">{label}</span>
        </button>
    )
}

export default Checkbox