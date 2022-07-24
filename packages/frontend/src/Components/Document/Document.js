import React from "react"
import { useState } from "react"
const Document = (props) => {

    return (
        <div className="document">
            <p className="doc-name">{props.title}</p>
            <div className="bottom">
                <p className="modified">Modified: {props.updatedAt}</p>
                <p className="created">Created: {props.createdAt}</p>
            </div>
        </div>
    )
}
export default Document;