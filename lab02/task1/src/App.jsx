import React from 'react';
import FragmentLayout from './components/FragmentLayout';
import ItemList from './components/ItemList';
import CombinedComponent from './components/CombinedComponent';
import './styles/App.css';

function App() {
    return (
        <div className="app">
            <h1>Lab 2.1</h1>
            <FragmentLayout />
            <ItemList />
            <CombinedComponent />
        </div>
    );
}

export default App;