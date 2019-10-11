import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import NotListedLocationTwoToneIcon from '@material-ui/icons/NotListedLocationTwoTone';
import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EventIcon from '@material-ui/icons/Event';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  card: {
    width: 345,
    background: 'linear-gradient(60deg, #0097a7 25%, #bbdefb 90%)',
    paddingTop: '7px'    
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  textField: {
      shrink: true,
      readOnly: true,         
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function ProfileCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const mailLink = 'mailto:' + props.email;
  const fullAddress = props.addressName +', '+ props.addressNumber +' - '+ props.addressComplement+'\n'+
                      'Cep: '+props.cep+' - '+props.district+' - '+props.state.toUpperCase();
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
  return (
    <ThemeProvider  theme={theme}>
      <Card className={classes.card}>
        <CardHeader
          title={props.name}
          subheader={props.specializationName}
        />
        <CardMedia
          className={classes.media}
          image={props.profileImg}        
        />
        <CardContent>
          <Typography variant="body2" color="mainSecondary" component="p">
            {props.description}<br/>
            {props.cr}<br/>
            Telefone: {props.phoneNumber}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="Localização" onClick={() => window.open(props.addressLink)} >
            <NotListedLocationTwoToneIcon />
          </IconButton>
          <IconButton aria-label="Email" onClick={() => window.open(mailLink)}>
            <EmailTwoToneIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="Perfil Completo"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <TextField
              id="standard-read-only-input"
              label="Endereço: "
              multiline
              rows="2"
              fullWidth
              defaultValue={fullAddress}
              className={classes.textField}
              margin="normal"
            />
            <List aria-label="Serviços">
              {props.services.map((service) => (
                  <ListItem button key={service.id}>
                    <ListItemIcon> <EventIcon /> </ListItemIcon>
                    <ListItemText primary={service.name+': ' + service.description+'\n'+service.duration+'min. | R$ '+service.value} />
                  </ListItem>
              ))}
            </List>
          </CardContent>
        </Collapse>
      </Card>
    </ThemeProvider>
  );
}