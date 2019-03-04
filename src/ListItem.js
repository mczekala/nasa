import React, {Component} from 'react';

export class ListItem extends Component {
    render(){
        return(
            <div className="ListItem">
                <img src={this.props.src}></img>
                <p>{this.props.title}</p>
            </div>
        );
    }
}