import { Component } from 'react';

class CarTitle extends Component {
    render() {
        return <div className='car_title' >
            <span className='car_title_red'>/</span>{this.props.title}
        </div>

    }
}

export default CarTitle;