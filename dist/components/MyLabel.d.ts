/// <reference types="react" />
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
export declare const MyLabel: ({ allCaps, color, fontColor, label, size, backgroundColor }: MyLabelProps) => JSX.Element;
