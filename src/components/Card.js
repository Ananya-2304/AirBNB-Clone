import React from "react"

export default function Card(props){
    var badgeText;
    if(props.openSpots === 0)
        badgeText = "SOLD OUT";
    else if(props.location === "Online")
        badgeText = "ONLINE";
    return (
        <div className = "card">
            <img src = {require(`../images/${props.coverImg}`)} className = "scrollImage" />
            {badgeText && <button className = "soldOut">{badgeText}</button>}
            <div className = "rating">
                <img src = {require("../images/star.png")} className = "star" />
                <div className = "rate">{props.stats.rating}</div>
                <div className = "reviewCount">({props.stats.reviewCount})</div>
                <div className = "place">&nbsp;. {props.location}</div>
            </div>
            <div className = "desc">
                {props.title}
            </div>
            <div className = "costbyperson">
                <div className = "cost">
                From ${props.price}
                </div>
                <div className ="person">
                / person
                </div>
            </div>
        </div>
    )
}