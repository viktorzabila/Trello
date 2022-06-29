import React, { useContext, useState } from "react";
import { Clear } from "@material-ui/icons";

import storeApi from "../../utils/storeApi";

import "./styles.scss";

export default function InputCard({ setOpen, listId, type }) {
  const { addMoreCard, addMoreList } = useContext(storeApi);
  const [title, setTitle] = useState("");

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBtnConfirm = () => {
    if (type === "card") {
      addMoreCard(title, listId);
    } else {
      addMoreList(title);
    }
    setOpen(false);
    setTitle("");
  };

  return (
    <div className="input-card">
      <div className="input-card__container">
        <textarea
          onChange={handleOnChange}
          value={title}
          className="input-card__text"
          placeholder={
            type === "card"
              ? "Enter a title of this card..."
              : "Enter list title"
          }
          autoFocus
        />
      </div>
      <div className="input-card__confirm">
        <button className="input-card__button-confirm" onClick={handleBtnConfirm}>
          {type === "card" ? "Add Card" : "Add List"}
        </button>
        <button
          className="input-card__button-cancel"
          onClick={() => {
            setTitle("");
            setOpen(false);
          }}
        >
          <Clear />
        </button>
      </div>
    </div>
  );
}
