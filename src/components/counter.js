import React from 'react';
import {connect} from "react-redux";
import * as actions from "../actions"

const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div className="jumbotron">
            <h2>{counter}</h2>
            <button onClick={dec} className="btn btn-primary btn-lg m-1">DEC</button>
            <button onClick={inc} className="btn btn-primary btn-lg m-1">INC</button>
            <button onClick={rnd} className="btn btn-primary btn-lg m-1">RND</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        counter:state
    }
}

export default connect(mapStateToProps, actions)(Counter);