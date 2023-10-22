import React from "react";
import "./hobbies.css";
import {Feature} from "../../components";

const featuresData = [
    {
        title: "Skateboard",
        text: "Me and a friend started skateboarding together this year. We often meet up at the skatepark to make progress together. What I like about skateboarding is the determination you need to learn this discipline and the happiness you feel when after a lot of training you land a trick."
    },
    {
        title: "Gaming",
        text: "Gaming has been a passion of mine for some time. I love to play video games and I like to play as part of a team. My favorite games are often online games that can be played by several people."
    },
    {
        title: "Streaming",
        text: "Streaming has attracted me for a long time, and in 2020 I launched Twitch.tv. I stream on different games and sometimes with different people. Don't hesitate to pass by ;)"
    },
    {
        title: "Anime",
        text: "This passion was passed on to me by my older brother, who was a huge fan of anime and encouraged me to watch it. I was immediately hooked, and I wasted no time in passing it on to my little sister."
    },
]

const Hobbies = () => {
    return (
        <div className="bw__hobbies section__padding unselectable" id="hobbies">
            <div className="bw__hobbies-heading">
                <h1 className="gradient__text">Develop a passion for learning. If you do, you will never cease to grow.</h1>
            </div>
            <div className="bw__hobbies-container">
                {featuresData.map((item, index) => (
                  <Feature title={item.title} text={item.text} key={item.title + index}/>
                ))}
            </div>
        </div>
    )
}

export default Hobbies