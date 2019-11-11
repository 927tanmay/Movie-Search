import React,{Component} from 'react';
import Navbar from './Navbar';
import Landing from './landing';
import Footer from './Footer';
 
class Main extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <Landing {...this.props}/>
                <Footer/>

            </div>
        )
    }
}

export default Main;