# CV Web - Axel Fabricio Colchado Juárez

Sitio web moderno, minimalista y responsivo para tu currículum vitae.

## 🚀 Características

- ✨ Diseño minimalista y profesional
- 📱 Completamente responsivo (mobile, tablet, desktop)
- ⚡ Animaciones suaves y efecto de carga
- 🎨 Fácil de personalizar colores
- 🔧 HTML, CSS y JavaScript vanilla (sin dependencias)
- 📄 Optimizado para impresión
- ♿ Semántico y accesible

## 📁 Estructura del Proyecto

```
cv-web/
├── index.html      # Estructura HTML principal
├── styles.css      # Estilos CSS
├── script.js       # Interactividad con JavaScript
└── README.md       # Este archivo
```

## 🛠️ Personalización

### 1. **Cambiar Información Personal**

Abre `index.html` y modifica:

- Tu nombre en `<title>` y `<h1 class="name">`
- Tu profesión en `<p class="title">`
- Tu universidad en `<p class="subtitle">`
- Links de contacto en la sección `.contact`

### 2. **Actualizar Skills/Competencias**

Busca la sección `<!-- Competencias Técnicas -->` y modifica las categorías:

```html
<div class="skill-category">
    <h3>Tu Categoría</h3>
    <div class="skill-tags">
        <span class="skill-tag">Tu Skill 1</span>
        <span class="skill-tag">Tu Skill 2</span>
    </div>
</div>
```

### 3. **Agregar Tus Proyectos**

En la sección `<!-- Proyectos -->`, reemplaza:

```html
<div class="project-item">
    <h3>Nombre del Proyecto</h3>
    <p class="project-description">Descripción del proyecto y tecnologías usadas</p>
</div>
```

### 4. **Agregar Certificaciones**

En la sección `<!-- Certificaciones -->`:

```html
<div class="cert-item">
    <p>🏆 Nombre de la Certificación - Institución - Año</p>
</div>
```

### 5. **Cambiar Colores**

En `styles.css`, modifica las variables de color al inicio:

```css
:root {
    --primary-color: #2c3e50;    /* Color azul oscuro */
    --accent-color: #3498db;     /* Color azul claro */
    --text-color: #2c3e50;
    --light-text: #7f8c8d;
    --background-color: #ecf0f1;
    --white: #ffffff;
}
```

**Paletas de colores recomendadas:**
- Profesional: `#2c3e50` + `#3498db`
- Moderno: `#1a1a1a` + `#00d4ff`
- Cálido: `#8b4513` + `#d2691e`
- Fresco: `#27ae60` + `#2ecc71`

O usa `script.js` para cambiar dinámicamente:

```javascript
cambiarColorAcento('#00d4ff');
cambiarColorPrimario('#1a1a1a');
```

## 🚀 Desplegar en GitHub Pages

### Opción 1: Automático (Recomendado)

1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings** (⚙️)
3. Ve a **Pages** en el menú lateral
4. En **Source**, selecciona **Deploy from a branch**
5. Selecciona **main** como rama
6. Haz clic en **Save**

Tu sitio estará disponible en: `https://Mexichanges.github.io/cv-web`

### Opción 2: Manual con Git

```bash
# Clonar el repositorio
git clone https://github.com/Mexichanges/cv-web.git
cd cv-web

# Hacer cambios y verificarlos localmente
# (Abre index.html en tu navegador)

# Hacer commit y push
git add .
git commit -m "Actualizar CV con información personal"
git push origin main
```

## 💻 Usar Localmente

1. Descarga o clona el repositorio
2. Abre `index.html` en tu navegador
3. Realiza cambios en los archivos
4. Recarga el navegador (Ctrl+R o Cmd+R)

## 🎨 Tips de Personalización

- **Emojis**: Puedes cambiar los emojis en los contactos y secciones
- **Fuentes**: Busca en [Google Fonts](https://fonts.google.com) y reemplaza la fuente
- **Sombras**: Ajusta los valores de `box-shadow` en CSS
- **Espaciado**: Modifica los valores de `padding` y `margin`

## 📱 Responsive Design

El diseño se adapta automáticamente a:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (900px+)

## 🔗 Links Útiles

- [Paleta de Colores](https://coolors.co)
- [Iconos Emoji](https://emojipedia.org)
- [Google Fonts](https://fonts.google.com)
- [CSS Tricks](https://css-tricks.com)

## 📝 Licencia

Este proyecto es de código abierto y puedes usarlo libremente. ¡Personalízalo como desees! 🎉

---

**¿Necesitas ayuda?** Revisa el código HTML, CSS y JavaScript. Son simples y están bien comentados. 😊
