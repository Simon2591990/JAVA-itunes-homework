import React, {Fragment} from 'react'
import "./SongDetails.css"

const SongDetails = ({song}) => {
    return(
        <>
        <div class="song-details">
            <h2>{song["im:name"].label}</h2>
            <p>{song["im:artist"].label}</p>
            <p>{song.category.attributes.label}</p>
            <img src={song["im:image"][2].label}></img>
        </div>
        </>
    )
}

export default SongDetails