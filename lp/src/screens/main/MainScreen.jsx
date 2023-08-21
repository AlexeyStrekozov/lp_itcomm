import React, { Component } from 'react';

import logo from './image/logo.png';
import Button from '../../components/Button/Button';
import './style.css';

class MainScreen extends Component {
    render() {
        return <section className="Main">
            <header className="Main-header container">
                <img src={logo} />
                <nav className='Main-nav'>
                    <a href="#AboutUs" className='Main_nav_item button_text'>О нас</a>
                    <a href="#Services" className='Main_nav_item button_text'>Услуги</a>
                    <a href="#" className='Main_nav_item button_text'>Реализованные проекты</a>
                    <a href="#" className='Main_nav_item button_text'>Рекомендации</a>
                    <a href="#" className='Main_nav_item button_text'>Контакты</a>
                </nav>
            </header>
            <div className='container'>
                <div className='Main_title title'>
                    УСЛУГИ<br />
                    ТЕЛЕКОММУНИКАЦИЙ<br />
                    И СИСТЕМНОЙ ИНТЕГРАЦИИ
                </div>
                <Button title='IT-COMM' />
            </div>
        </section>

    }
}

export default MainScreen;