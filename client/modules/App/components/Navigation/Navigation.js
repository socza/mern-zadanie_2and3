import React, { PropTypes } from 'react';
import { Link } from "react-router";
import { FormattedMessage } from 'react-intl';
import styles from './Navigation.css';


const Navigation = (props, context) => {
	return (
  		<div className={styles.nav}>
    		<span className={styles.link}><Link to='/home'><FormattedMessage id='home'/></Link></span>
    		<span className={styles.link}><Link to='/'><FormattedMessage id='posts'/></Link></span>
    		<span className={styles.link}><Link to='/about'><FormattedMessage id='about'/></Link></span>
  		</div>
	);
};




Navigation.propTypes = {
};

export default Navigation;
