// import React, {Component} from 'react';
// import Gallery from './Gallery/Gallery';
// import axios from 'axios';

// class Pages extends Component {
//     constructor(props){
//         super(props);
//         this.state ={persons:[]};
//     };
    
//     componentDidMount () {
//        axios.get('http://localhost:3000/persons')
//             .then(response => this.setState({ persons: response.data}))
//             .catch( console.log('Something went wrong'))
    
//     }


//     render(){
//         console.log(this.state.persons);

//         return(
//            <Gallery  list={this.state.persons}/>
//        )
//     }
// };
// export default Pages;

