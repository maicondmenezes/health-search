import React, { Component } from 'react';
export default class Home extends Component {
    render() {
        return (
            <div className="container text-center">
                <div className="row">
                    <div className="card">
                        <img className="card-img-top rounded mx-auto d-block" 
                        style={{ paddingTop: '7px'}}
                        src="https://cdn1.iconfinder.com/data/icons/doctor-2/128/33-512.png" 
                        alt="Card image cap"/>
                            <div className="card-block">
                                <p className="card-text">Profissionais de saude na sua regiao</p>
                            </div>
                        </div>
                    </div>
                </div>
                );
            }
}