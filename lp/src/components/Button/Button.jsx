import { Component } from 'react';
import './style.css';

class Button extends Component {
    render() {
        return <div className='Button-main'>
            <div className='Button-wrap'>
                <div className='Button-title'>{this.props.title}</div>
                <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="41" rx="20" fill="#AB0B0A" />
                    <path d="M20.75 13C20.75 12.5858 20.4142 12.25 20 12.25C19.5858 12.25 19.25 12.5858 19.25 13L20.75 13ZM19.4697 28.5303C19.7626 28.8232 20.2374 28.8232 20.5303 28.5303L25.3033 23.7574C25.5962 23.4645 25.5962 22.9896 25.3033 22.6967C25.0104 22.4038 24.5355 22.4038 24.2426 22.6967L20 26.9393L15.7574 22.6967C15.4645 22.4038 14.9896 22.4038 14.6967 22.6967C14.4038 22.9896 14.4038 23.4645 14.6967 23.7574L19.4697 28.5303ZM19.25 13L19.25 28L20.75 28L20.75 13L19.25 13Z" fill="white" />
                </svg>
            </div>
        </div>;
    }
}

export default Button;