import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadFromApi } from "../actions";
import { withRouter } from 'react-router-dom';
import { Range } from 'rc-slider';
import '../style/Filter.css';
import 'rc-slider/assets/index.css';

export class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            year_start: 1920,
            year_end: 2019,
            audio: '',
            video: '',
            image: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAudio = this.handleAudio.bind(this);
        this.handleImage = this.handleImage.bind(this);
        this.handleVideo = this.handleVideo.bind(this);
        this.handleOnRange = this.handleOnRange.bind(this);
    }
    handleChange(event) {
        this.setState({
            value: event.target.value,
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        var dates = `&year_start=${this.state.year_start}&year_end=${this.state.year_end}`
        var hastypes = !!(this.state.audio||this.state.video||this.state.image);
        var types = (hastypes?'&media_type=':'')+this.state.audio+this.state.video+this.state.image;
        var searchText = this.state.value+types+dates;
        this.props.history.push(`/search/${searchText}`);
    }
    handleAudio(event) {
        if(event.target.checked) {
            this.setState({
                audio: event.target.value+','
            });
        }
        else {
            this.setState({audio:''});
        }
    }
    handleImage(event) {
        if(event.target.checked) {
            this.setState({
                image: event.target.value
            });
        }
        else {
            this.setState({image:''});
        }
    }
    handleVideo(event) {
        if(event.target.checked) {
            this.setState({
                video: event.target.value+','
            });
        }
        else {
            this.setState({video:''});
        }
    }
    handleOnRange(event) {
        this.setState({
            year_start: event[0],
            year_end: event[1]
        });     
    }
    render() {
        return (
            <div className='Filter'>
                <h1>NASA SEARCH</h1>
                <form onSubmit={this.handleSubmit}>
                    <input className='text-input' type="text" value={this.state.value} onChange={this.handleChange} />
                    <input className='submit' type='submit' value='Submit' onChange={this.handleChange} />

                    <label for="audio">Audio</label>
                    <input className='checkbox' type='checkbox' name="audio" value="audio" onChange={this.handleAudio}/>
                    <label for="image">Image</label>
                    <input className='checkbox' type='checkbox' name="image" value="image" onChange={this.handleImage}/>
                    <label for="video">Video</label>
                    <input className='checkbox' type='checkbox' name="video" value="video" onChange={this.handleVideo}/>

                    <div>
                        <Range min={1920} defaultValue={[1900,2019]} max={2019} onChange={this.handleOnRange}/>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = { loadFromApi };
export const FilterContainer = withRouter(connect(null, mapDispatchToProps)(Filter));