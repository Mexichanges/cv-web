// Script para interactividad sutil del CV

document.addEventListener('DOMContentLoaded', function() {
    // Animación de carga suave
    const sections = document.querySelectorAll('.section');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Efecto de hover en skill tags
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(2deg)';
        });
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // Scroll suave en links de contacto
    const contactLinks = document.querySelectorAll('.contact-link');
    contactLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.href.startsWith('mailto:') || this.target === '_blank') {
                return; // Permitir comportamiento normal para email y links externos
            }
            e.preventDefault();
            // Aquí podrías agregar más funcionalidad si lo necesitas
        });
    });

    // Efecto de brillo sutil en header al cargar
    const header = document.querySelector('.header');
    if (header) {
        header.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
        });
        header.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    }

    console.log('CV cargado correctamente ✨');
});

// Función para cambiar el color de acento (opcional)
function cambiarColorAcento(nuevoColor) {
    document.documentElement.style.setProperty('--accent-color', nuevoColor);
}

// Función para cambiar el color primario (opcional)
function cambiarColorPrimario(nuevoColor) {
    document.documentElement.style.setProperty('--primary-color', nuevoColor);
}
