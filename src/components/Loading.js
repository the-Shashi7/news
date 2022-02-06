import React, { Component } from 'react';
export class Loading extends Component {
    render() {
        return (
            <div >
                    <div className="spinner-grow text-primary mx-2" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-secondary mx-2" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-success mx-2" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-danger mx-2" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-warning mx-2" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-info mx-2" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-light mx-2" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
            </div>
        )
    }
}

export default Loading
