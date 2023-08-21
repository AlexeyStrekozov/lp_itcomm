import { Component } from 'react';
import './style.css';
import CarTitle from '../../components/car_title/car_title';
import image_1 from './images/image_1.png';
import image_2 from './images/image_2.png';
import image_3 from './images/image_3.png';

class AboutUs extends Component {
    render() {
        return <section id='AboutUs' className='AboutUs-main container'>
            <CarTitle title='О нас' />
            <div className='AboutUs-wrapper'>
                <div className='AboutUs-image'>
                    <div className='AboutUs-image-up'>
                        <img className='AboutUs-image-up-item' src={image_1} />
                    </div>
                    <div className='AboutUs-image-down'>
                        <img className='AboutUs-image-down-item AboutUs-margin-right' src={image_2} />
                        <img className='AboutUs-image-down-item' src={image_3} />

                    </div>
                </div>
                <div>
                    <div className=' AboutUs-margin-bottom name_text'>IT-COMM</div>
                    <p className='main_text'>Объединение профессионалов с большим опытом работы в сфере телекоммуникационных услуг и услуг системной интеграции.</p>
                    <p className='main_text'>Предоставление услуг телекоммуникаций и системной интеграции охватывает широкий спектр деятельности, связанный с обеспечением связи и интеграцией различных информационных технологий</p>
                </div>
            </div>
        </section>;
    }
}

export default AboutUs;