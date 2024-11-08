import React, { useState } from 'react';
import { Product } from '../types/Product';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="product-card" onClick={openModal} style={{ cursor: 'pointer' }}>
            <img 
                src={product.imageUrl || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Xm2q3xCqeR-eEhHimDSmHQB20lxBCyxZesUjcQvrzEBCBrCJH08eW15jR5NKWENfmKw&usqp=CAU'} 
                alt={product.name} 
                style={{ width: '100%', height: '150px', borderRadius: '4px', objectFit: 'cover' }} 
            />
            <h3 style={{ fontWeight: 'bold' }}>{product.name}</h3>
            <p><strong>Категория:</strong> {product.category}</p>
            <p><strong>Количество:</strong> {product.quantity} {product.unit}</p>
            <p className="description">
                {product.description}
            </p>

            {isModalOpen && (
                <div className="modal" onClick={closeModal}>
                    <div 
                        className="modal-content" 
                        onClick={(e) => e.stopPropagation()} 
                        onMouseLeave={closeModal} 
                    >
                        <span className="close" onClick={closeModal}>&times;</span>
                        <img 
                            src={product.imageUrl || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Xm2q3xCqeR-eEhHimDSmHQB20lxBCyxZesUjcQvrzEBCBrCJH08eW15jR5NKWENfmKw&usqp=CAU'} 
                            alt={product.name} 
                            style={{ width: '80%', height: 'auto', borderRadius: '4px' }} 
                        />
                        <h3>{product.name}</h3>
                        <p><strong>Описание:</strong> {product.description}</p>
                        <p><strong>Категория:</strong> {product.category}</p>
                        <p><strong>Количество:</strong> {product.quantity} {product.unit}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductCard;