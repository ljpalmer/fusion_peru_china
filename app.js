const dishes = {
  "arroz-chaufa": {
    title: "Arroz Chaufa",
    description: "Arroz salteado al wok con pollo, huevo, cebolla china y sillao, un clásico de la cocina chifa.",
    ingredients: ["Arroz cocido", "Pollo", "Huevo", "Cebolla china", "Sillao", "Aceite de ajonjolí"],
    image: "./assets/dishes/arroz-chaufa.png",
  },
  "tallarin-saltado": {
    title: "Tallarín Saltado",
    description: "Tallarines salteados con carne, verduras y salsa oriental con un toque peruano muy sabroso.",
    ingredients: ["Tallarines", "Carne de res", "Cebolla", "Tomate", "Sillao", "Ají amarillo"],
    image: "./assets/dishes/tallarin-saltado.png",
  },
  "lomo-saltado": {
    title: "Lomo Saltado",
    description: "Lomo de res con cebolla, tomate, ají y papas fritas, emblema de la mezcla criolla y china.",
    ingredients: ["Lomo de res", "Cebolla", "Tomate", "Ají amarillo", "Papas fritas", "Sillao"],
    image: "./assets/dishes/lomo-saltado.png",
  },
  aeropuerto: {
    title: "Aeropuerto",
    description: "Combinación generosa de arroz chaufa, tallarín y carnes, ideal para porciones abundantes.",
    ingredients: ["Arroz chaufa", "Tallarín salteado", "Pollo", "Carne", "Huevo", "Verduras"],
    image: "./assets/dishes/aeropuerto.png",
  },
  wantan: {
    title: "Wantan",
    description: "Masitas rellenas fritas o en sopa, con carne sazonada y una textura crujiente o suave.",
    ingredients: ["Masa wantan", "Carne molida", "Cebolla china", "Ajo", "Sillao", "Caldo o aceite para freír"],
    image: "./assets/dishes/wantan.png",
  },
  "kamlu-wantan": {
    title: "Kamlu Wantan",
    description: "Wantan crocante cubierto con salsa agridulce, verduras y frutas en un plato vistoso y festivo.",
    ingredients: ["Wantan frito", "Piña", "Zanahoria", "Pimiento", "Salsa agridulce", "Verduras mixtas"],
    image: "./assets/dishes/kamlu-wantan.png",
  },
};

const titleEl = document.getElementById("dish-title");
const imageEl = document.getElementById("dish-image");
const descriptionEl = document.getElementById("dish-description");
const ingredientsEl = document.getElementById("dish-ingredients");
const qrGridEl = document.getElementById("qr-grid");

function renderDish(slug) {
  const dish = dishes[slug] || dishes["arroz-chaufa"];
  titleEl.textContent = dish.title;
  imageEl.src = dish.image;
  imageEl.alt = dish.title;
  descriptionEl.textContent = dish.description;
  ingredientsEl.innerHTML = dish.ingredients.map((item) => `<li>${item}</li>`).join("");
  document.title = `${dish.title} | Fusión Perú China`;
}

function buildDishUrl(slug) {
  const url = new URL(window.location.href);
  url.hash = slug;
  url.search = "";
  return url.href;
}

function renderQrGrid() {
  if (!qrGridEl) {
    return;
  }

  const cards = Object.entries(dishes)
    .map(([slug, dish]) => {
      const targetUrl = buildDishUrl(slug);
      const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=10&data=${encodeURIComponent(targetUrl)}`;

      return `
        <article class="qr-card">
          <div class="qr-card__top">
            <img src="${qrImageUrl}" alt="QR de ${dish.title}">
            <div>
              <h3>${dish.title}</h3>
              <p>${dish.description}</p>
            </div>
          </div>
          <a class="qr-card__link" href="${targetUrl}">${targetUrl}</a>
        </article>
      `;
    })
    .join("");

  qrGridEl.innerHTML = cards;
}

function route() {
  const hash = window.location.hash.replace(/^#\/?/, "");
  const slug = dishes[hash] ? hash : "arroz-chaufa";
  document.body.classList.toggle("focus-mode", Boolean(dishes[hash]));
  renderDish(slug);
}

window.addEventListener("hashchange", route);
renderQrGrid();
route();
