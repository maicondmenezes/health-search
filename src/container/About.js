import React, {Component} from 'react';
import ProfileCard from '../ui/ProfileCard';
export default class Home extends Component{

    myProfile = {
        photo: "https://0.academia-photos.com/27296768/7752508/8690986/s200_maicon.de_menezes_oliveira.jpg",
        name: "Maicon de Menezes",
        bio: "Graduando em Engenharia da Computacao",
        action:  () => alert('Clicou!'),
        txtBtn: "Ver perfil",
    }
    
    render() {        
        return(
            <div className="container text-center">
                <div className="row">
                    <ProfileCard {...this.myProfile} />
                </div>
            </div>
        );
    }
}