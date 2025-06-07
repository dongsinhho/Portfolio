import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CreateCategoryPopup = ({ onClose, onCreate }) => {
    const [categoryName, setCategoryName] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!categoryName.trim()) {
            setError('Category name is required');
            return;
        }
        onCreate(categoryName.trim());
        setCategoryName('');
    };

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <h3>Create New Category</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={categoryName}
                        onChange={e => setCategoryName(e.target.value)}
                        placeholder="Category name"
                        autoFocus
                    />
                    {error && <div className="error">{error}</div>}
                    <div className="popup-actions">
                        <button type="submit">Create</button>
                        <button type="button" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

CreateCategoryPopup.propTypes = {
    onClose: PropTypes.func.isRequired,
    onCreate: PropTypes.func.isRequired,
};

export default CreateCategoryPopup;
