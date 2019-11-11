import React,{Component} from 'react';
import SearchBar from './searchbar';

class Landing extends Component{
    render(){
        return(
            <div className="container">
                <SearchBar {...this.props}/>
            </div>
        )
    }
}

export default Landing;