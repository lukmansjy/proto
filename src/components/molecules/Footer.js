import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import LinkFooterImage from '../../components/atoms/LinkFooterImage'

const Footer = ()=> {
    return(
        <div className="fotter">
            <div className="containerSection">
                <Container>
                    <Row>
                        <Col xs="6" lg="2">
                            <div>
                                <img src={require('../../assets/icons/logo-white.png')} alt="Brand" className="logoFooter"/>
                                <p className="footerCopyRight">©2020 - Diaspora Peduli</p>
                            </div>
                        </Col>
                        <Col xs="6" lg="2">
                            <div className="wrapperFotterMenu">
                                <Link to="#" className="linkFooter">Tentang Kami</Link>
                                <Link to="#" className="linkFooter">Berita</Link>
                                <Link to="#" className="linkFooter">Galeri</Link>
                                <Link to="#" className="linkFooter">Kontak Kami</Link>
                            </div>
                        </Col>
                        <Col xs="6" lg="2">
                            <div className="wrapperFotterMenu">
                                <Link to="#" className="linkFooter">Masuk</Link>
                                <Link to="#" className="linkFooter">Syarat Donatur</Link>
                            </div>
                        </Col>
                        <Col xs="6" lg="2">
                            <div className="wrapperFotterMenu">
                                <Link to="#" className="linkFooter">Donasi Sekarang</Link>
                            </div>
                        </Col>
                        <Col xs="6" lg="2">
                            <div className="wrapperFotterMenu">
                                <p className="footerLabel">Ikuti Kami</p>
                                
                                <LinkFooterImage label="Facebook" icon={require('../../assets/icons/facebook.png')}/>
                                <LinkFooterImage label="Instagram" icon={require('../../assets/icons/instagram.png')}/>
                                <LinkFooterImage label="Twitter" icon={require('../../assets/icons/twitter.png')}/>
                                <LinkFooterImage label="Youtube" icon={require('../../assets/icons/youtube.png')}/>
                                <LinkFooterImage label="Linkedin" icon={require('../../assets/icons/linkedin.png')}/>
                                
                            </div>
                        </Col>
                        <Col xs="6" lg="2">
                            <div className="wrapperFotterMenu footerDownload">
                                <Link to="#" className="footerLabel">Download Aplikasi</Link>
                                <img className="qrCodeImg" src={require('../../assets/images/qr-code.png')} alt="QR Code"/>
                                <div className="wrapperDownloadApp">
                                    <Link to="#">
                                        <img className="downloadApp" src={require('../../assets/images/download-on-play-store.png')} alt="Donwload On App Store"/>
                                    </Link>
                                    <Link to="#">
                                        <img className="downloadApp" src={require('../../assets/images/download-on-app-store.png')} alt="Donwload On App Store"/>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Footer
