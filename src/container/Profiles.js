import React, { Component } from 'react';
import axios from 'axios'; 
import ProfileCard from '../ui/ProfileCard';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

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
        const theme = createMuiTheme({
            palette: {
              primary: {
                light: '#56c8d8',
                main: '#0097a7',
                dark: '#006978',
                contrastText: '#000000',
              },
              secondary: {
                light: '#62727b',
                main: '#37474f',
                dark: '#102027',
                contrastText: '#ffffff',
              },
            },
          });
        return(
            <ThemeProvider  theme={theme}>
                <Grid container className="flexGrow:1" spacing={2} color="mainSecondary">
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
            </ThemeProvider >
        )      
    }
}