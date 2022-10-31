import React from "react";
import "./hobbies.css";
import {Feature} from "../../components";

const featuresData = [
    {
        title: "Hobby #1",
        text: "Just make little strokes like that. You got your heavy coat out yet? It's getting colder. We want to use a lot pressure while using no pressure at all. We artists are a different breed of people. We're a happy bunch. Only God can make a tree - but you can paint one. Van Dyke Brown is a very nice brown, it's almost like a chocolate brown."
    },
    {
        title: "Hobby #2",
        text: "Just make little strokes like that. You got your heavy coat out yet? It's getting colder. We want to use a lot pressure while using no pressure at all. We artists are a different breed of people. We're a happy bunch. Only God can make a tree - but you can paint one. Van Dyke Brown is a very nice brown, it's almost like a chocolate brown."
    },
    {
        title: "Hobby #3",
        text: "Just make little strokes like that. You got your heavy coat out yet? It's getting colder. We want to use a lot pressure while using no pressure at all. We artists are a different breed of people. We're a happy bunch. Only God can make a tree - but you can paint one. Van Dyke Brown is a very nice brown, it's almost like a chocolate brown."
    },
    {
        title: "Hobby #4",
        text: "Just make little strokes like that. You got your heavy coat out yet? It's getting colder. We want to use a lot pressure while using no pressure at all. We artists are a different breed of people. We're a happy bunch. Only God can make a tree - but you can paint one. Van Dyke Brown is a very nice brown, it's almost like a chocolate brown."
    },
]

const Hobbies = () => {
    return (
        <div className="bw__hobbies section__padding" id="hobbies">
            <div className="bw__hobbies-heading">
                <h1 className="gradient__text">The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
                <p>Know more about my hobbies</p>
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