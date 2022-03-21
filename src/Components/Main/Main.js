import React, { Component } from 'react';
import styles from './Main.css';
    
class Main extends Component {
    render() {
    	return  <div className='main'>
                    <h3></h3>
                    {this.props.children}
                </div>;
    }
}
export default Main