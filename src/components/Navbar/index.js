import React from "react";
import { Icon } from "@iconify/react";
import "./styles.scss";

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="container">
          <div>
            <Icon icon="mdi:trello" width="25" height="25" color="#1769aa" />
            <h1>Trello</h1>
          </div>
        </div>
      </nav>
    </div>
  );
}
