# Portfolio Personal - Developer

Portfolio moderno y profesional desarrollado con las últimas tecnologías del ecosistema React. Este proyecto representa mi experiencia como desarrollador full-stack especializado en React, Angular y tecnologías modernas de frontend.

## 🚀 Stack Tecnológico

- **React 19** - Última versión con nuevas características como Suspense mejorado y Server Components
- **TypeScript** - Type safety y mejor experiencia de desarrollo
- **Vite** - Build tool ultrarrápido con HMR instantáneo
- **SCSS/Sass** - Preprocesador CSS con módulos para estilos encapsulados
- **CSS Modules** - Scoped styling para evitar conflictos

## 📋 Características Principales

### Arquitectura y Patrones
- **Lazy Loading** con React.lazy() y Suspense para optimizar la carga inicial
- **Intersection Observer API** para detección de scroll y animaciones
- **Component-based architecture** con separación clara de responsabilidades
- **CSS Modules** para encapsulación de estilos por componente

### UI/UX
- **Diseño responsive** adaptado a todos los dispositivos
- **Animaciones avanzadas** con CSS y keyframes personalizados
- **High contrast color scheme** (Negro, Blanco, Gris, Azul Metálico)
- **Efectos visuales modernos**: glow effects, shimmer text, glassmorphism
- **Navegación activa** con detección automática de sección visible

### Optimizaciones
- Code splitting automático por rutas
- Imágenes optimizadas con object-fit
- Animaciones con GPU acceleration (transform, opacity)
- Transiciones suaves con CSS transitions

## 🛠️ Instalación y Configuración

### Prerequisitos
```bash
node >= 18.0.0
npm >= 9.0.0
```

### Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/ChuDi15/Portfolio.git
cd Portfolio/porfolio
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar assets**
   - Coloca tu foto de perfil en `src/assets/avatar.jpg`
   - Las imágenes deben estar en formato JPG, PNG o WEBP

4. **Desarrollo local**
```bash
npm run dev
```
El proyecto estará disponible en `http://localhost:5173/`

5. **Build para producción**
```bash
npm run build
```
Los archivos compilados estarán en `/dist`

6. **Preview del build**
```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
porfolio/
├── src/
│   ├── components/          # Componentes de React
│   │   ├── Header/         # Navegación principal con active state
│   │   ├── Hero/           # Landing section con animaciones
│   │   ├── About/          # Información personal
│   │   ├── Skills/         # Tech stack con cards animadas
│   │   ├── Experience/     # Timeline de experiencia laboral
│   │   ├── Projects/       # Portfolio de proyectos
│   │   ├── Contact/        # Formulario de contacto
│   │   └── Footer/         # Footer con redes sociales
│   ├── styles/             # Estilos globales y utilidades
│   │   ├── _variables.scss # Variables de color, spacing, etc.
│   │   ├── _mixins.scss    # Mixins reutilizables
│   │   └── global.scss     # Estilos base y reset
│   ├── assets/             # Imágenes y recursos estáticos
│   ├── App.tsx             # Componente principal con lazy loading
│   └── main.tsx            # Entry point de la aplicación
├── public/                 # Assets públicos
└── index.html             # HTML template
```

## 🎨 Sistema de Diseño

### Paleta de Colores
```scss
$color-black: #000000;
$color-white: #FFFFFF;
$color-gray: #808080;
$color-blue-metallic: #4A90E2;
```

### Breakpoints Responsive
```scss
$breakpoint-sm: 640px;   // Mobile landscape
$breakpoint-md: 768px;   // Tablets
$breakpoint-lg: 1024px;  // Desktop
$breakpoint-xl: 1280px;  // Large desktop
```

## 🔧 Personalización

### Modificar Información Personal

1. **Experiencia Laboral** - `src/components/Experience/Experience.tsx`
```typescript
const experiences: ExperienceItem[] = [
  {
    title: 'Tu Cargo',
    company: 'Empresa',
    period: 'Fecha - Fecha',
    description: ['Logro 1', 'Logro 2'],
    technologies: ['React', 'TypeScript']
  }
];
```

2. **Skills** - `src/components/Skills/Skills.tsx`
```typescript
const skills: Skill[] = [
  { name: 'React', category: 'Frontend', icon: '⚛️' }
];
```

3. **Proyectos** - `src/components/Projects/Projects.tsx`
```typescript
const projects: Project[] = [
  {
    title: 'Nombre del Proyecto',
    description: 'Descripción',
    technologies: ['Tech1', 'Tech2'],
    category: 'Web App'
  }
];
```

### Personalizar Estilos

Los estilos están organizados por componente usando CSS Modules. Para modificar:

1. Variables globales: `src/styles/_variables.scss`
2. Mixins reutilizables: `src/styles/_mixins.scss`
3. Estilos específicos: `src/components/[Component]/[Component].module.scss`

## 🚀 Tecnologías y Librerías

| Tecnología | Versión | Uso |
|------------|---------|-----|
| React | 19.x | UI Framework |
| TypeScript | 5.x | Type Safety |
| Vite | 7.x | Build Tool |
| Sass | Latest | CSS Preprocessor |

## 📝 Scripts Disponibles

```bash
npm run dev      # Inicia servidor de desarrollo
npm run build    # Genera build de producción
npm run preview  # Preview del build
npm run lint     # Ejecuta ESLint
```

## 🔍 Características Técnicas Destacadas

### Lazy Loading Implementado
Todos los componentes principales se cargan bajo demanda usando React.lazy() y Suspense, mejorando significativamente el tiempo de carga inicial.

### Intersection Observer
Sistema custom de detección de scroll que actualiza la navegación activa basándose en la sección visible, con múltiples thresholds para mayor precisión.

### Animaciones Performantes
Todas las animaciones usan propiedades CSS optimizadas para GPU (transform, opacity), evitando reflows y repaints costosos.

### Type Safety
TypeScript configurado con strict mode para catching de errores en tiempo de desarrollo.

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👨‍💻 Autor

Desarrollado por un Software Developer con experiencia en React, Angular, Nest.js, y tecnologías modernas de frontend/backend.

---

⭐ Si te gusta este proyecto, no olvides darle una estrella en GitHub
