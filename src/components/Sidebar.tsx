import React from 'react';

interface SidebarProps {
    isOpen: boolean; 
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
    const categories = [
        "Все категории",
        "На шею",
        "Кольца",
        "Серьги",
        "Пирсинг",
        "Браслеты",
    ];

    return (
        <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            {isOpen && (
                <>
                    <input 
                        type="text" 
                        placeholder="Поиск..." 
                        className="search-input" 
                    />
                    <label htmlFor="category-select" className="category-label">Выберите категорию:</label>
                    <select id="category-select" className="category-select">
                        {categories.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                    <label className="availability-label">
                        <input type="checkbox" className="availability-checkbox" /> В наличии
                    </label>
                </>
            )}
        </aside>
    );
};

export default Sidebar;