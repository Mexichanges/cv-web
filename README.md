# CV Web - Axel Fabricio Colchado Juárez

> Un CV moderno, minimalista y completamente responsivo con diseño dark mode profesional

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)

## ✨ Características

- 🌙 **Dark Mode Profesional** - Diseño moderno y elegante que no cansa la vista
- 🌐 **Bilingüe** - Cambia entre Español e Inglés con un clic
- 📱 **Totalmente Responsivo** - Se adapta perfectamente a cualquier dispositivo
- ⚡ **Animaciones Suaves** - Efectos visuales al hacer scroll y hover
- 📄 **Descarga como PDF** - Botón para imprimir/guardar como PDF
- 🚀 **Sin Dependencias Pesadas** - Usa Tailwind CSS desde CDN
- ♿ **Accesible** - Código semántico y bien estructurado
- 🎨 **Fácil de Personalizar** - Solo edita el HTML para cambiar contenido

## 📁 Estructura del Proyecto

```
cv-web/
├── index.html      # Página principal con toda la estructura
├── styles.css      # Estilos personalizados adicionales
├── script.js       # Funciones de interactividad
└── README.md       # Este archivo
```

## 🚀 Inicio Rápido

### Opción 1: Ver Localmente (Más rápido)

1. **Clona el repositorio:**
```bash
git clone https://github.com/Mexichanges/cv-web.git
cd cv-web
```

2. **Abre `index.html` en tu navegador:**
   - Haz doble clic en `index.html` 
   - O haz clic derecho → Abrir con → Tu navegador favorito

**¡Listo!** Ya puedes ver el CV funcionando.

### Opción 2: Con Servidor Local

Si tienes Python instalado:

```bash
cd cv-web

# Python 3
python -m http.server 8000

# Luego abre: http://localhost:8000
```

### Opción 3: Desplegar en GitHub Pages (Gratis y Permanente)

1. Personaliza `index.html` con tu información
2. Haz commit y push a tu repositorio
3. Ve a **Settings** → **Pages** → Selecciona **main branch**
4. ¡Accede a: `https://Mexichanges.github.io/cv-web` ✨

## 🛠️ Personalización

### 1. **Cambiar Información Personal**

Abre `index.html` y modifica en el HTML Hero Section:

```html
<h1 class="text-5xl md:text-6xl font-bold leading-tight">
  Axel Fabricio <span class="text-blue-400">Colchado Juárez</span>
</h1>
```

### 2. **Actualizar Email y Links**

Busca y reemplaza:
- `juarezaxel205@gmail.com` → Tu email
- `https://github.com/Mexichanges` → Tu GitHub
- `https://www.linkedin.com` → Tu LinkedIn

### 3. **Cambiar Tecnologías**

En la sección "Tecnologías principales", modifica los tags:

```html
<span class="px-4 py-2 rounded-full bg-slate-800">Tu Tecnología</span>
```

### 4. **Agregar/Modificar Proyectos**

En la sección "Proyectos destacados":

```html
<div class="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800">
  <div class="w-full h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
    <!-- Tu ícono aquí -->
  </div>
  <div class="p-8">
    <h3 class="text-2xl font-semibold mb-2">Nombre del Proyecto</h3>
    <p class="text-slate-300 mb-4">Descripción del proyecto</p>
    <div class="flex flex-wrap gap-2">
      <span class="px-3 py-1 rounded-full bg-slate-800 text-xs">Tecnología 1</span>
      <span class="px-3 py-1 rounded-full bg-slate-800 text-xs">Tecnología 2</span>
    </div>
  </div>
</div>
```

### 5. **Cambiar Colores**

Los colores principales están en Tailwind CSS. Para cambiar la paleta:

Busca en `index.html` las clases con `blue-400` y `blue-500` y cámbia por:

- **Rojo**: `red-400`, `red-500`
- **Verde**: `green-400`, `green-500`
- **Púrpura**: `purple-400`, `purple-500`
- **Naranja**: `orange-400`, `orange-500`

## 🎨 Características Especiales

### Sistema de Idiomas

El CV incluye soporte para **Español e Inglés**. Los textos están marcados con:

```html
<span data-es="Texto en Español" data-en="English Text">Texto en Español</span>
```

Haz clic en los botones ES/EN para cambiar de idioma (se guarda automáticamente).

### Descarga como PDF

Haz clic en el botón "Descargar PDF" para abrir el diálogo de impresión. Selecciona "Guardar como PDF" en tu navegador.

### Animaciones al Scroll

Los elementos se revelan suavemente al hacer scroll. Esto se maneja con JavaScript y la clase `reveal`.

## 📱 Responsive Design

El CV se adapta automáticamente a:

| Dispositivo | Ancho | Clase Tailwind |
|---|---|---|
| 📱 Móvil | 320px+ | Estilos por defecto |
| 📱 Tablet | 768px+ | `md:` |
| 💻 Desktop | 1024px+ | `lg:` |

## 🔗 Recursos Utilizados

- **HTML5**: Estructura semántica
- **Tailwind CSS**: Estilos desde CDN (sin instalación)
- **Font Awesome 6**: Iconos profesionales
- **JavaScript Vanilla**: Interactividad sin frameworks

## 📚 Links Útiles

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [Color Palettes](https://coolors.co)
- [Google Fonts](https://fonts.google.com)

## 🔧 Tips Avanzados

### Agregar más secciones

Simplemente copia una sección existente y modifica el contenido. Asegúrate de mantener la clase `reveal` para las animaciones:

```html
<section class="mt-20 reveal opacity-0 translate-y-8 transition-all duration-700">
  <!-- Tu contenido aquí -->
</section>
```

### Agregar transiciones personalizadas

Modifica los valores en `styles.css`:

```css
.reveal {
  animation: slideUp 0.7s ease forwards;
}
```

### Cambiar fuentes

En `index.html`, agrega una nueva fuente desde [Google Fonts](https://fonts.google.com):

```html
<link href="https://fonts.googleapis.com/css2?family=TuFuente&display=swap" rel="stylesheet">
```

Luego úsala en CSS:
```css
body {
  font-family: 'Tu Fuente', sans-serif;
}
```

## 📄 Licencia

Este proyecto es completamente libre de usar y modificar. ¡Personalízalo como desees! 🎉

## 👤 Autor

Creado con ❤️ por **Axel Fabricio Colchado Juárez**

---

### ¿Necesitas ayuda?

1. Lee los comentarios en el código (están bien explicados)
2. Consulta la documentación de [Tailwind CSS](https://tailwindcss.com)
3. Experimenta cambiando valores y viendo los resultados en tiempo real

**¡Diviértete personalizando tu CV!** 🚀✨
