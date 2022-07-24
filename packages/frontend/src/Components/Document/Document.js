import React from "react"
import { useState } from "react"
import {Link} from 'react-router-dom'
const Document = (props) => {

    return (
        <div className="document">
            <Link to="/edit">
            <p className="doc-name">{props.title}Marry Had A Little Lamb</p>
            <div className="bottom">
                <p className="modified">Modified: 20/20/2020 {props.updatedAt}</p>
                <p className="created">Created: 20/20/2020{props.createdAt}</p>
            </div>
            </Link>
        </div>
    )
}
export default Document;