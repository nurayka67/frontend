import React, { useState } from 'react';
import AddArticle from './AddArticle';
import ArticleList from './ArticleList';

function ArticleManager() {
    const [articles, setArticles] = useState ([
        {id: 1, title: 'React Basics', summary: 'Основы React'},
        {id: 2, title: 'Hooks Guide', summary: 'Использование хуков'}
    ]);
    const [title, setTitle]= useState('');
    const [summary, setSummary] = useState('');

    const addArticle = () => {
        if (!title || !summary) return;
        setArticles([{id: Date.now(), title, summary}, ...articles]);
        setTitle('');
        setSummary('');
    };

    const removeArticle = (id) => {
        setArticles(articles.filter(a => a.id !== id));
    };

    return (
        <div style={{ padding: 20}}>
            <AddArticle
            title={title}
            summary={summary}
            onChangeTitle={(e) => setTitle(e.target.value)}
            onChangeSummary={(e) => setSummary(e.target.value)}
            onClickAdd={addArticle}
            />
            <ArticleList articles={articles} onClickRemove={removeArticle} />
        </div>
    );
}

export default ArticleManager;