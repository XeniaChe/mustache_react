import React, {Component} from 'react';
import Gallery from '../components/Gallery/Gallery';

class Pages extends Component {
    constructor(props){
        super(props);
        this.state = {persons:
            [
                {photo:'./images/mustache1.jpg', id: '11'},
                {photo:'./images/mustache2.jpg', id: '12'},
                {photo:'./images/mustache3.jpg', id: '13'},
                {photo:'./images/mustache4.jpg', id: '14'},
                {photo:'./images/mustache5.jpg', id: '15'},
                {photo:'./images/mustache6.jpg', id: '16'},
                {photo:'./images/mustache7.jpg', id: '17'},
                {photo:'./images/mustache8.jpg', id: '18'},
                {photo:'./images/mustache9.jpg', id: '19'}
            ]
        };
    }

    render(){
       return(
           <Gallery list={this.state.persons}/>
       )
    }
};
export default Pages;