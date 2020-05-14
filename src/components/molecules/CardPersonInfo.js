import React from 'react'

const CardPersonInfo = ({ img, name, profession, content })=> {
    return(
        <div className="personInfo">
            <div className="userIcon">
                {img ? <img src={img} alt="User Profile"/> : null }
            </div>
            <p className="personInfoContent">{content}</p>
            <p className="personInfoName">{name}</p>
            <p className="personInfoNameprofession">{profession}</p>
        </div>
    )
}

export default CardPersonInfo
