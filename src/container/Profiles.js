import React, { Component } from 'react';
import axios from 'axios'; 
import ProfileCard from '../ui/ProfileCard';
import ProfileForm from '../ui/ProfileForm';
export default class Home extends Component {
    constructor(props){
        super();
        this.state = {
            profilesData: [],
        }
    }

    componentDidMount() {
        axios.get('http://unieloo-sandbox.herokuapp.com/teste')
        .then(response => {
        //   console.log(response.data.data);
          this.setState({profilesData: response.data.data})
        })
        .catch(error => {
        //   console.log(error);
        });
    }
    
    
    render(){
        const {profilesData} = this.state;
        return(
            <div className="container text-center">
                {profilesData.map((profile) => (
                    <div className="row" key={profile.id} >
                       <ProfileCard
                            photo = {profile.User.profileImg}
                            name = {profile.User.name}
                            bio = {profile.Specialization.name}
                            action = {() => alert('Perfil Completo em construção')}
                            txtBtn = "Perfil Completo"
                        />
                    </div>
                ))}
            </div>            
        )      
    }
}