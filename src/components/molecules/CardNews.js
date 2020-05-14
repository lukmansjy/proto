import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const CardNews = ()=> {
    return(
        <Fragment>
            <div className="newsThumbnailWrapper">
                <img src={require('../../assets/images/thumbnail-mews.png')} alt="Thumbnail"/>
            </div>
            <div className="newsThumbnailDesc">
                <h5>Surat pernyataan sikap IDN-Global atas aksi terori...</h5>
                <p>Pernyataan Sikap Indonesian Diaspora Network Global atas aksi terorisme di...</p>
                <Link to="#">Selengkapnya</Link>
            </div>
        </Fragment>
    )
}

export default CardNews
