import React from 'react';
import { ProductModalProps } from '../types/ProductModalProps';

const Modal: React.FC<ProductModalProps> = ({ onClose, name, description, category, quantity, unit, image }) => {
    return (
        <div className="modal">
            <button onClick={onClose}>Закрыть</button>
            <h2>{name}</h2>
            {description && <p>{description}</p>}
            {category && <p>Категория: {category}</p>}
            <p>Количество: {quantity} {unit}</p>
            {image ? (
                <img src={image} alt={name} />
            ) : (
                <p>Изображение отсутствует</p>
            )}
        </div>
    );
};

export default Modal;