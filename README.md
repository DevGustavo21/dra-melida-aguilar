# Dra. Melida Aguilar — Cirugía Urológica

Sitio web profesional para la **Dra. Melida Aguilar Chamorro**, médico especializada en Urología que atiende en Managua y Granada, Nicaragua.

Construido con **Next.js 15 (App Router)**, **TypeScript** y **Tailwind CSS**.

## Características

- ✅ 5 páginas (sitemap idéntico al diseño original):
  - `/` — Inicio (hero, stats, sobre, servicios, paquetes, testimonios, ubicaciones, contacto)
  - `/sobre-nosotros` — Biografía, misión, valores y trayectoria
  - `/servicios` — 7 especialidades urológicas con imágenes reales
  - `/paquetes` — 3 paquetes con tabla comparativa y FAQ
  - `/contacto` — Formulario, ubicaciones, horarios y mapa embebido
- ✅ Diseño 100% responsive
- ✅ `max-width: 1400px` en todas las secciones (`container-site`)
- ✅ Botón flotante de WhatsApp en todas las páginas
- ✅ Header con scroll-aware (transparente sobre hero, blanco al hacer scroll)
- ✅ Tipografía: Inter (texto) + Poppins (display)
- ✅ Paleta corporativa azul de la marca
- ✅ Imágenes reales de servicios (Unsplash)
- ✅ SEO: meta tags y OpenGraph configurados

## Cómo correr el proyecto

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Scripts disponibles

| Comando         | Descripción                            |
| --------------- | -------------------------------------- |
| `npm run dev`   | Servidor de desarrollo                 |
| `npm run build` | Compilación de producción              |
| `npm start`     | Servir la build de producción          |
| `npm run lint`  | Ejecutar ESLint                        |

## Estructura del proyecto

```
src/
├── app/
│   ├── layout.tsx              # Layout raíz con Header, Footer, WhatsApp FAB
│   ├── page.tsx                # Inicio
│   ├── sobre-nosotros/page.tsx # Sobre Nosotros
│   ├── servicios/page.tsx      # Servicios
│   ├── paquetes/page.tsx       # Paquetes
│   ├── contacto/page.tsx       # Contacto
│   └── globals.css             # Estilos globales + utilidades Tailwind
├── components/
│   ├── Header.tsx              # Navegación principal (sticky, responsive)
│   ├── Footer.tsx              # Pie de página completo
│   ├── Logo.tsx                # Logo con dos variantes (light/dark)
│   ├── WhatsAppFab.tsx         # Botón flotante de WhatsApp
│   ├── ServiceCard.tsx         # Tarjeta de servicio con imagen e icono
│   ├── PackageCard.tsx         # Tarjeta de paquete con destacado
│   └── sections/
│       ├── PageHero.tsx        # Hero secundario para páginas internas
│       ├── SectionHeader.tsx   # Encabezado de sección reutilizable
│       └── ContactCTA.tsx      # Banner CTA con gradiente
└── lib/
    ├── site.ts                 # Datos institucionales (teléfonos, ubicaciones, nav)
    └── data.ts                 # Contenido (servicios, paquetes, testimonios, valores, timeline)
```

## Personalización rápida

- **Datos de contacto, ubicaciones, navegación:** edita `src/lib/site.ts`
- **Servicios, paquetes, testimonios, timeline:** edita `src/lib/data.ts`
- **Paleta de colores y tipografía:** edita `tailwind.config.ts`

## Notas de diseño

Las páginas replican fielmente las pantallas compartidas, manteniendo la esencia del diseño original con algunas mejoras:

- Header con efecto de scroll para mayor profesionalismo
- Hero principal mejorado con imagen real de quirófano
- Cards de servicios con imágenes reales (en lugar de placeholders)
- Animaciones sutiles al hacer hover
- FAQ acordeón en la página de Paquetes
- Mapa embebido funcional en Contacto
- Botón flotante de WhatsApp con efecto pulsante
- Mejor accesibilidad: aria-labels, foco visible, contraste

## Licencia

Uso exclusivo del proyecto de la Dra. Melida Aguilar Chamorro.
