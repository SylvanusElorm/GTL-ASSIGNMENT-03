import React from 'react'
import './css/sample-wallpaper.css'

function Wallpaper(props) {
    return (
        <article class="Wallpaper">
            <img src={props.pic} alt='Wallpaper #1'></img>
        </article>
    )
}
export default Wallpaper;