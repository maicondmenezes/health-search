import React, { Component } from 'react';
import ServiceCard from './ServiceCard';

const ProfileForm  = (props) => {
    const service = props.service;
    return (
        <form>
            <div className="form-row align-items-center">
                Dados pessoais:
                <div className="col-auto">
                    <img className="card-img-top" src={props.photo} alt="Imagem de capa do card" />                    
                </div>
                <div className="col-auto">                    
                    <label className="sr-only" for="inlineFormInput">Nome</label>
                    <input type="text" className="form-control mb-2" id="inlineFormInput">{props.nome}</input>
                    <label className="sr-only" >{props.cr}</label>                  
                    <label className="sr-only" >{props.SpecializationName}</label>
                    <label className="sr-only" >{props.description}</label>                    
                    <label className="sr-only" for="inlineFormInput">Email</label>
                    <input type="text" className="form-control mb-2" id="inlineFormInput">{props.email}</input>
                    <label className="sr-only" for="inlineFormInput">Telefone</label>
                    <input type="text" className="form-control mb-2" id="inlineFormInput">{props.telefone}</input>                                    
                </div>                                
            </div>
            <div className="form-row align-items-center">
                Endereço:
                <div className="col-auto">
                    <div id="map-container-google-3" className="z-depth-1-half map-container-3">
                        {props.addressLink}
                        {/* <iframe src={props.addressLink} frameborder="0" style="border:0" allowfullscreen /> */}
                    </div>                    
                </div>                
                <div className="col-auto">
                    <label className="sr-only">{props.addressName}</label>
                    <label className="sr-only">{props.addressNumber}</label>
                    <label className="sr-only">{props.addressComplement}</label>
                    <label className="sr-only">{props.district}</label>
                    <label className="sr-only">{props.city}</label>
                    <label className="sr-only">{props.state}</label>
                    <label className="sr-only">{props.cep}</label>                                       
                </div>
            </div>
            <div className="form-row align-items-center">
                Serviços:
                {React.Children.map((service) => (
                    <ServiceCard 
                        name= {service.name}
                        description= {service.description}
                        value= {service.value}
                        duration= {service.duration} 
                    />
                ))}
            </div>
        </form>
    );
};
export default ProfileForm;