import React, { Component} from 'react';
import { ListItem } from './ListItem';
import { connect } from 'react-redux';
import { loadVideoFromApi } from "./actions";

export class ItemsList extends Component {
    generateObjects() {
        var src;
        var title;
        var data = this.props.data;
        var type;
        return data.map(element => { 
            type=element.data[0].media_type;
            if(type === 'image') {
                src = element.links[0].href;
                title = element.data[0].title;
                return <ListItem src={src} title={title}></ListItem>;
            }
            else if(type === 'video') {
                title = element.data[0].title;
                src= element.href;
                this.props.loadVideoFromApi(src);
                return <p>{this.props.video}</p>
            }
            else if(type === 'audio') {
                console.log('audio');
            }
            return 0;
        });
    }
    render(){
        return(
            <div className="ItemsList">
                {this.generateObjects()}
            </div>
        );
    }
}
const mapStateToProps = state => {
    console.log(state);
    return {
        video: state.video
    };
}
const mapDispatchToProps = { loadVideoFromApi };
export const ItemsListContainer = connect(mapStateToProps,mapDispatchToProps)(ItemsList);