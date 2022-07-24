import React, { useEffect } from "react"
import Document from "../Document/Document"
import { useState } from "react"
export default function ListPage() {


    const [documents, setDocuments] = useState([]);

    // const request = {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       title: "test",
    //       author:"test",
    //       wordCount: 100,
    //     })
    // }
    

    // const saveToDatabse = () => {
    //     fetch("http://localhost:3001/document", request).then((res) => {
    //       // console.log(res);
    //     });
    //   }


    const id = "1"
    useEffect(() => {
        fetch("http://localhost:3001/alldocuments?id=" + id, {
            method: "GET",
        }).then((res) => {
          setDocuments(res.json());
        }).then((res) => {
            console.log(res.json());
          });

        // documents.forEach(props => {
        //     document.getElementsByName("innerDoc").innerHTML.appendChild(<Document props={props}/>);
        // });
    },[]);

    return (
        <div className="document-page">
            <nav className="document-nav">
                <button className="back"></button>
                <button className="add"></button>
            </nav>
            <div id="innerDoc" className= "document-list">
                <Document for={documents} />
            </div>
        </div>
    )
}
