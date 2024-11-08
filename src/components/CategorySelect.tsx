import React from 'react';

interface CategorySelectProps {
    categories: string[]; 
    onCategoryChange: (selectedCategory: string) => void; 
}

const CategorySelect: React.FC<CategorySelectProps> = ({ categories, onCategoryChange }) => {
    return (
        <select 
            id="category-select" 
            className="category-select" 
            style={{ width: '100%', marginBottom: '10px' }}
            onChange={(e) => onCategoryChange(e.target.value)} 
        >
            <option value="">Все категории</option>
            {categories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
            ))}
        </select>
    );
};

export default CategorySelect;