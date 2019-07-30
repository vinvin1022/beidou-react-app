import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: '#1e57a0',
    padding: 0,
    color: '#fff',
    margin: '10px 0',
    borderRadius: '5px',
    '& .MuiTypography-root': {
      color: '#fff',
      fontSize: '0.875rem'
    }
  },
  inline: {
    display: 'inline',
  },
  dividerLine: {
    borderBottom: '1px solid #2d67af',
    '&:first-child': {
      borderBottom: 'none'
    }
  },
  listItemSecondaryAction: {
    '& .MuiIconButton-label': {
      color: '#ff8f45',
      fontSize: '13px',

    },

    '&.up .MuiIconButton-label': {
      color: '#10f3b0'
    },
    '&.down .MuiIconButton-label': {
      color: '#ff8f45'
    }
  },
  MuiAvatarImg: {
    '& .MuiAvatar-img': {
      width: 'auto'
    },
    '& .MuiAvatar-root': {
      overflow: 'initial'
    }
  },
  avatar: {
    backgroundColor: theme['c#2d67af'],
    fontSize: '1rem'
  }

}));


function CustomAvatar({ index }) {
  const classes = useStyles();
  let ele;
  switch (index) {
    case 0:
      ele = <Avatar alt="PerformanceRanking" src={require('../../assets/3@2x1.png')} />
      break;
    case 1:
      ele = <Avatar alt="PerformanceRanking" src={require('../../assets/4@2x2.png')} />
      break;
    case 2:
      ele = <Avatar alt="PerformanceRanking" src={require('../../assets/7@2x3.png')} />
      break;
    default:
      ele = <Avatar className={classes.avatar}>{index + 3}</Avatar>
      break;
  }
  return ele

}

export default function RankingList(props) {
  const classes = useStyles();
  const { ranks } = props;

  return (
    <List className={classes.root}>
      {ranks.map((item, index) => (
        <React.Fragment key={item.showName}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar className={classes.MuiAvatarImg}>
              <CustomAvatar index={index}></CustomAvatar>
            </ListItemAvatar>
            <ListItemText
              primary={item.showName}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                  </Typography>
                  {item.showMoneya}
                </React.Fragment>
              }
            />
            <ListItemSecondaryAction className={`${item.showRatea !== '--' ? (item.showRatea > 0 ? 'up' : 'down') : ''} ${classes.listItemSecondaryAction}`}>
              <IconButton edge="end">
                {item.showRatea !== '--' && <>{item.showRatea}%</>}
                {item.showRatea === '--' && <>{item.showRatea}</>}
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider className={classes.dividerLine} component="li" />
        </ React.Fragment>
      ))}
    </List>
  );
}
