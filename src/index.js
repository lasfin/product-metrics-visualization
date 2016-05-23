import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>text node</div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));