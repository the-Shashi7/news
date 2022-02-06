import React, { Component } from 'react'

export class NewsItems extends Component {
    render() {
        let {title, description, imageUrl , newsUrl , timming} = this.props;
        return (
            <div className="my-3">
                <div className="card" style={{width: "20rem",height:"30rem" , borderRadius:"1rem",display:"inline-grid",margin: "auto"}}>
                    <img src={imageUrl} style={{width:"18rem",height:"10rem",borderRadius:"1rem",display:"content",margin: "auto"}} className="card-img-top" alt="..." ></img>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p style={{color:"red" , font:"sans"}} ><small><b>{new Date(timming).toGMTString()}</b></small></p>
                        <a href= {newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark btn-bg">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItems;