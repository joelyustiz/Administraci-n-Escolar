import React, { Component } from 'react'
import HomeLayout from '../components/home-layout'
import Carousel from '../../widgets/containers/carousel'
import '../../widgets/components/carousel.css'
import { Col, Row } from 'reactstrap'
import CardArticle from '../../widgets/components/card'
class Home extends Component {
    render(){
        return(
            <HomeLayout>
                <div className="CarouselT">
                    <Carousel></Carousel> 
                </div>
                <div className="CardArticle">
                 <CardArticle></CardArticle>
                </div>
               
            </HomeLayout>
        )
    }
}

export default Home;