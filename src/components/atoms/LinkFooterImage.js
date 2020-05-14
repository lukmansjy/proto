import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const LinkFooterImage = ({label, icon})=> {
    return(
        <Fragment>
            <Link to="#" className="linkFooterWithImg">
                <img src={icon}/> {label}
            </Link>
            <br/>
        </Fragment>
    )
}

export default LinkFooterImage