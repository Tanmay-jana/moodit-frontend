import React, { Component } from 'react'
import './MainFooter.css'

export default class MainFooter extends Component {
    render() {
        return (
            <footer className = "main-footer">
                <div className = "footer-left">
                    <a href = "/">Privacy & Terms</a>
                    <a href = "/">Contact Us</a>
                </div>
                <div className = "footer-right">
                    <p>All rights reserved. Moodit Limited. 2019</p>
                    <i className="fa fa-facebook"></i>
                    <i className="fa fa-instagram"></i>
                </div>
            </footer>
        )
    }
}
