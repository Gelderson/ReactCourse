import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '', term2: '' };
    }
    render() {
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={event => this.setState({ term2: event.target.value, term: event.target.value })}
                />
            </div>
        );
    }
}
export default SearchBar;