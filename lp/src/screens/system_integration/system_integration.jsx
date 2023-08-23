import React, { Component } from 'react';
import Button from '../../components/Button/Button';
import CarTitle from '../../components/car_title/car_title';

import './style.css';
import bloc1 from './images/block_1.png';
import bloc2 from './images/block_2.png';
import bloc3 from './images/block_3.png';
import bloc4 from './images/block_4.png';
import bloc5 from './images/block_5.png';
import bloc6 from './images/block_6.png';

class SystemIntegration extends Component {
    render() {
        var cards = [bloc1, bloc2, bloc3, bloc4, bloc5, bloc6]
        return <section id={'SystemIntegration'} className="SystemIntegration">
            <div className='container'>
                <CarTitle title='Cистемная интеграция' />
                <div className='SystemIntegration-wrapper'>
                    {cards.map(card => (
                        <img className='SystemIntegration-card' src={card} />
                    ))}
                </div>
                <div className='SystemIntegration-buttons'>
                    <Button link="#Contact" title='Контакты' />
                </div>
            </div>
        </section>
    }
}


export default SystemIntegration;