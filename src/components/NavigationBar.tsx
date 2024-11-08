import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBox, faWarehouse, faInfoCircle, faUser } from '@fortawesome/free-solid-svg-icons';

interface NavigationBarProps {
    onToggleSidebar: () => void;
    isSidebarOpen: boolean;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ onToggleSidebar }) => {
    return (
        <nav className="navigation-bar">
            <ul className="nav-list">
                <li className="nav-item">
                    <button onClick={onToggleSidebar} className="nav-button">
                        <FontAwesomeIcon icon={faBox} />
                        <span className="nav-text">Меню</span>
                    </button>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">
                        <FontAwesomeIcon icon={faHome} />
                        <span className="nav-text">Главная</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">
                        <FontAwesomeIcon icon={faWarehouse} />
                        <span className="nav-text">Склады</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">
                        <FontAwesomeIcon icon={faInfoCircle} />
                        <span className="nav-text">Информация</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">
                        <FontAwesomeIcon icon={faUser} />
                        <span className="nav-text">Профиль</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default NavigationBar;