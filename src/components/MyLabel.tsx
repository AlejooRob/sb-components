import './mylabel.css';

export interface MyLabelProps {
    /**
    * Este es el mensaje del Label
    */
    label: string;
    /**
    * Tamaño por defecto del Label
    */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
    * Capitalizar las palabras
    */
    allCaps?: boolean;
    /**
    * Colores para el label
    */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
    * Color opcional
    */
    fontColor?: string;
    /**
    * Color opcional
    */
    backgroundColor?: string;
}

export const MyLabel = ({
    allCaps = false,
    color = 'primary',
    fontColor,
    label = 'No Label',
    size = 'normal',
    backgroundColor = 'transparent'
}: MyLabelProps) => {
    return (
        <span className={ `label ${size} text-${color}`}  style={{ color: fontColor, backgroundColor}}  >
            { allCaps ? label.toUpperCase() : label }
        </span>
    )
}

export default MyLabel;