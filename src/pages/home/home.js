import React from "react";
import "./home.scss";
import Directory from "../../components/directory/directory";

export default function Home() {
  return (
    <div>
      <div className="homepage">
        <div className="directory-menu">
          <Directory></Directory>
        </div>
      </div>
    </div>
  );
}
