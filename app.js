const dishes = {
  "arroz-chaufa": {
    title: "Arroz Chaufa",
    summary: "El arroz frito del chifa que convirtió un alimento de aprovechamiento en una insignia de fiesta.",
    story: "Nació de la costumbre cantonesa de saltear arroz ya cocido hasta dejarlo suelto, aromático y brillante.",
    origin: "La técnica del wok y el fuego alto le dan su textura seca y ordenada, muy distinta al arroz graneado de olla.",
    influence: "China aporta el salteado veloz; Perú suma pollo, cebolla china y sillao hasta volverlo cotidiano.",
    curiosity: "En muchas casas peruanas se prepara con lo que quedó del día anterior, pero termina pareciendo un plato de celebración.",
    ingredients: ["Arroz cocido", "Pollo", "Huevo", "Cebolla china", "Sillao", "Aceite de ajonjolí"],
    flags: ["🇵🇪", "🇨🇳"],
    image: "./assets/dishes/arroz-chaufa.jpg",
  },
  "tallarin-saltado": {
    title: "Tallarín Saltado",
    summary: "Fideos al wok con jugo, carne y verduras: una lectura peruana del salteado chino.",
    story: "Los fideos viajaron desde las cocinas chinas y encontraron en Perú un gusto por el jugo, el tomate y el ají.",
    origin: "El salteado rápido mantiene la textura de la pasta y deja una salsa ligera que abraza cada hebra.",
    influence: "La cocina china aporta velocidad y control del fuego; el Perú le suma carne, tomate y un punto de picante.",
    curiosity: "Su salsa es más suelta que la de otros fideos orientales, porque aquí el pan y el arroz suelen acompañar la mesa.",
    ingredients: ["Tallarines", "Carne de res", "Cebolla", "Tomate", "Sillao", "Ají amarillo"],
    flags: ["🇵🇪", "🇨🇳"],
    image: "./assets/dishes/tallarin-saltado.jpg",
  },
  "lomo-saltado": {
    title: "Lomo Saltado",
    summary: "Uno de los grandes emblemas de la cocina mestiza peruana, servido siempre con energía y jugo.",
    story: "Une la técnica china del salteado con el gusto criollo por la carne, la papa frita y el tomate jugoso.",
    origin: "El wok, el corte rápido y el fuego intenso dan el carácter del plato; el acompañamiento lo vuelve peruano.",
    influence: "China aporta la lógica del salteado; Perú agrega cebolla, ají amarillo, papa frita y pan en la mesa.",
    curiosity: "Su jugo pide arroz al lado, una señal clara de cómo las costumbres peruanas terminaron moldeando la receta.",
    ingredients: ["Lomo de res", "Cebolla", "Tomate", "Ají amarillo", "Papas fritas", "Sillao"],
    flags: ["🇵🇪", "🇨🇳"],
    image: "./assets/dishes/lomo-saltado.jpg",
  },
  aeropuerto: {
    title: "Aeropuerto",
    summary: "Un plato abundante que junta arroz y tallarines como si varias rutas aterrizaran en la misma mesa.",
    story: "Su nombre describe una pista llena de movimiento: muchos elementos que coinciden en una sola porción generosa.",
    origin: "Suele mezclar chaufa y tallarín en una misma base, siguiendo la lógica del compartir y del plato abundante.",
    influence: "La abundancia es muy peruana; el uso del wok y del arroz salteado lo conecta con el universo chifa.",
    curiosity: "Es el pedido típico cuando la mesa quiere probar un poco de todo sin renunciar a la generosidad.",
    ingredients: ["Arroz chaufa", "Tallarín salteado", "Pollo", "Carne", "Huevo", "Verduras"],
    flags: ["🇵🇪", "🇨🇳"],
    image: "./assets/dishes/aeropuerto.jpg",
  },
  wantan: {
    title: "Wantan",
    summary: "La masa rellena que puede ser entrada, sopa o fritura según el momento de la comida.",
    story: "Llegó desde la tradición cantonesa y en Perú se volvió parte del ritual de entradas y sopas familiares.",
    origin: "La masa fina protege el relleno y puede quedar crujiente al freírse o suave al descansar en caldo.",
    influence: "China aporta la forma y la técnica; Perú la acompaña con salsas, ají y una costumbre más festiva.",
    curiosity: "En muchas mesas el wantán abre la comida antes de que aparezcan los grandes salteados.",
    ingredients: ["Masa wantan", "Carne molida", "Cebolla china", "Ajo", "Sillao", "Caldo o aceite para freír"],
    flags: ["🇵🇪", "🇨🇳"],
    image: "./assets/dishes/wantan.jpg",
  },
  "kamlu-wantan": {
    title: "Kamlu Wantan",
    summary: "La versión agridulce, colorida y festiva del wantán que muestra la adaptación peruana.",
    story: "Es una lectura local del wantán crocante con salsa brillante, verduras y fruta para dar contraste.",
    origin: "El equilibrio entre dulce, ácido y crujiente es su sello; la presentación es casi ceremonial.",
    influence: "La base es china, pero el gesto de volverlo tan vistoso y festivo habla con claridad del Perú.",
    curiosity: "También se escribe 'kam lu wantán' y suele ser uno de los platos más fotografiados de la mesa.",
    ingredients: ["Wantan frito", "Piña", "Zanahoria", "Pimiento", "Salsa agridulce", "Verduras mixtas"],
    flags: ["🇵🇪", "🇨🇳"],
    image: "./assets/dishes/kamlu-wantan.jpg",
  },
  "pie-de-zapallo-de-carga": {
    title: "Pie de Zapallo de Carga",
    summary: "Un postre de vitrina con sabor a hogar, horno y mesa compartida.",
    story: "El zapallo de carga aporta color y textura a una receta de repostería doméstica y cálida.",
    origin: "Masa, horno y relleno cremoso forman un cierre dulce para el recorrido gastronómico.",
    influence: "Su lenguaje es sobre todo peruano: producto local, técnica casera y gusto por el postre de familia.",
    curiosity: "Su color natural permite un relleno muy dorado sin necesidad de exceso de azúcar.",
    ingredients: ["Zapallo de carga", "Harina", "Mantequilla", "Azúcar", "Huevos", "Canela"],
    flags: ["🇵🇪"],
    image: "./assets/dishes/pie-de-zapallo-de-carga.jpg",
  },
  "alfajores-de-zapallo": {
    title: "Alfajores de Zapallo",
    summary: "Bocados suaves y aromáticos que llevan el zapallo al territorio de la merienda.",
    story: "Toman la forma de un clásico sudamericano y lo vuelven más fragante con zapallo y un relleno dulce.",
    origin: "La textura tierna y la cobertura ligera los acercan a la repostería casera de toda la vida.",
    influence: "El guiño es peruano por el uso del zapallo y por esa memoria de mesa simple y generosa.",
    curiosity: "Funcionan muy bien como cierre suave después de los salteados, sin competir con ellos.",
    ingredients: ["Zapallo", "Harina", "Maicena", "Dulce de leche", "Azúcar impalpable", "Canela"],
    flags: ["🇵🇪"],
    image: "./assets/dishes/alfajores-de-zapallo.jpg",
  },
  "te-chino": {
    title: "Té Chino",
    summary: "La infusión que abre y cierra la mesa chifa, servida caliente y sin límite en cada visita.",
    story: "Llegó junto a los primeros inmigrantes cantoneses como una costumbre de sobremesa ligera y digestiva.",
    origin: "Se prepara con hojas de té rojo o negro en infusión larga, pensada para acompañar comidas de sabores intensos.",
    influence: "China aporta la hoja y el ritual; Perú lo convierte en cortesía de casa, servido gratis y de manera constante.",
    curiosity: "Que la tetera nunca se vacíe es, para muchos comensales peruanos, tan parte del chifa como el propio chaufa.",
    ingredients: ["Hojas de té rojo", "Agua caliente", "Tetera de barro o metal"],
    flags: ["🇵🇪", "🇨🇳"],
    image: "./assets/dishes/te-chino.jpg",
  },
};

const siteBaseUrl = "https://fusion-peru-china.vercel.app/";
const titleEl = document.getElementById("dish-title");
const imageEl = document.getElementById("dish-image");
const flagsEl = document.getElementById("dish-flags");
const summaryEl = document.getElementById("dish-summary");
const storyEl = document.getElementById("dish-story");
const originEl = document.getElementById("dish-origin");
const influenceEl = document.getElementById("dish-influence");
const curiosityEl = document.getElementById("dish-curiosity");
const ingredientsEl = document.getElementById("dish-ingredients");
const qrGridEl = document.getElementById("qr-grid");

function renderDish(slug) {
  const dish = dishes[slug] || dishes["arroz-chaufa"];
  titleEl.textContent = dish.title;
  if (flagsEl) {
    flagsEl.innerHTML = dish.flags.map((flag) => `<span class="dish-flag" aria-hidden="true">${flag}</span>`).join("");
    flagsEl.hidden = !dish.flags || dish.flags.length === 0;
  }
  imageEl.src = dish.image;
  imageEl.alt = dish.title;
  summaryEl.textContent = dish.summary;
  storyEl.textContent = dish.story;
  originEl.textContent = dish.origin;
  influenceEl.textContent = dish.influence;
  curiosityEl.textContent = dish.curiosity;
  ingredientsEl.innerHTML = dish.ingredients.map((item) => `<li>${item}</li>`).join("");
  document.title = `${dish.title} | Fusión Perú China`;
}

function buildDishUrl(slug) {
  const url = new URL(siteBaseUrl);
  url.hash = slug;
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
            <img src="${qrImageUrl}" alt="QR de ${dish.title}" loading="lazy" decoding="async">
            <div>
              <h3>${dish.title}</h3>
              <p>${dish.summary}</p>
            </div>
          </div>
          <a class="qr-card__link" href="${targetUrl}">Abrir ficha</a>
        </article>
      `;
    })
    .join("");

  qrGridEl.innerHTML = cards;
}

function route() {
  const hash = window.location.hash.replace(/^#\/?/, "");
  const isDishRoute = Boolean(dishes[hash]);
  const slug = isDishRoute ? hash : "arroz-chaufa";
  document.body.classList.toggle("focus-mode", isDishRoute);
  renderDish(slug);
  if (isDishRoute) {
    document.getElementById("ficha").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

window.addEventListener("hashchange", route);
renderQrGrid();
route();
