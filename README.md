# DCVS Landing Page

## Descripción General

Este proyecto es una landing page moderna y funcional para **DCVS**, una empresa de bienes raíces y desarrollo integral de proyectos. La aplicación está construida como una **Single Page Application (SPA)** utilizando **React** y **Vite**.

La interfaz de usuario está diseñada para ser limpia, responsiva e interactiva, e incluye características clave como:
* Navegación por secciones (Single Page).
* Soporte multi-idioma (Español e Inglés) gestionado por Context.
* Selector de tema (Modo Claro / Modo Oscuro) gestionado por Context.
* Componentes visuales con iconos modernos.

## Tecnologías Utilizadas

-   **Vite:** Un bundler de frontend moderno y extremadamente rápido.
-   **React 18:** La biblioteca de JavaScript para construir interfaces de usuario.
-   **React Context:** Utilizado para la gestión de estado global (idioma y tema).
-   **Lucide React:** Una biblioteca de iconos vectoriales consistentes y ligeros.
-   **CSS (con variables):** Estilizado directo utilizando CSS moderno y variables para soportar el cambio de tema.

## Estructura del Proyecto (Vite + React)
```
dcvs-landing/
├── public/                 # Archivos estáticos
├── src/
│   ├── components/         # Componentes reutilizables de React
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Methodology.jsx
│   │   ├── Projects.jsx
│   │   └── Services.jsx
│   ├── contexts/           # Proveedores de Contexto de React
│   │   ├── LanguageContext.jsx
│   │   └── ThemeContext.jsx
│   ├── App.jsx             # Componente raíz de la aplicación
│   ├── index.css           # Estilos globales y variables CSS
│   └── main.jsx            # Punto de entrada de la aplicación
├── .gitignore              # Archivos ignorados por Git
├── index.html              # Plantilla HTML principal
├── package.json            # Metadatos del proyecto y dependencias
└── vite.config.js          # Configuración de Vite
```

### Descripción de Carpetas y Componentes Clave

-   **`src/App.jsx`**: Es el componente principal que renderiza todas las secciones de la landing page y envuelve la aplicación en los proveedores de contexto (Theme y Language).
-   **`src/components/`**: Contiene todos los componentes que representan las secciones de la página (Header, Hero, About, etc.).
-   **`src/contexts/`**: Contiene la lógica para el estado global de la aplicación.
    -   `LanguageContext.jsx`: Administra el idioma actual (ES/EN) y provee el contenido de texto correspondiente.
    -   `ThemeContext.jsx`: Administra el tema actual (claro/oscuro) y lo persiste en `localStorage`.

## Empezando

### Prerrequisitos

-   Node.js (versión 18 o superior)
-   npm (o yarn / pnpm)

### Instalación

1.  Clona el repositorio:

    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd dcvs-landing
    ```

2.  Instala las dependencias (usando npm, basado en `package-lock.json`):

    ```bash
    npm install
    ```

### Ejecutando la Aplicación

1.  Inicia el servidor de desarrollo de Vite:

    ```bash
    npm run dev
    ```
   

2.  Abre tu navegador y navega a la dirección proporcionada (normalmente `http://localhost:3000`).

### Construyendo para Producción

1.  Construye la aplicación para producción:

    ```bash
    npm run build
    ```
   

2.  La salida de la construcción estará en el directorio `dist`. Puedes previsualizar la build de producción localmente con:

    ```bash
    npm run preview
    ```
   

## Contribución

¡Las contribuciones son bienvenidas! Por favor, sigue estos pasos:

1.  Haz un fork del repositorio.
2.  Crea una nueva rama para tu característica o corrección de errores.
3.  Realiza tus cambios y commitea con mensajes descriptivos.
4.  Envía un pull request.

## Licencia

[Especifica la licencia bajo la cual se publica el proyecto, por ejemplo: MIT]
