import React, { useState } from 'react';
import NavigationBar from './components/NavigationBar';
import Sidebar from './components/Sidebar';
import ProductList from './components/ProductList';
import { Product } from './types/Product'; 
import productsData from './data/products.json'; 

const App: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); 

    const toggleSidebar = () => {
        setIsSidebarOpen(prevState => !prevState); 
    };

    const products: Product[] = productsData; 

    return (
        <div className="app">
            <NavigationBar onToggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
            <div className="app-container" style={{ display: 'flex' }}>
                <Sidebar isOpen={isSidebarOpen} />
                <div className="main-content" style={{ flexGrow: 1 }}>
                    <ProductList products={products} /> {}
                </div>
            </div>
        </div>
    );
};

export default App;