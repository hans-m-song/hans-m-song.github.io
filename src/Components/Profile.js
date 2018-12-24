import React, { Component } from 'react'
import { profile } from '../Info'

export class Profile extends Component {
    render() {
        return (
            <div className="profile-container">
                <div className="row">
                    <div className="profile-image-container">
                        <img 
                            className="profile-image" 
                            src={profile.image} 
                            alt={profile.name}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="profile-details-container">
                        <p className="profile-title title">About Me</p>
                        <p className="profile-name">{profile.name}</p>
                        <p className="profile-bio">{profile.bio}</p>
                        <p className="profile-resume">{profile.resume}</p>
                    </div>
                </div>
            </div>
        );
    }
}