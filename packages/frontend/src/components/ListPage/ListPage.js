import React from "react";
import Document from "../Document/Document";
import { Link } from "react-router-dom";

export default function ListPage() {
  return (
    <div className="document-page">
      <nav className="document-nav">
        <Link exact to="/">
          <button className="back"></button>
        </Link>
        <Link to="/createDoc">
          <button className="add"></button>
        </Link>
      </nav>
      <div className="document-list">
        <Document />
        <Document />
      </div>
    </div>
  );
}
