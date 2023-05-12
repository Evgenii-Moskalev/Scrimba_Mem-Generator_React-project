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

    function handleChange(event) {
        const { name, value } = event.target;

        setMeme((prevState) => {
            return {
                ...meme,
                [name]: value
            }
        })
    }

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
                <input type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                ></input>
                <input type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                ></input>

                <button className="form--button" onClick={getMemeImage}>Get a new meme image  🖼</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt="Random Meme" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}