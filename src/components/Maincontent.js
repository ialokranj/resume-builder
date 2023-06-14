import React, { useState } from 'react';
import './Maincontent.css';
import OnOffButton from './OnOffButton'

const Maincontent = ({ name }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    setEditedName(e.target.value);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Perform any necessary action to save the edited name
    // For example, call an API or update the state in the parent component
    // with the editedName value
  };

  return (
    <div className="section-container">
      <div className="hamburger-icon">
        <div className="hamburger-icon-line"></div>
        <div className="hamburger-icon-line"></div>
        <div className="hamburger-icon-line"></div>
      </div>

      <div className="info-container">
        <button className="info-button">&#9432;</button>
        <div className="title-container">
          {isEditing ? (
            <input
              type="text"
              value={editedName}
              onChange={handleInputChange}
            />
          ) : (
            <h3 className="section-title">{editedName}</h3>
          )}
          {isEditing ? (
            <button className="save-button" onClick={handleSave}>
              Save
            </button>
          ) : (
            <button className="edit-button" onClick={handleEditClick}>
              &#9998;
            </button>
          )}
        </div>
      </div>
      <OnOffButton/>
    </div>
  );
};

export default Maincontent;