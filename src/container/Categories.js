import React, {Component} from 'react';
import FullLineButton from '../ui/FullLineButton';
import {hashHistory} from 'react-router';
export default class Home extends Component{

    FullLineButtonDenti = {
        type: "btn btn-outline-success btn-lg btn-block",
        title: 'Dentistas',
        action: () => hashHistory.push('/Home')
    }
    FullLineButtonPsico = {
        type: "btn btn-outline-info btn-lg btn-block",
        title: 'Piscologistas',
        action: () => hashHistory.push('/Home')
    }
    FullLineButtonNutri = {
        type: "btn btn-outline-danger btn-lg btn-block",
        title: 'Nutricionistas',
        action: () => hashHistory.push('/Home')
    }

    render() {
        return(
            <div className="container text-center">
                <div className="row">
                    <FullLineButton {...this.FullLineButtonDenti} />
                    <FullLineButton {...this.FullLineButtonPsico} />
                    <FullLineButton {...this.FullLineButtonNutri} />
                </div>
            </div>
        );
    }
}