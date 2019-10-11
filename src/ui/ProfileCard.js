import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import NotListedLocationTwoToneIcon from '@material-ui/icons/NotListedLocationTwoTone';
import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
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
  const service = props.services;
  const mailLink = 'mailto:' + props.email;
  return (
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
        <Typography variant="body2" color="textSecondary" component="p">
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
          <Typography paragraph>Endereço:</Typography>
          <Typography paragraph>
            {props.addresName}<br/>
            {props.addresNumber}<br/>
            {props.addresComplement}<br/>
            {props.cep}<br/>
            {props.district}<br/>
            {props.city}<br/>
            {props.estate}<br/>
          </Typography>
          <Typography paragraph>Serviços:</Typography>
          <Typography paragraph>
            {React.Children.map((service) => (
                service.name,
                service.description,
                service.value,
                service.duration
            ))}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}