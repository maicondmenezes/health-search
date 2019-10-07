import React from 'react';

 const ProfileCard = (props) => {
    return (
        <div className="col-12 col-sm-4" style={{ paddingTop: '7px' }}>
            <div className="card">
                <img className="card-img-top rounded mx-auto d-block" 
                style={{ paddingTop: '5px', width: '100px', heigt: '100px' }} 
                src={props.photo} 
                alt="Card image cap" />
                <div className="card-block">
                    <h4 className="card-title">{props.name}</h4>
                    <p className="card-text">{props.bio}</p>
                    <button className="btn btn-primary" onClick={props.action}>{props.txtBtn}</button>
                </div>
            </div>
        </div>        
    );
};
export default ProfileCard;