import React from 'react'
import "./SideBarOption.css"

function SideBarOption({text ,active,Icon}) {
    return (
        <div  className={`sideBarOption ${active && 'sideBarOption__active'}`}>
            <Icon />
            <h2>{text}</h2>
        </div>
    )
}

export default SideBarOption
