import React from "react"
import Document from "../Document/Document"

export default function ListPage() {
    return (
        <div className="document-page">
            <nav className="document-nav">
                <button className="back"></button>
                <button className="add"></button>
            </nav>
            <div className= "document-list">
                <Document/>
                <Document/>
            </div>
        </div>
    )
}
