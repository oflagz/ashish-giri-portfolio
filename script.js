const asset = (name) => `assets/travel-pictures/${name}`;

const labHighlights = [
  {
    title: "McGill University",
    body: "Graduate Research Assistant in Canada working on auxetic gels for post-nucleotomy disc reconstruction, bio-orthogonal cell-cell adhesion, stem-cell retention, and a gel-free bio-ink for 3-D organoid printing."
  },
  {
    title: "Institute of Bio-polymer",
    body: "DAAD RISE Intern in Germany. Built a new dog-bone sample workflow for irradiated PLA and PBS, cut experimental time by 2.5 months, reduced costs by 10K, and optimized multi-temperature irradiation testing."
  },
  {
    title: "Composite Research Network Lab + Vanderlande",
    body: "MITACS Accelerate Intern in Canada. Developed HDPE-hemp-HDPE biocomposite workflows, designed an in-house single-screw extrusion system that saved 30K, and improved carbon-fibre resin infusion efficiency by 20%."
  },
  {
    title: "Harvard Medical School",
    body: "Research Intern in the USA. Built a 98% accurate deep-learning multiclass image classifier for single-cell morphology by translating 3-D cell structure into 2-D image inputs."
  },
  {
    title: "Micro-biome Research Lab",
    body: "Research Intern in Canada. Worked on ZnO nanoparticle coatings, antimicrobial resistance, leaching behavior in aqueous environments, and mass spectrometry analysis using two-way ANOVA."
  }
];

const teachingCards = [
  {
    title: "McGill University / Mechanics + Thermodynamics",
    body: "Teaching Assistant since January 2026. Ran weekly tutorials for 72 students and helped with grading, lecture materials, and exams."
  },
  {
    title: "McGill University / Statics",
    body: "Teaching Assistant in Fall 2025. Led weekly tutorial sessions for 180 students and helped build teaching material for the course."
  },
  {
    title: "UBC / System Dynamics + General Mechanics",
    body: "Teaching Assistant in Fall 2024. Ran weekly review sessions for one section of 47 students and three sections of 30 students each, helping lift the course average by 5% from the previous year."
  },
  {
    title: "UBC / Advanced Manufacturing",
    body: "Teaching Assistant in Fall 2023. Supervised a cohort of 40 students in the machine shop as they built locomotive-model or clamp design projects, while running regular tutorials."
  },
  {
    title: "Supplemental Learning Hub",
    body: "Supplemental Learning Leader from 2022 to 2023. Organized review sessions and extra support sessions that helped move the course average from 65% to 75% in engineering mechanics."
  }
];

const projectCards = [
  {
    title: "Lead-shielding Workflow for Skin Cancer Treatment",
    body: "Built an automated Blender API and Python workflow that imported 3-D facial scans and generated positive and negative molds for custom lead-shielding masks, cutting mold fabrication time by one week."
  },
  {
    title: "Gearbox Design",
    body: "Designed a one-stage reduction gearbox for a vessel propulsion system in SolidWorks and used von Mises stress FEA in ABAQUS to predict the first point of failure."
  },
  {
    title: "Thermal Actuator-Controlled Micro-grippers",
    body: "Designed and fabricated a 10-micron thermally actuated micro-gripper for precise red-blood-cell manipulation using stereolithography, OpenCV, and K-Layout."
  }
];

const scholarshipCards = [
  {
    title: "Graduate Student Scholarship / McGill",
    body: "2025 to 2027. 28,000 CAD per year."
  },
  {
    title: "Donald A. Wehrung International Student Award / UBC",
    body: "2020 to 2024. 79,000 CAD per year."
  },
  {
    title: "Dr. Spiro Yannacopoulos International Engineering Student Memorial Award / UBC",
    body: "Awarded in 2021, 2022, and 2024. 10,000 CAD each time."
  },
  {
    title: "RISE Globalink Scholarship / MITACS + DAAD",
    body: "2024. 6,000 CAD."
  },
  {
    title: "Deputy Vice Chancellor's Award / UBC",
    body: "Awarded in 2021, 2022, 2023, and 2024. 500 CAD each time."
  },
  {
    title: "Multidisciplinary Undergraduate Research in Health Award",
    body: "2021. 6,000 CAD from the Materials and Manufacturing Research Institute at UBC."
  }
];

const soccerPhotos = [
  { file: "photo_2026-03-29_19-43-46.jpg", caption: "On the ball" },
  { file: "photo_2026-03-29_19-43-44.jpg", caption: "Football and community" },
  { file: "photo_2026-03-29_19-43-43.jpg", caption: "Not football, but still serious hang time" },
  { file: "photo_2026-03-29_19-43-41.jpg", caption: "Number 09" }
];

const cookingPhotos = [
  { file: "photo_2026-03-29_19-43-35.jpg", caption: "Steak night" },
  { file: "photo_2026-03-29_19-42-46.jpg", caption: "Creamy chicken pan" },
  { file: "photo_2026-03-29_19-42-18.jpg", caption: "Spiced chicken" },
  { file: "photo_2026-03-29_19-42-17.jpg", caption: "Loaded wrap" },
  { file: "photo_2026-03-29_19-42-15.jpg", caption: "Pasta bowl" },
  { file: "photo_2026-03-29_19-42-13.jpg", caption: "Broth and noodles" },
  { file: "photo_2026-03-29_19-42-12.jpg", caption: "Red sauce pasta" },
  { file: "photo_2026-03-29_19-42-09.jpg", caption: "Skillet chicken" },
  { file: "photo_2026-03-29_19-42-01.jpg", caption: "Skewers and sides" },
  { file: "photo_2026-03-29_19-41-53.jpg", caption: "Chicken noodle soup" }
];

const travelAtlas = [
  {
    country: "Nepal",
    note: "Home, mountains, temples, early flights, and the kind of horizon that makes everything else feel smaller.",
    photos: [
      "photo_2026-03-29_20-56-45.jpg",
      "photo_2026-03-29_20-56-44.jpg",
      "photo_2026-03-29_20-56-40.jpg",
      "photo_2026-03-29_19-42-35.jpg",
      "photo_2026-03-29_20-56-43.jpg",
      "photo_2026-03-29_20-56-42.jpg",
      "photo_2026-03-29_20-56-39.jpg",
      "photo_2026-03-29_20-56-37.jpg",
      "photo_2026-03-29_20-56-36.jpg",
      "photo_2026-03-29_19-42-23.jpg",
      "photo_2026-03-29_19-42-21.jpg"
    ]
  },
  {
    country: "Canada",
    note: "Road trips, changing seasons, water, skyline, and the kinds of quiet scenes that kept ending up in my camera roll.",
    photos: [
      "photo_2026-03-29_19-43-40.jpg",
      "photo_2026-03-29_19-43-36.jpg",
      "photo_2026-03-29_19-42-42.jpg",
      "photo_2026-03-29_19-43-00.jpg",
      "photo_2026-03-29_19-42-47.jpg",
      "photo_2026-03-29_19-42-44.jpg",
      "photo_2026-03-29_19-42-11.jpg",
      "photo_2026-03-29_19-42-04.jpg",
      "photo_2026-03-29_19-42-02.jpg",
      "photo_2026-03-29_19-42-58.jpg",
      "photo_2026-03-29_19-42-41.jpg",
      "photo_2026-03-29_19-42-07.jpg",
      "photo_2026-03-29_19-41-59.jpg",
      "photo_2026-03-29_19-41-57.jpg",
      "photo_2026-03-29_19-41-55.jpg"
    ]
  },
  {
    country: "Germany",
    note: "Old towns, river views, church silhouettes, and streets that looked like they wanted to be walked slowly.",
    photos: [
      "photo_2026-03-29_19-43-27.jpg",
      "photo_2026-03-29_19-43-26.jpg",
      "photo_2026-03-29_19-43-24.jpg",
      "photo_2026-03-29_19-43-20.jpg",
      "photo_2026-03-29_19-43-18.jpg",
      "photo_2026-03-29_19-43-17.jpg",
      "photo_2026-03-29_19-43-23.jpg",
      "photo_2026-03-29_19-43-21.jpg",
      "photo_2026-03-29_19-43-02.jpg",
      "photo_2026-03-29_19-43-33.jpg",
      "photo_2026-03-29_19-42-56.jpg",
      "photo_2026-03-29_19-41-50.jpg",
      "photo_2026-03-29_19-43-30.jpg"
    ]
  },
  {
    country: "Prague",
    note: "Big skyline energy, pale facades, and castle views that looked unreal in clear light.",
    photos: [
      "photo_2026-03-29_19-43-32.jpg",
      "photo_2026-03-29_19-42-29.jpg",
      "photo_2026-03-29_19-42-25.jpg"
    ]
  },
  {
    country: "Austria",
    note: "Vienna meant stained glass, museum facades, and Schonbrunn looking like it was built for a wide lens.",
    photos: [
      "photo_2026-03-29_19-43-29.jpg",
      "photo_2026-03-29_19-42-30.jpg",
      "photo_2026-03-29_19-43-04.jpg",
      "photo_2026-03-29_19-42-38.jpg"
    ]
  },
  {
    country: "Netherlands",
    note: "Amsterdam in rain, flowers, canals, and buildings that somehow look composed even when the weather is not.",
    photos: [
      "photo_2026-03-29_19-43-15.jpg",
      "photo_2026-03-29_19-43-13.jpg",
      "photo_2026-03-29_19-43-12.jpg",
      "photo_2026-03-29_19-43-10.jpg",
      "photo_2026-03-29_19-43-08.jpg",
      "photo_2026-03-29_19-43-05.jpg",
      "photo_2026-03-29_19-42-26.jpg"
    ]
  }
];

const createThumb = ({ file, caption }) => `
  <button class="thumb-button clickable-image" type="button" data-image="${asset(file)}" data-caption="${caption}">
    <img src="${asset(file)}" alt="${caption}" />
    <span>${caption}</span>
  </button>
`;

const renderCards = (containerId, cards) => {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = cards
    .map(
      (card) => `
        <article class="work-card">
          <h3>${card.title}</h3>
          <p>${card.body}</p>
        </article>
      `
    )
    .join("");
};

const renderGrid = (containerId, photos) => {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = photos.map(createThumb).join("");
};

const renderTravel = () => {
  const countryList = document.getElementById("country-list");
  const countryView = document.getElementById("country-view");
  if (!countryList || !countryView) return;

  const renderCountry = (countryName) => {
    const current = travelAtlas.find((country) => country.country === countryName) || travelAtlas[0];

    countryList.innerHTML = travelAtlas
      .map(
        (country) => `
          <button class="country-button ${country.country === current.country ? "active" : ""}" type="button" data-country="${country.country}">
            ${country.country}
          </button>
        `
      )
      .join("");

    countryView.innerHTML = `
      <div class="country-header">
        <h2>${current.country}</h2>
        <p>${current.note}</p>
      </div>
      <section class="location-block">
        <div class="image-grid">
          ${current.photos
            .map((file) => createThumb({ file, caption: current.country }))
            .join("")}
        </div>
      </section>
    `;

    countryList.querySelectorAll("[data-country]").forEach((button) => {
      button.addEventListener("click", () => renderCountry(button.dataset.country));
    });

    bindClickableImages();
  };

  renderCountry(travelAtlas[0].country);
};

const bindClickableImages = () => {
  document.querySelectorAll(".clickable-image").forEach((button) => {
    if (button.dataset.bound === "true") return;
    button.dataset.bound = "true";
    button.addEventListener("click", () => {
      openLightbox(
        button.dataset.image,
        button.dataset.caption || button.querySelector("img")?.alt || "Image"
      );
    });
  });
};

renderCards("lab-highlights", labHighlights);
renderCards("teaching-cards", teachingCards);
renderCards("project-cards", projectCards);
renderCards("scholarship-cards", scholarshipCards);
renderGrid("soccer-grid", soccerPhotos);
renderGrid("kitchen-grid", cookingPhotos);
renderTravel();
bindClickableImages();

let topZ = 20;
const windows = [...document.querySelectorAll("[data-window]")];

const focusWindow = (win) => {
  topZ += 1;
  win.style.zIndex = String(topZ);
};

const openWindow = (id) => {
  const win = document.getElementById(id);
  if (!win) return;
  win.hidden = false;
  focusWindow(win);
};

const closeWindow = (id) => {
  const win = document.getElementById(id);
  if (!win || id === "hero-window") return;
  win.hidden = true;
};

const guidedSequence = [
  "lab-window",
  "travel-window",
  "soccer-window",
  "kitchen-window",
  "teaching-window",
  "projects-window",
  "scholarships-window"
];

let guidedIndex = -1;

const resetGuidedTour = () => {
  guidedIndex = -1;
  if (tourButton) {
    tourButton.textContent = "Start";
  }
};

const openGuidedStep = (index) => {
  guidedSequence.forEach((id) => {
    if (id !== guidedSequence[index]) {
      closeWindow(id);
    }
  });

  openWindow(guidedSequence[index]);

  if (!tourButton) return;
  if (index === guidedSequence.length - 1) {
    tourButton.textContent = "Finish";
  } else {
    tourButton.textContent = "Next";
  }
};

document.querySelectorAll("[data-open]").forEach((trigger) => {
  trigger.addEventListener("click", () => openWindow(trigger.dataset.open));
});

document.querySelectorAll("[data-close]").forEach((trigger) => {
  trigger.addEventListener("click", () => closeWindow(trigger.dataset.close));
});

const tourButton = document.getElementById("tour-button");
if (tourButton) {
  tourButton.addEventListener("click", () => {
    if (guidedIndex >= guidedSequence.length - 1) {
      closeWindow(guidedSequence[guidedSequence.length - 1]);
      resetGuidedTour();
      return;
    }

    guidedIndex += 1;
    openGuidedStep(guidedIndex);
  });
}

windows.forEach((win, index) => {
  if (win.id !== "hero-window") {
    win.style.left = `${64 + (index % 3) * 34}px`;
    win.style.top = `${158 + (index % 4) * 22}px`;
  }

  const bar = win.querySelector(".drag-handle");
  if (!bar) return;

  bar.addEventListener("mousedown", (event) => {
    if (window.innerWidth <= 920) return;
    if (event.target.closest(".close-window")) return;

    focusWindow(win);
    const startX = event.clientX;
    const startY = event.clientY;
    const rect = win.getBoundingClientRect();
    const originLeft = rect.left;
    const originTop = rect.top;

    const onMove = (moveEvent) => {
      win.style.left = `${originLeft + moveEvent.clientX - startX}px`;
      win.style.top = `${originTop + moveEvent.clientY - startY}px`;
      win.style.marginLeft = "0";
    };

    const onUp = () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  });

  win.addEventListener("mousedown", () => focusWindow(win));
});

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");
const lightboxClose = document.getElementById("lightbox-close");

function openLightbox(src, caption) {
  lightboxImage.src = src;
  lightboxImage.alt = caption;
  lightboxCaption.textContent = caption;
  lightbox.hidden = false;
}

function closeLightbox() {
  lightbox.hidden = true;
  lightboxImage.src = "";
  lightboxCaption.textContent = "";
}

if (lightboxClose) {
  lightboxClose.addEventListener("click", closeLightbox);
}

if (lightbox) {
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (!lightbox.hidden) {
      closeLightbox();
      return;
    }
    const openWins = windows.filter((win) => !win.hidden && win.id !== "hero-window");
    const last = openWins.sort((a, b) => Number(b.style.zIndex || 0) - Number(a.style.zIndex || 0))[0];
    if (last) closeWindow(last.id);
  }
});

const clock = document.getElementById("clock");
if (clock) {
  const updateClock = () => {
    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    clock.textContent = time;
  };
  updateClock();
  setInterval(updateClock, 30000);
}

const visitCount = document.getElementById("visit-count");
if (visitCount) {
  const namespace = "oflagz.github.io";
  const key = "ashish-giri-portfolio-visits";
  fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`)
    .then((response) => response.json())
    .then((data) => {
      visitCount.textContent = typeof data.value === "number" ? data.value.toLocaleString() : "n/a";
    })
    .catch(() => {
      visitCount.textContent = "n/a";
    });
}
