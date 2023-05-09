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
            <img src={meme.randomImage} alt="Meme" className="meme--image" />
        </main>
    )
}