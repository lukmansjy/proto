import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

import CardNews from '../../components/molecules/CardNews'
import { Link } from 'react-router-dom'

const SectionNews = ()=> {
    return(
        <div className="containerSection">
            <Container>
                <div className="headerSection">
                    <h3>Berita</h3>
                    <p>Selalu ikuti kami untuk mendapatkan berita terbaru seputar program Diaspora Peduli</p>
                </div>
                <Row>
                    <Col xs="12" lg="3">
                        <CardNews/>
                    </Col>
                    <Col xs="12" lg="3">
                        <CardNews/>
                    </Col>
                    <Col xs="12" lg="3">
                        <CardNews/>
                    </Col>
                    <Col xs="12" lg="3">
                        <CardNews/>
                    </Col>
                </Row>

                <div className="wrapperSectionMore">
                    <Link to="#" className="sectionMore">Tampilkan Lebih Banyak</Link>
                </div>
        </Container>
        </div>
    )
}

export default SectionNews


