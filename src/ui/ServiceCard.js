import React from 'react';

const ServiceCard = (props) => {
    return (
        <div className="col-12 col-sm-4" style={{ paddingTop: '7px' }}>
            <div className="card-header">{props.name}</div>
            <div className="card-body">
                <h5 className="card-title">{props.description}</h5>
                <h5 className="card-title">{props.value}</h5>
                <h5 className="card-title">{props.duration}</h5>
                <a href="#" className="btn btn-primary">Verificar Agenda</a>
                <a href="#" className="btn btn-secondary">Agendar Consulta</a>
            </div>
        </div>           
    );
};
export default ServiceCard;