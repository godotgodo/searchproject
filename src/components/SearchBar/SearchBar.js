import React, { Component } from 'react'
import './searchbar.css'

class SearchBar extends Component {
    state={
        search:''
    }

    inputChanged=(event)=>{
        // console.log(event.target.value);
        this.setState({search:event.target.value});
    }

    searchİmage=()=>{
        // console.log(this.state.search);
        this.props.onSearchİmage(this.state.search);
    }

    render() {
        return (
            <div className="ui fluid category search">
                <div className="ui icon input">
                    <input className="prompt" type="text" placeholder="Search..." onKeyPress={(e)=>{
                        if(e.key==='Enter'){
                            this.searchİmage();
                        }
                    }} onChange={this.inputChanged} />
                    <button onClick={this.searchİmage}><i className="search icon"></i></button>
                </div>
            </div>
        )
    }
}


export default SearchBar;