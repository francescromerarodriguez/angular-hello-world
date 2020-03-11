export class Producto {
    codigo: number;
    nombre: string;
    precio: number;
    disponible: boolean;
    //cliente: Cliente; // Puede ser otro modelo

    //En una función los parámetros con interrogante son opcionales
    constructor(codigo?: number, nombre?: string, precio?: number, disponible?: boolean) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.disponible = disponible;
    }
}