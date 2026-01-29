/* =====================
   TRANSLATIONS (FULL UI)
===================== */
const translations = {
  en: {
    navHome: "Home",
    navCategories: "Categories",
    navAbout: "About",
    heroTitle: "Voices of Nature",
    heroSubtitle: "Minimal • Emotional • Professional",
    forest: "Forest",
    sea: "Sea",
    mountain: "Mountain",
    forestDesc: "Calm, breath, roots",
    seaDesc: "Freedom, depth, silence",
    mountainDesc: "Strength, height, resilience",
    aboutTitle: "About This Project",
    aboutText1:
      "Nature Quotes is a carefully crafted web experience inspired by the calm, balance, and wisdom of nature.The project presents meaningful quotes through an elegant and minimal interface, designed to encourage reflection and inspiration.",
    aboutText2:
      "Developed with HTML, CSS, and JavaScript, the website focuses on smooth animations, advanced dark/light mode, multilingual support, and full responsiveness—delivering a modern, polished, and immersive user experience across all devices.",
    footerQuote:
      "Nature does not hurry, yet everything is accomplished.",
    back: "Back"
  },
  sq: {
    navHome: "Fillimi",
    navCategories: "Kategoritë",
    navAbout: "Rreth Projektit",
    heroTitle: "Zërat e Natyrës",
    heroSubtitle: "Minimal • Emocional • Profesional",
    forest: "Pylli",
    sea: "Deti",
    mountain: "Mali",
    forestDesc: "Qetësi, frymë, rrënjë",
    seaDesc: "Liri, thellësi, qetësi",
    mountainDesc: "Forcë, lartësi, qëndrueshmëri",
    aboutTitle: "Rreth Projektit",
    aboutText1:
      "Nature Quotes është një përvojë web e krijuar me kujdes, e frymëzuar nga qetësia, ekuilibri dhe mençuria e natyrës.Projekti paraqet citate kuptimplote përmes një ndërfaqeje elegante dhe minimale, të projektuar për të inkurajuar reflektimin dhe frymëzimin.",
    aboutText2:
      "E zhvilluar me HTML, CSS dhe JavaScript, faqja e internetit përqendrohet në animacione të lëmuara, modalitetin e avancuar të errët/të ndriçuar, mbështetjen shumëgjuhëshe dhe reagimin e plotë, duke ofruar një përvojë moderne, të rafinuar dhe gjithëpërfshirëse të përdoruesit në të gjitha pajisjet.",
    footerQuote:
      "Natyra nuk nxiton, por gjithçka realizon.",
    back: "Kthehu"
  }
};

/* =====================
   QUOTES (MORE)
===================== */
const quotesData = {
  en: {
    forest: [
      "Forest is the earth’s breath",
      "Silence speaks louder",
      "Roots hold life",
      "Leaves remember time",
      "Nature heals slowly",
      "Green calms the soul",
      "Life grows quietly",
      "Peace lives here",
      "Stillness is power",
      "Breath of the planet"
    ],
    sea: [
      "The sea never forgets",
      "Waves speak softly",
      "Freedom is blue",
      "Depth holds truth",
      "Calm hides strength",
      "Endless horizon",
      "Water remembers",
      "Peace flows",
      "Blue silence",
      "The sea listens"
    ],
    mountain: [
      "Mountains shape minds",
      "Strength is silent",
      "Higher thoughts",
      "Air is freedom",
      "Stillness above",
      "Power in height",
      "Clarity lives here",
      "Calm is earned",
      "Solid and true",
      "Stand firm"
    ]
  },
  sq: {
    forest: [
      "Pylli është fryma e tokës",
      "Heshtja flet më fort",
      "Rrënjët mbajnë jetën",
      "Gjethet kujtojnë kohën",
      "Natyra shëron ngadalë",
      "E gjelbra qetëson shpirtin",
      "Jeta rritet në heshtje",
      "Qetësia banon këtu",
      "Forcë e butë",
      "Frymëmarrja e planetit"
    ],
    sea: [
      "Deti nuk harron",
      "Valët flasin qetë",
      "Liria është blu",
      "Thellësia ruan të vërtetën",
      "Qetësia fsheh forcë",
      "Horizont pa fund",
      "Uji kujton",
      "Paqe që rrjedh",
      "Heshtje blu",
      "Deti dëgjon"
    ],
    mountain: [
      "Malet formojnë mendjen",
      "Forca është e qetë",
      "Mendime të larta",
      "Ajri është liri",
      "Qetësi mbi gjithçka",
      "Fuqi në lartësi",
      "Kthjelltësi",
      "Qëndro fort",
      "I palëkundur",
      "Forcë e pastër"
    ]
  }
};

let lang = "en";
let activeCategory = null;

/* =====================
   LANGUAGE SWITCH
===================== */
function applyLanguage() {
  const t = translations[lang];

  document.querySelector("nav a:nth-child(1)").innerText = t.navHome;
  document.querySelector("nav a:nth-child(2)").innerText = t.navCategories;
  document.querySelector("nav a:nth-child(3)").innerText = t.navAbout;

  document.querySelector(".hero h1").innerText = t.heroTitle;
  document.querySelector(".hero p").innerText = t.heroSubtitle;

  const cards = document.querySelectorAll(".card");
  cards[0].querySelector("h3").innerText = t.forest;
  cards[0].querySelector("p").innerText = t.forestDesc;
  cards[1].querySelector("h3").innerText = t.sea;
  cards[1].querySelector("p").innerText = t.seaDesc;
  cards[2].querySelector("h3").innerText = t.mountain;
  cards[2].querySelector("p").innerText = t.mountainDesc;

  document.querySelector(".about h2").innerText = t.aboutTitle;
  document.querySelectorAll(".about p")[0].innerText = t.aboutText1;
  document.querySelectorAll(".about p")[1].innerText = t.aboutText2;

  document.querySelector(".footer .quote").innerText = t.footerQuote;
  document.querySelector(".back").innerText = `← ${t.back}`;

  if (activeCategory) openCategory(activeCategory);
}

/* =====================
   CATEGORY
===================== */
function openCategory(cat) {
  activeCategory = cat;
  document.getElementById("categories").style.display = "none";
  document.getElementById("quotesPage").style.display = "block";

  const container = document.getElementById("quotes");
  container.innerHTML = "";

  quotesData[lang][cat].forEach(q => {
    container.innerHTML += `
      <div class="quote">
        <i class="fa-solid fa-leaf"></i> ${q}
      </div>
    `;
  });
}

function goBack() {
  activeCategory = null;
  document.getElementById("quotesPage").style.display = "none";
  document.getElementById("categories").style.display = "grid";
}

/* =====================
   BUTTONS
===================== */
document.getElementById("langBtn").onclick = () => {
  lang = lang === "en" ? "sq" : "en";
  applyLanguage();
};

document.getElementById("themeBtn").onclick = () => {
  const html = document.documentElement;
  const dark = html.getAttribute("data-theme") === "dark";
  html.setAttribute("data-theme", dark ? "light" : "dark");

  document.getElementById("logo").src =
    dark ? "logo _white.png" : "logo_dark.png";
  document.getElementById("footerLogo").src =
    dark ? "logo _white.png" : "logo_dark.png";
};

document.getElementById("hamburger").onclick = () => {
  document.getElementById("nav").classList.toggle("active");
};

/* =====================
   SCROLL ANIMATIONS
===================== */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => e.isIntersecting && e.target.classList.add("active"));
});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

applyLanguage();
