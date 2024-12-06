Buscador de GIFs

Este proyecto es una aplicación creada con React que permite buscar y mostrar GIFs desde la API de Giphy. Además, incluye un historial de búsquedas, opciones para eliminar búsquedas actuales o todo el historial, y una estructura de componentes tipados con PropTypes.

Características

    Realiza búsquedas de GIFs utilizando la API de Giphy.
    Visualización de resultados en una cuadrícula.
    Historial de búsquedas con posibilidad de reutilizar consultas previas.
    Botones para eliminar la búsqueda actual o borrar todo el historial.
    Arquitectura modular basada en componentes.
    Uso de PropTypes para tipado en un archivo centralizado.

    Tecnologías utilizadas

    React (Vite como builder)
    JavaScript
    PropTypes
    TailwindCSS (estilado)
    Giphy API (para datos)
    Node.js (entorno de desarrollo)
    Instalación

Sigue estos pasos para ejecutar el proyecto en tu entorno local:
1. Clonar el repositorio

git clone <URL_DEL_REPOSITORIO>
cd AppGif

2. Instalar dependencias

Asegúrate de tener instalado Node.js en tu sistema. Luego, instala las dependencias del proyecto:

npm install

3. Configurar las variables de entorno

Crea un archivo .env en la raíz del proyecto y añade la clave de API de Giphy:

VITE_GIPHY_API_KEY=TU_CLAVE_DE_API

Obtén tu clave de API registrándote en Giphy Developers.
