import React, { Component } from 'react'
import './image.css'

class İmage extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state={
            spanCount:0
        }
    }
    componentDidMount(){
        this.myRef.current.addEventListener('load',()=>{
            // console.log(this.myRef.current.clientHeight);
            const spanim= Math.round(this.myRef.current.clientHeight/5)+1;
            this.setState({spanCount:spanim});
        })
    }
    render() {
        const image = this.props.image;
        return (
            <img style={{gridRowEnd:`span ${this.state.spanCount}`}} ref={this.myRef} key={image.id} src={image.urls.small} alt='/'></img>
        )
    }
}
export default İmage;
