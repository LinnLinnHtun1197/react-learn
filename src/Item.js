import React from "react";

const Item = props => {
    return (
        <li>
            {props.name},
            $ {props.price}
        </li>
    )
}

export default Item;