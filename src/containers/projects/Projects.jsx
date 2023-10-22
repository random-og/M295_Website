import React from 'react';
import Feature from '../../components/feature/Feature';
import './projects.css';

const WhatGPT3 = () => (
    <div className="bw__projects section__margin unselectable" id="projects">
        <div className="bw__projects-feature">
            <Feature title="Projects" text="Here you'll find an overview of my current projects. These are not all the projects I have, but the ones that are closest to my heart. Of course I'd be happy to talk about them in a job interview." />
        </div>
        <div className="bw__projects-heading">
            <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        </div>
        <div className="bw__projects-container">
            <Feature title="Cyclone Terminus" text="A web app that appears in the form of a terminal and is an online chat. It collects and displays a minimum of information about the user. For all people who are bored and would like to meet new people." />
            <Feature title="Dream Setup" text="One of my hobbies is playing video games and every now and then I stream on the platform Twitch.tv. I have resolved to get myself a powerful gaming setup." />
            <Feature title="Waved Shop" text="Waved Shop is a project by a friend of mine, who makes music and would also like to launch his own brand. And with him and some other friends we're making an online shop." />
        </div>
    </div>
);

export default WhatGPT3;