import React, {Component} from 'react';
import Gallery from '../components/Gallery/Gallery';
import Api from './fakeApi';
import axios from 'axios';

class Pages extends Component {
    constructor(props){
        super(props);
        this.state ={persons:[]};
    };
    
    componentDidMount () {
       axios.get('http://localhost:3000/persons')
            .then(response => this.setState({ persons: response.data}));
      
        // const api = new Api();
        // const persons = api.persons;
        // let personsNew = [
        //     ...this.state.persons
        // ];
        // personsNew = personsFake;
        // console.log(persons);

        // this.setState({ persons: personsNew});
    }


    render(){
        console.log(this.state.persons);

        return(
           <Gallery  list={this.state.persons}/>
       )
    }
};
export default Pages;

