import React, { useEffect, useState } from "react"
import Header from "../Components/Header"
import SongDetails from "../Components/SongDetails"

const Top20ListContainer = () => {

    const [songList, setSongList] = useState([])

    const getSongs = () => {
        console.log("Getting song information")
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
        .then(res => res.json())
        .then(data => setSongList(data.feed.entry))
    }

    useEffect(() => {
        getSongs();
        // getSongsByGenre()
    }, [])

    const getSongsByGenre = (genreNumber) => {
        fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=${genreNumber}json`)
        .then(res => res.json())
        .then(data => setSongList(data.feed.entry))
    }


    const  songNodes = songList.map((song) => {
        return(
        <SongDetails song={song} />
        )
    })

    return(
        <>
        <Header title="Top 20 Song List"/>
        <button onClick={getSongs()}>All</button>
        <button onClick={getSongsByGenre(21)}>Rock</button>
        <button>Pop</button>
        {songNodes}
        
        </>
    )
}

export default Top20ListContainer