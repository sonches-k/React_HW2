export interface ProductModalProps {
    onClose: () => void;
    name: string;
    description?: string; 
    category?: string; 
    quantity: number;
    unit: string;
    image?: string | null; 
}