import React, {useEffect, useState}  from 'react';
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100%',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs(props) {
  const classes = useStyles()
  const [value, setValue] = useState(0)
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div className={classes.root} style={{marginTop:"1%"}}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="MediaRss" {...a11yProps(0)} />
        <Tab label="" {...a11yProps(1)} />
        <Tab label="" {...a11yProps(2)} />
        <Tab label="" {...a11yProps(3)} />
        <Tab label="" {...a11yProps(4)} />
        <Tab label="Designed by Hoyipyik" {...a11yProps(5)} />
        <Tab label="at BUPT" {...a11yProps(6)} />
      </Tabs>
    </div>
  );
}