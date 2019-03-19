import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component{
    render() {
        return;
    }
}


const mapStateToProps =  state => {
    console.log(state);
    return { libraries: state.libraries };
};

// takes global state object and map it providin them as props. => mapStateToProps 

export default connect(mapStateToProps)(LibraryList);