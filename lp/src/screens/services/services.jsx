import React, { Component } from 'react';
import Button from '../../components/Button/Button';
import CarTitle from '../../components/car_title/car_title';

import './style.css';
import image from './images/image.png';

class Services extends Component {
    render() {
        return <section id={'Services'} className="Services">
            <div className='container'>
                <CarTitle title='Услуги' />
                <div className='Services-wrapper '>
                    <div className='Services-bloc-text'>
                        <Text title='Услуги телекоммуникаций' texts={['Предоставление доступа к сети интернет', 'Предоставление к каналам передачи данных L2, L3']} />
                        <Text title='Подключения по' texts={['Волоконно-оптические линии связи', 'Беспроводные технологии (WLL, радио-релейные линии)']} />
                        <Text title='Качество и сервис' texts={['Гарантированный, симметричный канал', 'Техническая поддержка 24/7', 'Качество сервиса и уровень обслуживания регулируется SLA на уровне 95%']} />
                    </div>
                    <img className='Services-img' src={image} />
                </div>
                <div className='Services-buttons'>
                    <Button title='Контакты' />
                </div>

            </div>
        </section>

    }
}


class Text extends Component {
    render() {
        return <div className='Services-margin-p '>
            <div className='name_text Services-margin-text'>{this.props.title}</div>
            {this.props.texts.map(text => (
                <div className='main_text'>—{text}</div>
            ))}
        </div>

    }
}


export default Services;