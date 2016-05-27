import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: ''
        }
    }

    render() {
        return (
            <div className="searchBar">
                <input type="text" className="searchBar-input"
                    value = {this.state.query}
                />
            </div>
        )
    }
}

export default SearchBar;