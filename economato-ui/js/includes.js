// Inserta header y footer en los contenedores con data-include
// Requiere servir por HTTP (Live Server o http.server). No funciona abriendo el .html directo por file://
async function inject(selector, url) {
const host = document.querySelector(selector);
if (!host) return;
const res = await fetch(url);
const html = await res.text();
host.innerHTML = html;
}


// Llamadas típicas (usa rutas relativas a tu servidor local)
inject('[data-include="header"]', 'partials/header.html');
inject('[data-include="footer"]', 'partials/footer.html');