import React, { Component} from 'react';
import { connect } from 'react-redux';
import { searchItems } from "./actions";

export class Filter extends Component {
    constructor(props) {
        super(props);
        this.state={
            value: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.searchItems(this.state.value);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                <input type='submit' value='Submit' onChange={this.onChange}/>
            </form>
        );
    }
}
const mapDispatchToProps = { searchItems };
export const FilterContainer = connect(null,mapDispatchToProps)(Filter);