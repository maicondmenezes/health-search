import React, { Component } from 'react';
import axios from 'axios'; 
import ProfileCard from '../ui/ProfileCard';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
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
            <Grid container className="flexGrow:1" spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={2}>
                        {profilesData.map((profile) => (
                            <Grid key={profile.id} item>
                                <ProfileCard
                                    services = {profile.Services}
                                    name = {profile.User.name}
                                    specializationName = {profile.Specialization.name}
                                    profileImg = {profile.User.profileImg}
                                    description = {profile.description}
                                    cr = {profile.cr}
                                    phoneNumber = {profile.User.phoneNumber}
                                    email = {profile.User.email}
                                    addressLink = {profile.addressLink}
                                    addressName = {profile.addressName}
                                    addressNumber = {profile.addressNumber}
                                    addressComplement = {profile.addressComplement}
                                    cep = {profile.cep}
                                    district = {profile.district}
                                    city = {profile.city}
                                    state = {profile.state}
                                />
                            </Grid>
                        ))}
                    </Grid>            
                </Grid>
            </Grid>
        )      
    }
}