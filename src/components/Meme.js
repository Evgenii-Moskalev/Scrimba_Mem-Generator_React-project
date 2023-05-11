import React from "react";

import MemeDatabase from "../MemeDatabase";


export default function Meme() {


    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    });

    const [allMemeImages, setAllMemeImages] = React.useState(MemeDatabase);
    // console.log(allMemeImages);

    function getMemeImage() {
        const randomNum = Math.floor(Math.random() * (MemeDatabase.data.memes.length));
        // console.log(randomNum);
        const randomImageURL = allMemeImages.data.memes[randomNum].url;
        // Or using destructuring
        // const {url} = MemeDatabase.data.memes[randomNum];

        setMeme(prev => ({
            ...prev,
            randomImage: randomImageURL
        }))
    }


    return (
        <main>
            <div className="form">
                <input type="text" placeholder="Top text" className="form--input"></input>
                <input type="text" placeholder="Bottom text" className="form--input"></input>

                <button className="form--button" onClick={getMemeImage}>Get a new meme image  🖼</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt="Random Meme" />
                <h2 className="meme--text top">One does not simply</h2>
                <h2 className="meme--text bottom">Walk into Mordor</h2>
            </div>
        </main>
    )
}