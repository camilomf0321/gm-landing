# GM Transportes e Inversiones S.A.S.

Prototipo estático, responsive y sin dependencias de ejecución. El usuario autorizó subir el prototipo y publicarlo para compartirlo el 27 de octubre de 2026.

## Vista local

Desde la raíz del repositorio:

```sh
python3 -m http.server 8080 --directory public
```

Abrir http://localhost:8080. No necesita instalación, compilación ni claves API.

## Estructura y edición

- `public/index.html`: textos, secciones, productos y metadatos. Cada sección tiene un ID legible.
- `public/styles/main.css`: estilos, variables de color y adaptaciones para móvil.
- `public/scripts/config.js`: número y mensaje de WhatsApp.
- `public/scripts/main.js`: menú móvil y consultas de producto.
- `public/assets/`: logo original y fotografía almacenados en el proyecto.
- `public/_headers`: cabeceras de seguridad para Cloudflare Pages.
- `ASSETS.md`: procedencia y uso de imágenes.

WhatsApp confirmado: **+57 316 395 8250**. Los enlaces abren una conversación con un mensaje según la línea seleccionada; no envían mensajes automáticamente. Para cambiarlo, editar `whatsappNumber` en `config.js` con el número confirmado en formato internacional, solo dígitos. La página adapta el aviso de contacto automáticamente. Mientras esté vacío o no tenga formato válido, los botones muestran un diálogo informativo y no envían datos. Verificar el destino real del número y probar cada línea antes de publicar.

Los contenidos comerciales se editan directamente en HTML; no hace falta cambiar JavaScript. Las descripciones actuales son orientativas y requieren aprobación. No se presentan clientes, años de experiencia, certificaciones, cobertura ni capacidades no verificadas.

## Publicación gratuita en Cloudflare Pages (pendiente de aprobación)

1. Aprobar contenido y cambios antes de subirlos al repositorio `camilomf0321/gm-landing`.
2. En Cloudflare: **Workers & Pages → Create application → Pages → Connect to Git** y seleccionar el repositorio. Los nombres del panel pueden variar.
3. Elegir la rama `main`, framework **None**, comando de compilación `exit 0` y directorio de salida **public**. No se necesitan variables de entorno.
4. Desplegar usando el subdominio gratuito `pages.dev`; no es necesario comprar un dominio.
5. Comprobar HTTPS, recursos, enlaces, menú móvil y WhatsApp en la URL definitiva.

Guía oficial: https://developers.cloudflare.com/pages/framework-guides/deploy-anything/

El sitio puede alojarse como archivos estáticos sin Workers ni funciones de pago. Consultar las condiciones y límites vigentes del plan gratuito de Cloudflare antes de desplegar. No se ha creado ningún proyecto de Cloudflare ni se ha publicado el sitio.

## Antes de publicar

- Aprobar textos, tono visual y uso de fotografía ilustrativa.
- Confirmar correo, dirección, cobertura y horario. WhatsApp ya fue confirmado.
- Completar reseña empresarial y validar las cuatro líneas; confirmar referencias, fichas, presentaciones, modalidad del servicio y disponibilidad.
- Verificar el nombre legal y los datos que deban aparecer en el sitio definitivo.
- Sustituir los textos de borrador y retirar la franja de prototipo y notas provisionales solo después de aprobar la información.
- Retirar la etiqueta `robots` con `noindex, nofollow` de `index.html` cuando deba indexarse la versión final; preparar metadatos sociales y URL canónica al conocer el dominio.
- Revisar si el contenido final requiere información de privacidad, especialmente si se incorporan formularios o analítica. Este prototipo no incluye cookies, analítica ni formularios de captura.
- Autorización para subir y publicar recibida; verificar el resultado del despliegue.
