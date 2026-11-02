const pages = [...document.querySelectorAll('.page-open')];
const viewer = document.querySelector('#viewer');
const stage = document.querySelector('#viewer-stage');
const image = document.querySelector('#viewer-image');
const title = document.querySelector('#viewer-title');
const zoom = document.querySelector('#zoom');
const previous = document.querySelector('#previous');
const next = document.querySelector('#next');
const index = document.querySelector('.index');
let current = 0;

function showPage(number) {
  current = Math.max(0, Math.min(number, pages.length - 1));
  const source = pages[current];
  stage.classList.remove('is-zoomed');
  stage.classList.add('is-loading');
  zoom.textContent = '放大细节';
  zoom.setAttribute('aria-pressed', 'false');
  title.textContent = `${source.dataset.project} · ${String(current + 1).padStart(2, '0')} / ${pages.length}`;
  image.alt = source.querySelector('img').alt;
  image.src = source.dataset.large;
  previous.disabled = current === 0;
  next.disabled = current === pages.length - 1;
  stage.scrollTo(0, 0);
}

pages.forEach((button, number) => button.addEventListener('click', () => {
  showPage(number);
  viewer.showModal();
}));

function toggleZoom() {
  const expanded = stage.classList.toggle('is-zoomed');
  zoom.textContent = expanded ? '适合屏幕' : '放大细节';
  zoom.setAttribute('aria-pressed', String(expanded));
  stage.scrollTo(0, 0);
}

zoom.addEventListener('click', toggleZoom);
image.addEventListener('click', toggleZoom);
image.addEventListener('load', () => stage.classList.remove('is-loading'));
image.addEventListener('error', () => {
  stage.classList.remove('is-loading');
  title.textContent = '图片加载失败，请关闭后重试，或下载 PDF 查看。';
});
previous.addEventListener('click', () => showPage(current - 1));
next.addEventListener('click', () => showPage(current + 1));
document.querySelector('#close-viewer').addEventListener('click', () => viewer.close());
viewer.addEventListener('close', () => pages[current].focus({ preventScroll: true }));
viewer.addEventListener('keydown', (event) => {
  if (stage.classList.contains('is-zoomed')) return;
  if (event.key === 'ArrowLeft') { event.preventDefault(); showPage(current - 1); }
  if (event.key === 'ArrowRight') { event.preventDefault(); showPage(current + 1); }
});
index.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { index.open = false; }));
document.addEventListener('click', event => { if (!index.contains(event.target)) index.open = false; });
document.addEventListener('keydown', event => { if (event.key === 'Escape') index.open = false; });
document.querySelectorAll('.page img').forEach(img => img.addEventListener('error', () => {
  const figure = img.closest('figure');
  if (figure.querySelector('.image-error')) return;
  const message = document.createElement('p');
  message.className = 'image-error';
  const link = document.createElement('a');
  link.href = 'assets/FengZiqian.pdf';
  link.textContent = '图片暂时无法加载，点击查看原始 PDF。';
  message.append(link);
  figure.append(message);
}));
