import React from 'react'
import Icon from '@mdi/react'
import {mdiAlertCircle} from '@mdi/js';

function Error(props) {

    let classes =[];
    let icon = false;

    switch (props.position) {
        case 'left':
            classes.push("left")
            break
        case 'right':
            classes.push("right")
            break
        default :
            classes.push("center")
            break
    }

    switch (props.type) {
        case "warning":
            classes.push("orange")
            icon = "orange"
            break;
        case "danger":
        default:
            classes.push("red")
            icon = "red"
    }

    if (props.icon === false) {
        icon = null;
    }

    return (
        <div className={classes.join(" ")}>
            <h1>{props.title}</h1>
            {icon ? <Icon style={{float:"left"}} path={mdiAlertCircle} title="error" size={3
            } color={icon} />: ""}
            {props.children}


        </div>
    )
}

export default Error