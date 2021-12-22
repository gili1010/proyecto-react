
# Tienda De Bebidas 
## _Proyecto e-commerce de una tienda de Bebidas._
## Contenido
- Este proyecto (en desarrollo) tiene una única rama, master.

## Objetivos

> El objetivo del proyecto es crear una Tienda  E-commerce  (un sistema de venta de productos
>que gestiona los pagos a través de medios electrónicos.), en una single-page application (SPA), o
>aplicación de página única e-commerce, donde se pueda navegar sobre los distintos productos
>en ventas y también sobre sus categorías, luego agregarlos al carrito, modificar los elementos
>del carrito, para luego finalizar la compra de los elementos cargados al mismo.

Actualmente se encuentra en etapa de desarrollo.

## Tenología

Este proyecto se está desarrolando en React-Js:

- [React-Js](https://create-react-app.dev/) - La App fue creada con Create React App

## Instalación

Para clonar este repositorio debe seguir las siguientes instrucciones:

1 - Abre el Visual Studio Code

2 - Cambia el directorio de trabajo actual a la ubicación en donde quieres clonar el directorio.

3 - Escribe `git clone` y luego pega la siguiente URL `https://github.com/gili1010/proyecto-react.git`

4 - Presiona `Enter` para crear tu clon local.

Por mayor información: `https://docs.github.com/es/repositories/creating-and-managing-repositories/cloning-a-repository`

## Complementos

Una vez clonado el repositorio, para que el proyecto se ejecute correctamente, se deben instalar las siguientes librerias:

`react-router.dom`  : Es una librería que nos permite el enrutamiento y navegabilidad entre los diferentes componentes de nuestra SPA. Para instalarlo se debe ejecutar en la terminal lo siguiente:

```sh
npm install react-router-dom
```

`•	react-bootstrap `  : Es un framework front-end con el que le damos los diferentes estilos a la SPA.

```sh
npm install react-bootstrap@next bootstrap@5.1.1
```

## Ejecución

Para ejecutar este proyecto simplemente escriba y ejecute en su consola de Visual Studio Code:

```sh
npm start
```
>Esto hará que la aplicación se ejecute en modo de desarrollo.
>Abra http: // localhost: 3000 para verlo en el navegador.
>La página se recargará si realiza modificaciones. También verá errores en la consola.

## Estado del Proyecto

Actualmente cuenta con los siguientes Componentes: 
- `NavBar` : barra de navegación de la SPA.
- `Home` : componente de bienvenida.
- `ItemListContainer` : En donde mostramos el catálogo, en conjunción con los compomentes `ItemList` e `Item`.
- `ItemDetailContainer` : Para mostrar la información del item seleccionado `ItemDetail`, en  dónde ingresaremos la cantidad y nos permite la opción de agregar al carrito.
- `CardWidget` : componente para mostrar en la barra de navación la cantidad de productos seleccionados (en desarrollo).
- `getFecth` : componente que nos devuelve un arreglo de objetos, que contiene el catálogo de productos.

## Demo del Proyecto
- [Tienda De bebidas](https://bebidas12.netlify.app/)

## Avance del Proyecto

Vista del proyecto en ejecución:

Home
![home](https://github.com/gili1010/proyecto-react/blob/master/public/image/home.PNG?raw=true)

Detalle de Producto
![productos](https://github.com/gili1010/proyecto-react/blob/master/public/image/detalle.PNG?raw=true)

## Licencia

- [Luciano Gili](https://www.linkedin.com/in/luciano-gili/)

**Software Libre!!!**
