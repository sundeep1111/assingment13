import React, { Component } from 'react'
import classes from '../WatchVedio/WatchVedio.module.css'
import axios from 'axios'
class WatchVedio extends Component {
    state={
        data:{},
        isLiked: false,
        isSaved: false
    }
    componentDidMount(){
     axios.get('https://5d76bf96515d1a0014085cf9.mockapi.io/video/1')
     .then(response=>{
         this.setState({
             data:{...response.data}
         })
     })
     .catch(err=>{
         console.log('error')
     })
    }
  componentDidUpdate(){
    const videoId = this.props.videoId; 
    if(videoId !== this.state.data.id) {
        axios.get(`https://5d76bf96515d1a0014085cf9.mockapi.io/video/${videoId}`)
        .then(response=>{
            this.setState({data:{...response.data}})
            window.scroll(0,0)
        })
        .catch(err => {
            console.log("Call Failed");
        })
    }
  }
    render() {
        const data = this.state.data
        return (
           <div className={classes.playerwrapper}>
                <div className={classes.playersection}>
                <div >
                    <iframe className={classes.videoplayer} id="" src={`https://player.vimeo.com/video/${data.vimeoId}`} frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

                    <div>
                        <div className={classes.videoactions}>
                            <p><span className={classes.viewscount}>98.4k</span> views</p>

                            <div>
                                <i className={data.isLiked === 'true' ? ["far", "fa-heart", classes.Yellow].join(' ') : null}></i>
                                <i class="far fa-comment-alt"></i>
                                <i className={data.isLiked === 'true' ? ["far", "fa-bookmark", classes.Yellow].join(' ') : null}></i>
                            </div>
                        </div>
        <h3 className={classes.videotitle}>{data.title}</h3>
                        <p className={classes.videodescription}>There is no other way but to commit wholeheartedly to a relationship with a croissant. We have all found ourselves at the mercy of its allure. Here, in another epic film by the uber talented Nathan Rodger, our Erin divulges her personal romance with The Croissant.</p>
                    </div>
                </div>
               </div>
            </div>
        )
    }
}

export default WatchVedio
