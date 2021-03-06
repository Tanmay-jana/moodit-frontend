import React, { Component } from 'react'
import './Section6.css'
import bitmap from '../../assets/Bitmap1.png';
import vmLogo from '../../assets/VM-Logo-black.png';
import googleLogo from '../../assets/Google1.png';
import ukLogo from '../../assets/Uk1.png';
import segmentLogo from '../../assets/Segment1.png';
import fbLogo from '../../assets/FB1.png';
import websummitLogo from '../../assets/websummit-logo1.png'

export default class Section6 extends Component {
    render() {
        return (
            <div className = "section6-container">
                <p className = "credibility-header">Recognised and supported by</p>
                <div className = "logo-container">
                <img className = "logo-img" src = {bitmap} alt = "bitmap" />
                <img className = "logo-img big-logo" src = {vmLogo} alt = "vmLogo" />
                <img className = "logo-img" src = {googleLogo} alt = "google" />
                <img className = "logo-img" src = {ukLogo} alt = "uk" />
                <img className = "logo-img big-logo" src = {segmentLogo} alt = "segment_logo" />
                <img className = "logo-img" src = {fbLogo} alt = "fb" />
                <img className = "logo-img" src = {websummitLogo} alt = "websummit" />
                </div>
            </div>
        )
    }
}
