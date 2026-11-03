# Landing — Productora de seguros

## Contexto
Landing de una sola página para un productor asesor de seguros con muchos años de experiencia (abuelo de un amigo). Trabaja con varias aseguradoras. Hoy no tiene web ni perfil de Google.
Objetivo: que cuando alguien lo busque, aparezca y se vea **confiable y real**. No vende online: la conversión es **escribir por WhatsApp**.

## Stack
- Un solo `index.html` con Tailwind por CDN. Sin frameworks, sin build.
- Imágenes en `/assets`. Deploy gratis en Vercel.
- Mobile-first (la mayoría va a entrar desde el celu).

## Datos
Datos reales cargados en `DATA` (fuente: formulario "CLEMEN PAGINA WEB.pdf"): Roberto Ricardo Pezzolesi, Pezzolesi Group, matrícula SSN 3242, +45 años, 9 aseguradoras, 12 ramos + "otros", WhatsApp Roberto y Lautaro, mail, zona CABA y GBA. Logo en `/assets`.
Pendiente: URL final, horarios, foto, redes (todavía no tienen). Lo que falte va con **placeholders claros** entre corchetes, ej: `[URL DEL SITIO]`.
Centralizar todos los datos en un objeto JS al inicio (`const DATA = {...}`) o en comentarios bien marcados, para reemplazarlos fácil cuando llegue el formulario:
nombre, nombre de la productora, matrícula, años de experiencia, aseguradoras, ramos, frase de cómo trabaja, WhatsApp, mail, dirección/zona, horarios, redes, logo, foto.

## Estructura (una sola página, scroll continuo, sin menú complejo)
1. **Hero**: nombre + "Productor Asesor de Seguros", años de experiencia, frase corta y cercana, foto real, botón principal "Escribime por WhatsApp".
2. **Aseguradoras**: fila de logos (placeholders grises por ahora).
3. **Qué seguros hago**: grilla de íconos simples (auto, moto, hogar, vida, comercio, ART).
4. **Por qué conmigo**: 3 puntos (experiencia, trato directo, te ayudo con los siniestros).
5. **CTA final**: repetir el botón de WhatsApp + mail + zona/horarios.
6. **Footer**: matrícula SSN visible (obligatorio), redes, año.
- Botón flotante de WhatsApp fijo abajo a la derecha. Link `https://wa.me/[NUMERO]?text=Hola!%20Quería%20consultar%20por%20un%20seguro`.

## Dirección de diseño
- Confiable y cálido, no corporativo frío ni "banco". Pensar en Lemonade/Hippo (simple, aireado, un solo CTA) pero para un productor de barrio con trayectoria.
- Paleta sobria: un color principal (azul profundo o verde) + neutros cálidos. Un solo color de acento para el CTA.
- Tipografía de Google Fonts, legible (ej. Inter o similar para texto, algo con un poco más de carácter para títulos).
- Mucho aire, textos cortos, lenguaje simple con "vos", cero jerga de seguros.

## SEO básico (clave: que aparezca cuando lo buscan)
- `<title>` y meta description con nombre + "productor de seguros" + zona.
- Open Graph (para que se vea bien al compartir por WhatsApp).
- JSON-LD `InsuranceAgency` con nombre, teléfono, dirección, horarios, URL.
- `lang="es-AR"`, imágenes con `alt`, favicon.

## Reglas
- No inventar datos reales (aseguradoras, matrícula, testimonios). Todo placeholder hasta tener la info.
- Nada de testimonios falsos.
- Mantenerlo liviano y rápido.
