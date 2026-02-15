import React, { useState } from 'react';

function ArticleItem({ article, onClickRemove }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{ border: '1px solid #ccc', margin: '10px 0', padding: 10 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ cursor: 'pointer' }}
                >
                    {isOpen ? '▼' : '▶'} {article.title}
                </span>
                <button onClick={() => onClickRemove(article.id)}>Delete</button>
            </div>
            {isOpen && <p>{article.summary}</p>}
        </div>
    );
}

export default ArticleItem;