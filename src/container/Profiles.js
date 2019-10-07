import React, { Component } from 'react';
import axios from 'axios'; 
import ProfileCard from '../ui/ProfileCard';
export default class Home extends Component {
    constructor(){
        super();
        this.state = {
            profilesData: [],
        }
    }

    componentDidMount() {
        axios.get('http://unieloo-sandbox.herokuapp.com/teste')
        .then(response => {
          console.log(response.data);
          this.setState({profilesData: response.data})
        })
        .catch(error => {
          console.log(error);
        });
      }

    render(){
        const {profilesData} = this.state;
        return(
            <div className="container text-center">
                <div className="row">
                {profilesData.map(function(profile){
                    <div className="col-md-12" key={profile.id}>
                        <ProfileCard 
                            photo = {profile.user.profileImg}
                            name = {profile.user.name}
                            bio = {profile.Specialization.name}
                            action = "() => hashHistory.push('/Home')"
                            txtBtn = "Perfil Completo" 
                        />
                    </div>
                })}
                </div>
            </div>              
        )      
    }
}