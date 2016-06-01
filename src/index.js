import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar/search_bar';
import EventsTable from './components/events_table/events_table';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <SearchBar/>
                <EventsTable/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));