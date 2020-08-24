import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import '../App.css';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function SimplePopover(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const {resume} = props;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
        <p className="intro" style={{color:'#FFFFFF'}}>{resume}</p>
      <Button className="btn"  aria-describedby={id} variant="outlined" onClick={handleClick}>
        <EmailIcon style={{ color:'#FFFFFF', fontSize: 20, marginRight: '8px' }}/> <a style={{ color: "#FFFFFF", fontWeight: '300'  }} href="mailto:Surendrareddy628@gmail.com" class="btn button1">Drop me an Email </a>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}>Surendrareddy628@gmail.com</Typography>
      </Popover>
    </div>
    
  );
}
