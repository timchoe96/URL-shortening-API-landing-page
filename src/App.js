import React, {Component} from 'react';
import Navigation from './Navigation';
import Heading from './Heading';
import Submit from './Submit';
import Bottom from './Bottom';


class App  extends Component {
    constructor(){
        super();
        this.state={
            link:'',
            shrinks:[],
            error:'none',
            border:'',
            class:'',
          
        };
    }

    linkInput = (event) => {
        const {value} = event.target;
        this.setState({link: value})
    }

    submitClick = () => {
        if(this.state.link.length === 0){
            this.setState({error:'initial',border:'hsl(0, 87%, 67%)',class:'input'})
        }else{
            let data = {url:this.state.link}
            this.setState({error:'none',border:'',class:''})
            fetch('https://rel.ink/api/links/',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(data)
            }).then(res => res.json()).then(data=>this.setState(prevState =>({
                shrinks: [...prevState.shrinks,{url:this.state.link,short:`https://rel.ink/${data.hashid}`}]
            })))
        }
    }


    render(){
        return(
            <div>
                <Navigation/>
                <Heading/>
                <Submit typing={this.linkInput} submit={this.submitClick} color={this.state.border} errorDisplay={this.state.error} name={this.state.class} array={this.state.shrinks}/>
                <Bottom/>
            </div>
        )
    }
}
   


export default App; 