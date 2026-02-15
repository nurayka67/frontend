import React from 'react';

function AddArticle({ title, summary, onChangeTitle, onChangeSummary, onClickAdd }) {
    return (
        <div style={{ marginBottom: 20 }}>
            <h3>Add Article</h3>
            <input
                placeholder="Title"
                value={title}
                onChange={onChangeTitle}
            />
            <input
                placeholder="Summary"
                value={summary}
                onChange={onChangeSummary}
            />
            <button onClick={onClickAdd}>Add</button>
        </div>
    );
}

export default AddArticle;