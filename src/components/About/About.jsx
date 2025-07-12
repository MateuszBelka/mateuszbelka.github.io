import React, {Component} from 'react';

import './About.scss';


export default class About extends Component {
    componentDidMount() {
        document.title = "Mateusz Belka | About"
    }

    render() {
        return (
            <div className="about-me-parent">
                <div className="about-me-wrapper">
                    <div className="text-wrapper">
                        <div className="header">
                            <p>Hi, my name is</p>
                            <h1>Mateusz Belka</h1>
                            <p>or just call me Matt</p>
                        </div>
                        <div className="body">
                            <p>
                                AWS Cloud Engineer with a passion for building scalable, event-driven architectures in the cloud. 
                                I bring hands-on experience managing enterprise AWS infrastructure in highly regulated environments, 
                                specializing in Infrastructure as Code with CDK and Python, serverless solutions, and automated compliance. 
                                I'm committed to delivering reliable cloud platforms using agile practices 
                                and love staying current with the latest cloud technologies.
                            </p>
                        </div>
                    </div>
                    <div className="image-wrapper">
                        <img src="profile_picture.png" alt="Profile"/>
                        <div className="job-title">AWS Cloud Engineer</div>
                        <div className="location">Based in Amsterdam, NL</div>
                    </div>
                </div>
            </div>
        )
    }
}


