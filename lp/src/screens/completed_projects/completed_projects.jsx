import React, { Component } from 'react';
import CarTitle from '../../components/car_title/car_title';

import './style.css';
import img1 from './images/img_1.png';
import img2 from './images/img_2.png';
import img3 from './images/img_3.png';
import img4 from './images/img_4.png';
import img5 from './images/img_5.png';
import img6 from './images/img_6.png';
import img7 from './images/img_7.png';
import img8 from './images/img_8.png';

class CompletedProjects extends Component {
    render() {
        var cards = [img1, img2, img3, img4, img5, img6, img7, img8];
        return <section id={'CompletedProjects'} className="CompletedProjects">
            <div className='container'>
                <CarTitle title='Реализованные проекты' />
                <div className='CompletedProjects-wrapper'>
                    {cards.map(card => (
                        <img className='CompletedProjects-card' src={card} />
                    ))}
                </div>
            </div>
        </section>
    }
}


export default CompletedProjects;