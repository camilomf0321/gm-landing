# Verificación del prototipo publicado

Revisión: 27 de octubre de 2026, America/Bogota.

## Resultado

- URL pública: https://gm-transportes.pages.dev/
- Proyecto Cloudflare Pages: `gm-transportes`, publicación por Direct Upload.
- Cloudflare confirmó el despliegue exitoso de los siete archivos públicos.
- Respuesta externa: `HTTP/2 200`, contenido HTML servido por HTTPS.
- Cabeceras verificadas: Content-Security-Policy, Permissions-Policy, Referrer-Policy, X-Content-Type-Options y X-Frame-Options.
- Sitio abierto en navegador mediante su URL pública: portada, estilos, imágenes y enlaces de WhatsApp renderizados.
- Los ocho enlaces apuntan a `https://wa.me/573163958250`, con un mensaje específico según el producto o consulta general. Número confirmado por el usuario.
- No se envió ningún mensaje de WhatsApp.

## Revisión local previa

- Servido con `python3 -m http.server 8080 --bind 127.0.0.1 --directory public`.
- Portada y todos sus recursos: HTTP 200/304.
- Revisión visual en escritorio y móvil de 390 px; comprobación de anchura a 320 y 1440 px sin desbordamiento horizontal en DOM.
- Menú móvil: apertura, navegación al portafolio y cierre automático comprobados.
- Navegación por anclas a portafolio, empresa y contacto comprobada.
- IDs únicos, enlaces internos y archivos referenciados desde HTML comprobados con Python.
- Número, mensajes, destino y atributos de apertura segura de los ocho enlaces de WhatsApp comprobados con Python y en el DOM del navegador.
- Logo comparado byte por byte con el archivo adjunto: idéntico. SHA-256: `40d4ab5ef75ea3902619b004b76f73963ef4772c39359ebde597043b04d4601b`.
- Capturas locales en `.local/review/`, excluidas de Git.

## Publicación y código fuente

- Usuario autorizó subir a GitHub y publicar el 27 de octubre de 2026.
- La terminal no tenía autenticación de GitHub; se utilizó la sesión web iniciada por el usuario para guardar el código en el repositorio indicado.
- Despliegue por carga directa. GitHub conserva el código; las actualizaciones del repositorio no despliegan automáticamente en este proyecto.

## Límites

- No se ha enviado una conversación de WhatsApp ni confirmado la titularidad de la cuenta por medios distintos a la confirmación del usuario.
- No se ha realizado una matriz exhaustiva de navegadores ni pruebas con dispositivos físicos.
- Los contenidos institucionales y comerciales provisionales requieren revisión antes de convertir este prototipo en la versión definitiva.
- Se conserva `noindex, nofollow` para la revisión compartida.

## Actualización del portafolio — 28 de octubre de 2026

- Sustituidas las cuatro líneas iniciales por las tres líneas confirmadas por el usuario y sus siete referencias exactas.
- Retirada la oferta de maquinaria amarilla; ajustados metadatos, portada, franja de líneas y pie de página.
- Once enlaces de WhatsApp: siete consultas por producto y cuatro consultas generales. Número y mensajes verificados con Python y en navegador.
- Revisión local visual de escritorio y móvil de 390 px; sin desbordamiento horizontal en móvil.
- No se añadieron especificaciones técnicas, beneficios ni capacidades no confirmadas.

## Rediseño de empresa y productos — 28 de octubre de 2026

- Texto empresarial sustituido por el texto exacto del usuario sobre cerca de 15 años; eliminados el recuadro del logo, su leyenda y el bloque provisional. Una sola acción de contacto en la sección.
- Logo transparente RGBA, manteniendo el JPEG original intacto. Revisión visual de formas, colores, proporción y texto sobre el fondo claro.
- Tres tarjetas blancas de igual ancho y altura en escritorio; acciones alineadas comprobadas mediante DOM. Tarjetas apiladas en móvil.
- Renders industriales generados con ImageGen y optimizados a WebP (unos 115 KB en total para los tres productos). Procedencia y prompts en ASSETS.md.
- Referencias en details/summary nativos: apertura con clic y teclado Enter comprobada; listas con los siete destinos originales de WhatsApp.
- Encabezados de empresa y productos visibles por debajo del encabezado fijo; empresa en móvil: sección a 83.8 px, encabezado fijo hasta 78 px.
- Sin desbordamiento horizontal a 390 y 320 px; imágenes cargadas correctamente.
- Validación Python de títulos, texto empresarial, única acción, 11 destinos WhatsApp, enlaces internos, recursos e IDs únicos.
