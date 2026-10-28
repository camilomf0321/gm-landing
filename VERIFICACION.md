# Verificación local del prototipo

Revisión: 27 de octubre de 2026 (America/Bogota).

- Servido con `python3 -m http.server 8080 --bind 127.0.0.1 --directory public`.
- Respuesta HTTP de la portada: `200 OK`, tipo `text/html`.
- Revisión visual en navegador de escritorio y móvil de 390 px; comprobación adicional de anchura a 320 y 1440 px.
- Sin desbordamiento horizontal en las comprobaciones DOM de 320 y 1440 px ni en la vista de escritorio normal (el ancho útil excluye la barra de desplazamiento).
- Menú móvil: apertura, enlace al portafolio y cierre automático comprobados.
- Botón de cotización general: abre el diálogo de número pendiente. El botón Entendido lo cierra.
- Consulta de emulsiones: muestra el producto correcto en el diálogo. El botón Cerrar funciona.
- Navegación por anclas al portafolio, empresa y contacto comprobada.
- IDs únicos, enlaces internos y archivos referenciados desde HTML comprobados con Python.
- Logo comparado byte por byte con el archivo adjunto: idéntico. SHA-256: `40d4ab5ef75ea3902619b004b76f73963ef4772c39359ebde597043b04d4601b`.
- Capturas locales de revisión en `.local/review/` (excluidas de Git).

## Límites y comprobaciones pendientes

- No se ha enviado ninguna conversación real de WhatsApp: falta confirmar el número y comprobar su destino.
- No se ha desplegado en Cloudflare. Sus cabeceras `_headers`, HTTPS y URL definitiva deben verificarse después del despliegue autorizado. El servidor Python no aplica `_headers`.
- No se ha realizado una matriz exhaustiva de navegadores ni pruebas con dispositivos físicos.
- Toda la información institucional y comercial marcada como provisional requiere aprobación.
- No se han creado commits ni se han subido cambios a GitHub.

## Actualización de WhatsApp y publicación

- Usuario confirmó +57 316 395 8250 y autorizó subir y publicar.
- Ocho llamadas de contacto enlazadas a `https://wa.me/573163958250`, con mensaje según la línea. Funcionan como enlaces incluso sin JavaScript.
- Número, mensajes, destino y atributos de apertura de los ocho enlaces comprobados automáticamente; enlaces renderizados comprobados en navegador local.
- Primer commit local creado. Intento de push rechazado por falta de autenticación de GitHub; no se subió.
- Cloudflare Dashboard requiere inicio de sesión. No se ha publicado y aún no existe un enlace público verificado.
- ZIP `.local/gm-landing-pages.zip` preparado con `index.html` y recursos en la raíz, para Direct Upload en Cloudflare Pages.
