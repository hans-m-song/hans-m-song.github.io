import React, {Component} from 'react';
import {profile} from '../Info';
import {SocialMedia} from './SocialMedia';
import mugshot from '../media/mugshot.jpg';

export class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        <p className="header">About Me</p>
        <div className="row">
          <div className="profile-image-container">
            <img
              className="profile-image"
              //src={profile.image}
              src={mugshot}
              alt={profile.name}
            />
          </div>
          <div className="profile-details-container">
            <p className="profile-name title">{profile.name}</p>
            <p className="profile-bio subtitle">{profile.bio}</p>
            {/* <p className="profile-resume">{profile.resume}</p> */}
          </div>
          <SocialMedia />
        </div>
      </div>
    );
  }
}
