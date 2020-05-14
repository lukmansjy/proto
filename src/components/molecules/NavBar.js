import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({showModalListDonation})=> {
    return(
        <div className="navBarWrapper">
            <div>
                <Link to="/">
                    <img src={require('../../assets/icons/logo.png')} className="navBrand"/>
                </Link>
            </div>
            <div className="navMenu">
                <Link to="#">
                    <p className="navMenuItem navMenuItemActive">Bearnda</p>
                </Link>
                <Link to="#">
                    <p className="navMenuItem">Berita</p>
                </Link>
                <Link to="#">
                    <p className="navMenuItem">Galeri</p>
                </Link>
                <Link to="#">
                    <p className="navMenuItem">Calon Penerima</p>
                </Link>
                <Link to="#">
                    <p className="navMenuItem">Telah Menerima</p>
                </Link>
            </div>
            <div className="navMenu">
                <div>
                    <button onClick={showModalListDonation} className="navUser">Donasi Sekarang</button>
                </div>
                <Link to="#" className="navUserProfileWapper">
                    <div className="navUserProfile">
                        <img src={require('../../assets/icons/user.png')} alt="User Profile"/>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default NavBar