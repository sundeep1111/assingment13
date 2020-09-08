import React, { Component } from 'react'
import classes from '../Vediolist/Vediolist.module.css'
import axios from 'axios'
import VideoCard from '../VideoCard/VideoCard'
class Vediolist extends Component {
    state={
        data:[]
    }
    componentDidMount(){
        axios.get('https://5d76bf96515d1a0014085cf9.mockapi.io/playlist')
        .then(response=>{
            this.setState({
                data:[...response.data]
            })
            
        })
        .catch(err=>{
            console.log('error')
        })
    }
    render() {
        const data = this.state.data
        return (
            <div className={classes.playlistwrapper}>
               {
                   data.map((item)=>{
                   return <VideoCard key={item.id} id={item.id} nowPlaying={this.props.videoId} thumbnail={item.thumbnail} title={item.title}/>
                   })
               } 
            </div>
        )
    }
}

export default Vediolist
