import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: '',
            focused: false
        }
    }

    render() {
        return (
            <div className="searchBar">
                <input type="text"
                       className="searchBar-input"
                       placeholder="Enter event name here"
                       value = {this.state.query}
                       onChange = {event => this.onInputChange(event.target.value)}
                       onBlur = {this.onFocusLost}
                       onFocus = {this.onFocusGet}
                />
                <div className="searchBar-border"></div>
            </div>
        )
    }

    onInputChange(query) {
        this.setState({
            query
        });
    }

    onFocusLost() {
        console.log('lost');
    }

    onFocusGet() {
        console.log('get');
    }
}

export default SearchBar;