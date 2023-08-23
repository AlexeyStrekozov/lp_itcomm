import React from 'react';
import CarTitle from '../../components/car_title/car_title';

import './style.css';




export default function Contact() {
    return (
        <section id='Contact' className='Contact'>
            <div className='container'>
                <CarTitle title='Контакты' />
                <div className='container'>
                    <div className='Contact-wrapper'>
                        <div className='Contact-data'>
                            <div className='phone'>
                                <div className='button_text Contact-data-mr-b'>Телефон:</div>
                                <div className='link_text Contact-data-mr-b'><a href="tel:+77212507730" className='link_text'>+7 (7212) 50-77-30</a></div>
                                <div className='link_text'><a href="tel:+77473133484" className='link_text'>+7 (747) 313-34-84</a></div>
                            </div>
                            <div className='email Contact-data-mr-t'>
                                <div className='button_text Contact-data-mr-b'>E-mail:</div>
                                <div className='link_text Contact-data-mr-b'><a href="mailto:info@it-comm.kz" className='link_text'>info@it-comm.kz</a></div>
                            </div>
                            <div className='Contact-address button_text Contact-data-mr-t'>Караганда<br />ул. Мустафина 9/2, оф.210</div>
                            <a href="https://api.whatsapp.com/send?phone=77753205142" target='_blanket'>
                                <div className='Contact-Button-main'>
                                    <div className='Contact-Button-wrap'>
                                        <div className='Contact-Button-title'>WhatsApp</div>
                                        <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_406_105)">
                                                <path d="M0.917637 21.2429C0.916629 24.8557 1.868 28.3834 3.67703 31.4927L0.744629 42.1164L11.7016 39.2657C14.7321 40.9027 18.1276 41.7605 21.5781 41.7607H21.5872C32.978 41.7607 42.2504 32.5635 42.2552 21.259C42.2574 15.7812 40.1095 10.6302 36.2069 6.75486C32.305 2.87985 27.1156 0.744688 21.5864 0.742188C10.1942 0.742188 0.922508 9.93886 0.917805 21.2429" fill="url(#paint0_linear_406_105)" />
                                                <path d="M0.179727 21.236C0.178551 24.9788 1.16402 28.6327 3.03755 31.8533L0 42.8578L11.3498 39.905C14.4771 41.5968 17.998 42.4888 21.5808 42.4902H21.59C33.3895 42.4902 42.995 32.9622 43 21.253C43.002 15.5783 40.7768 10.2422 36.7348 6.228C32.6923 2.21433 27.3173 0.00233333 21.59 0C9.78855 0 0.18443 9.52667 0.179727 21.236ZM6.93879 31.2987L6.515 30.6312C4.73353 27.8205 3.79324 24.5725 3.79458 21.2373C3.79845 11.5048 11.781 3.58667 21.5968 3.58667C26.3503 3.58867 30.8176 5.42733 34.1776 8.76333C37.5375 12.0997 39.3863 16.5347 39.3851 21.2517C39.3808 30.9842 31.3981 38.9033 21.59 38.9033H21.583C18.3894 38.9017 15.2573 38.0507 12.5258 36.4425L11.8757 36.06L5.14052 37.8122L6.93879 31.2985V31.2987Z" fill="url(#paint1_linear_406_105)" />
                                                <path d="M16.2389 12.3582C15.8381 11.4744 15.4164 11.4566 15.0352 11.4411C14.7232 11.4277 14.3664 11.4287 14.01 11.4287C13.6532 11.4287 13.0735 11.5619 12.5836 12.0927C12.0931 12.6241 10.7111 13.9081 10.7111 16.5196C10.7111 19.1312 12.6281 21.6551 12.8953 22.0096C13.1629 22.3634 16.5962 27.8941 22.0337 30.0217C26.5527 31.7899 27.4723 31.4382 28.4531 31.3496C29.434 31.2612 31.6183 30.0659 32.0639 28.8264C32.5099 27.5871 32.5099 26.5247 32.3762 26.3027C32.2425 26.0816 31.8857 25.9487 31.3507 25.6834C30.8156 25.4179 28.1855 24.1337 27.6952 23.9566C27.2047 23.7796 26.8482 23.6912 26.4914 24.2227C26.1346 24.7534 25.1102 25.9487 24.7979 26.3027C24.486 26.6576 24.1738 26.7017 23.6389 26.4362C23.1036 26.1699 21.3808 25.6101 19.3368 23.8019C17.7464 22.3949 16.6728 20.6574 16.3607 20.1259C16.0486 19.5952 16.3273 19.3076 16.5955 19.0431C16.8359 18.8052 17.1307 18.4232 17.3984 18.1134C17.6651 17.8034 17.7542 17.5822 17.9325 17.2282C18.1111 16.8739 18.0217 16.5639 17.8882 16.2984C17.7542 16.0329 16.7146 13.4077 16.2389 12.3582Z" fill="white" />
                                            </g>
                                            <defs>
                                                <linearGradient id="paint0_linear_406_105" x1="2076.28" y1="4138.16" x2="2076.28" y2="0.742188" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#1FAF38" />
                                                    <stop offset="1" stop-color="#60D669" />
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_406_105" x1="2150" y1="4285.78" x2="2150" y2="0" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#F9F9F9" />
                                                    <stop offset="1" stop-color="white" />
                                                </linearGradient>
                                                <clipPath id="clip0_406_105">
                                                    <rect width="43" height="43" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                            </a>

                        </div>
                        <iframe className='Contact-map' src="https://yandex.ru/map-widget/v1/?um=constructor%3A2c304a933d8912f797beaa49049072b4d348766b82f1e195fefeb9d4fba25be2&amp;source=constructor" frameborder="0"></iframe>
                    </div>
                </div>

            </div>
        </section>
    )
}
