import React from 'react';
import Card from './components/Card';
import ProductList from './components/ProductList';
import Section from './components/Section';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <h1>Lab 2.2</h1>
      
      <Card title="First Card">
        <p>Card content here.</p>
      </Card>
      
      <Card title="Second Card" className="special-card">
        <p>Another card with custom class.</p>
      </Card>
      
      <Section title="Products Section">
        <ProductList />
      </Section>
    </div>
  );
}

export default App;