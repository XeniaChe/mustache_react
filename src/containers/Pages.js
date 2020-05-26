import React, {Component} from 'react';
import Gallery from '../components/Gallery/Gallery';
import Api from './fakeApi';

class Pages extends Component {
    constructor(props){
        super(props);
        this.state ={persons:[]};
    };
       
    
    setStateHandler ()  {
       const api = new Api();
       const persons = api.persons;
        this.setState({
            persons:  [...persons]
        })
    };

    render(){
        window.addEventListener('load', this.setStateHandler.bind(this));
        return(
           <Gallery  list={this.state.persons}/>
       )
    }
};
export default Pages;

