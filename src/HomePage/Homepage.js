import React, { Component } from 'react'
import classes from '../HomePage/HomePage.module.css'
import {Link} from 'react-router-dom'
import WatchVedio from '../WatchVedio/WatchVedio'
import Vediolist from '../Vediolist/Vediolist'
class Homepage extends Component {
    render() {
        return (
            <div className={classes.HomepageWrap}>
             <Link to='/' className={classes.backtohomepage }>Back to Home</Link>
             <div className={classes.mainheading}>The Video Player</div> 
             <div className={classes.Homepagesection}>
              <WatchVedio videoId={this.props.match.params.vId}/>
              <Vediolist videoId={this.props.match.params.vId}/>   
            </div>  
            </div>
        )
    }
}

export default Homepage
