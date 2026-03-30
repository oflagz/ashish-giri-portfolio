const files = [
  'photo_2026-03-29_19-43-46.jpg',
  'photo_2026-03-29_19-43-44.jpg',
  'photo_2026-03-29_19-43-43.jpg',
  'photo_2026-03-29_19-43-41.jpg',
  'photo_2026-03-29_19-43-40.jpg',
  'photo_2026-03-29_19-43-38.jpg',
  'photo_2026-03-29_19-43-36.jpg',
  'photo_2026-03-29_19-43-35.jpg',
  'photo_2026-03-29_19-43-33.jpg',
  'photo_2026-03-29_19-43-32.jpg',
  'photo_2026-03-29_19-43-30.jpg',
  'photo_2026-03-29_19-43-29.jpg',
  'photo_2026-03-29_19-43-27.jpg',
  'photo_2026-03-29_19-43-26.jpg',
  'photo_2026-03-29_19-43-24.jpg',
  'photo_2026-03-29_19-43-23.jpg',
  'photo_2026-03-29_19-43-21.jpg',
  'photo_2026-03-29_19-43-20.jpg',
  'photo_2026-03-29_19-43-18.jpg',
  'photo_2026-03-29_19-43-17.jpg',
  'photo_2026-03-29_19-43-15.jpg',
  'photo_2026-03-29_19-43-13.jpg',
  'photo_2026-03-29_19-43-12.jpg',
  'photo_2026-03-29_19-43-10.jpg',
  'photo_2026-03-29_19-43-08.jpg',
  'photo_2026-03-29_19-43-07.jpg',
  'photo_2026-03-29_19-43-05.jpg',
  'photo_2026-03-29_19-43-04.jpg',
  'photo_2026-03-29_19-43-02.jpg',
  'photo_2026-03-29_19-43-00.jpg',
  'photo_2026-03-29_19-42-58.jpg',
  'photo_2026-03-29_19-42-56.jpg',
  'photo_2026-03-29_19-42-49.jpg',
  'photo_2026-03-29_19-42-47.jpg',
  'photo_2026-03-29_19-42-46.jpg',
  'photo_2026-03-29_19-42-44.jpg',
  'photo_2026-03-29_19-42-42.jpg',
  'photo_2026-03-29_19-42-41.jpg',
  'photo_2026-03-29_19-42-39.jpg',
  'photo_2026-03-29_19-42-38.jpg',
  'photo_2026-03-29_19-42-36.jpg',
  'photo_2026-03-29_19-42-35.jpg',
  'photo_2026-03-29_19-42-33.jpg',
  'photo_2026-03-29_19-42-32.jpg',
  'photo_2026-03-29_19-42-30.jpg',
  'photo_2026-03-29_19-42-29.jpg',
  'photo_2026-03-29_19-42-28.jpg',
  'photo_2026-03-29_19-42-26.jpg',
  'photo_2026-03-29_19-42-25.jpg',
  'photo_2026-03-29_19-42-23.jpg',
  'photo_2026-03-29_19-42-21.jpg',
  'photo_2026-03-29_19-42-20.jpg',
  'photo_2026-03-29_19-42-18.jpg',
  'photo_2026-03-29_19-42-17.jpg',
  'photo_2026-03-29_19-42-15.jpg',
  'photo_2026-03-29_19-42-13.jpg',
  'photo_2026-03-29_19-42-12.jpg',
  'photo_2026-03-29_19-42-11.jpg',
  'photo_2026-03-29_19-42-09.jpg',
  'photo_2026-03-29_19-42-07.jpg',
  'photo_2026-03-29_19-42-06.jpg',
  'photo_2026-03-29_19-42-04.jpg',
  'photo_2026-03-29_19-42-02.jpg',
  'photo_2026-03-29_19-42-01.jpg',
  'photo_2026-03-29_19-41-59.jpg',
  'photo_2026-03-29_19-41-57.jpg',
  'photo_2026-03-29_19-41-55.jpg',
  'photo_2026-03-29_19-41-53.jpg',
  'photo_2026-03-29_19-41-50.jpg'
];

const img = (n) => `assets/telegram/${files[n - 1]}`;

const aboutCards = [
  {
    title: 'Usually in the lab',
    body: 'Trying to understand how stem cells respond to mechanical cues and how engineered materials can influence differentiation instead of just sitting there passively.'
  },
  {
    title: 'Usually on match day',
    body: 'Watching Manchester United and spending a lot of the game with the same expression: disappointed but still somehow fully committed.'
  },
  {
    title: 'Usually in libraries',
    body: 'Reading around the Nepal-Tibet relationship, history, movement, and the stories that sit behind maps and borders.'
  },
  {
    title: 'Usually with a camera or a pan',
    body: 'Taking photos when light feels right, or cooking when I want to think with my hands instead of with a screen.'
  }
];

const labHighlights = [
  {
    title: 'Current question',
    body: 'How can mechanochemical design be used to influence stem cell differentiation in a controllable way?'
  },
  {
    title: 'What I enjoy',
    body: 'Making experimental workflows cleaner, more elegant, and less wasteful than the default version.'
  },
  {
    title: 'What sticks with me',
    body: 'Good research feels technical, but it also feels tactile. You can tell when a system really works.'
  },
  {
    title: 'What I value',
    body: 'Rigor without losing curiosity. Precision without losing taste.'
  }
];

const workCards = [
  {
    title: 'McGill University',
    body: 'Graduate Research Assistant working on auxetic gels, stem-cell retention, and engineered bio-orthogonal adhesion systems for regenerative applications.'
  },
  {
    title: 'Institute of Bio-polymer',
    body: 'DAAD RISE intern who redesigned irradiation testing workflows for PLA and PBS, saving months of experimental time.'
  },
  {
    title: 'Composite Research Network Lab + Vanderlande',
    body: 'Built better biocomposite workflows, designed an in-house extrusion system, and cut project cost by about $30k.'
  },
  {
    title: 'Harvard Medical School',
    body: 'Built a 98% accurate multiclass model for single-cell morphology classification by translating 3-D structures into 2-D image inputs.'
  },
  {
    title: 'Teaching',
    body: 'Teaching assistant roles at McGill and UBC, plus peer-learning work that raised course averages and helped large groups of students actually get the material.'
  },
  {
    title: 'Tools I keep returning to',
    body: 'Python, C++, SolidWorks, Blender, ABAQUS, mechanical testing, workflow design, and figuring out how to make research systems less clumsy.'
  }
];

const soccerPhotos = [
  { n: 1, caption: 'In play' },
  { n: 2, caption: 'Football with community' },
  { n: 3, caption: 'Not technically soccer, but definitely athletic chaos' },
  { n: 4, caption: 'Number 09' }
];

const cookingPhotos = [
  { n: 8, caption: 'Steak dinner' },
  { n: 35, caption: 'Creamy chicken pan' },
  { n: 53, caption: 'Spiced chicken dish' },
  { n: 54, caption: 'Loaded wrap' },
  { n: 55, caption: 'Pasta bowl' },
  { n: 56, caption: 'Broth and noodles' },
  { n: 57, caption: 'Red-sauce pasta' },
  { n: 59, caption: 'Skillet chicken' },
  { n: 64, caption: 'Skewers, wraps, and sides' },
  { n: 68, caption: 'Chicken noodle soup' }
];

const photoRoll = [
  { n: 9, caption: 'Neon geometry at night' },
  { n: 27, caption: 'Orange industrial sunset' },
  { n: 34, caption: 'Waterfall dusk' },
  { n: 37, caption: 'Sun over open water' },
  { n: 38, caption: 'River, balloon, bridge' },
  { n: 50, caption: 'Forest waterfall' },
  { n: 58, caption: 'Park reflection at dusk' },
  { n: 60, caption: 'Winter road at night' },
  { n: 61, caption: 'Silhouette at sunset' },
  { n: 62, caption: 'Autumn lake' },
  { n: 63, caption: 'Autumn street' },
  { n: 66, caption: 'Lake and mountain overlook' },
  { n: 67, caption: 'Winter lights' },
  { n: 30, caption: 'Deer crossing at dusk' },
  { n: 31, caption: 'Cloud shelf over the road' },
  { n: 36, caption: 'Spring blossom canopy' },
  { n: 5, caption: 'Quiet sidewalk scene' }
];

const travelAtlas = [
  {
    country: 'Nepal',
    note: 'Temples, mountains, airport windows, and the kind of landscapes that stay in your head long after you leave.',
    locations: [
      {
        name: 'Himalayan Views',
        note: 'Mountain light, altitude, distance.',
        photos: [6, 51]
      },
      {
        name: 'Kathmandu Valley / Heritage Sites',
        note: 'Squares, temples, and stone architecture.',
        photos: [42, 52]
      }
    ]
  },
  {
    country: 'Qatar',
    note: 'One photo, but too sharp and neon to leave out.',
    locations: [
      {
        name: 'Doha',
        note: 'Night architecture and lit facades.',
        photos: [33]
      }
    ]
  },
  {
    country: 'Czech Republic',
    note: 'Prague ended up feeling like towers, river views, museums, and skyline after skyline.',
    locations: [
      {
        name: 'Prague Museum District',
        note: 'Grand facades and monumental buildings.',
        photos: [10, 40, 43]
      },
      {
        name: 'Prague River and Castle Views',
        note: 'Wide skyline shots, bridges, and long river perspectives.',
        photos: [44, 46, 47, 49]
      },
      {
        name: 'Churches and Interiors',
        note: 'High ceilings, stained glass, dark stone.',
        photos: [12]
      }
    ]
  },
  {
    country: 'Austria',
    note: 'Mostly Vienna: palace spaces, museum geometry, and open lawns.',
    locations: [
      {
        name: 'Vienna / Schonbrunn',
        note: 'Palace grounds and long formal views.',
        photos: [28, 45]
      },
      {
        name: 'Vienna / Museum Quarter',
        note: 'Urban architecture and museum frontage.',
        photos: [40, 43]
      }
    ]
  },
  {
    country: 'Germany',
    note: 'Old towns, rivers, church interiors, towers, and streets that look like they were built to be photographed slowly.',
    locations: [
      {
        name: 'Nuremberg Old Town',
        note: 'Timber framing, river edges, towers, and alleys.',
        photos: [13, 14, 18, 19, 20]
      },
      {
        name: 'Bamberg / River Town Mood',
        note: 'Waterfronts, facades, and softer river light.',
        photos: [16, 17, 29, 32, 39]
      },
      {
        name: 'Street and Night Scenes',
        note: 'Architecture after dark and weather-heavy moments.',
        photos: [9, 15, 27]
      },
      {
        name: 'Historic Buildings',
        note: 'Larger facades and quieter exterior details.',
        photos: [11]
      }
    ]
  },
  {
    country: 'Netherlands',
    note: 'Canals, flowers, rain, churches, and Amsterdam doing Amsterdam things.',
    locations: [
      {
        name: 'Amsterdam Canals',
        note: 'Waterlines, boats, church towers, flowers, and overcast weather.',
        photos: [21, 22, 23, 24, 41]
      },
      {
        name: 'Amsterdam Streets and Facades',
        note: 'Station frontage, houses, balconies, and street detail.',
        photos: [25, 26, 48]
      }
    ]
  },
  {
    country: 'Canada',
    note: 'A mix of city scenes, autumn, snow, water, roads, and places that feel like home or near-home.',
    locations: [
      {
        name: 'City Walks',
        note: 'Urban moments, sidewalks, and reflective streets.',
        photos: [5, 7, 69]
      },
      {
        name: 'Nature and Water',
        note: 'Falls, lakes, trees, and long-look landscapes.',
        photos: [34, 36, 37, 38, 50, 58, 62, 66]
      },
      {
        name: 'Autumn and Winter',
        note: 'Snow, color, and seasonal mood.',
        photos: [60, 63, 65, 67]
      },
      {
        name: 'Roads and Quiet Views',
        note: 'Dusk, silhouettes, mountain roads, and animals showing up on cue.',
        photos: [30, 31, 61]
      }
    ]
  }
];

const createThumb = ({ n, caption }) => `
  <button class="thumb-button clickable-image" type="button" data-image="${img(n)}" data-caption="${caption}">
    <img src="${img(n)}" alt="${caption}" />
    <span>${caption}</span>
  </button>
`;

const renderCards = (containerId, cards, className) => {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = cards
    .map(
      (card) => `
        <article class="${className}">
          <h3>${card.title}</h3>
          <p>${card.body}</p>
        </article>
      `
    )
    .join('');
};

const renderGrid = (containerId, photos) => {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = photos.map(createThumb).join('');
};

const renderTravel = () => {
  const countryList = document.getElementById('country-list');
  const countryView = document.getElementById('country-view');
  if (!countryList || !countryView) return;

  const renderCountry = (countryName) => {
    const current = travelAtlas.find((country) => country.country === countryName) || travelAtlas[0];

    countryList.innerHTML = travelAtlas
      .map(
        (country) => `
          <button class="country-button ${country.country === current.country ? 'active' : ''}" type="button" data-country="${country.country}">
            ${country.country}
          </button>
        `
      )
      .join('');

    countryView.innerHTML = `
      <div class="country-header">
        <h2>${current.country}</h2>
        <p>${current.note}</p>
      </div>
      <div class="location-grid">
        ${current.locations
          .map(
            (location) => `
              <section class="location-block">
                <h3>${location.name}</h3>
                <p class="location-meta">${location.note}</p>
                <div class="image-grid">
                  ${location.photos.map((n) => createThumb({ n, caption: `${current.country} / ${location.name}` })).join('')}
                </div>
              </section>
            `
          )
          .join('')}
      </div>
    `;

    countryList.querySelectorAll('[data-country]').forEach((button) => {
      button.addEventListener('click', () => renderCountry(button.dataset.country));
    });

    bindClickableImages();
  };

  renderCountry(travelAtlas[0].country);
};

const bindClickableImages = () => {
  document.querySelectorAll('.clickable-image').forEach((button) => {
    if (button.dataset.bound === 'true') return;
    button.dataset.bound = 'true';
    button.addEventListener('click', () => openLightbox(button.dataset.image, button.dataset.caption || button.querySelector('img')?.alt || 'Image'));
  });
};

renderCards('about-cards', aboutCards, 'note-card');
renderCards('lab-highlights', labHighlights, 'highlight-card');
renderCards('work-cards', workCards, 'work-card');
renderGrid('soccer-grid', soccerPhotos);
renderGrid('kitchen-grid', cookingPhotos);
renderGrid('photo-grid', photoRoll);
renderTravel();
bindClickableImages();

let topZ = 20;
const windows = [...document.querySelectorAll('[data-window]')];

const focusWindow = (win) => {
  topZ += 1;
  win.style.zIndex = String(topZ);
};

const openWindow = (id) => {
  const win = document.getElementById(id);
  if (!win) return;
  win.hidden = false;
  win.classList.add('open');
  focusWindow(win);
};

const closeWindow = (id) => {
  const win = document.getElementById(id);
  if (!win) return;
  if (id === 'hero-window') return;
  win.hidden = true;
  win.classList.remove('open');
};

document.querySelectorAll('[data-open]').forEach((trigger) => {
  trigger.addEventListener('click', () => openWindow(trigger.dataset.open));
});

document.querySelectorAll('[data-close]').forEach((trigger) => {
  trigger.addEventListener('click', () => closeWindow(trigger.dataset.close));
});

windows.forEach((win, index) => {
  if (win.id !== 'hero-window') {
    win.style.left = `${190 + (index % 3) * 24}px`;
    win.style.top = `${95 + (index % 4) * 18}px`;
  }

  const bar = win.querySelector('.drag-handle');
  if (!bar) return;

  bar.addEventListener('mousedown', (event) => {
    if (window.innerWidth <= 920) return;
    if (event.target.closest('.close-window')) return;

    focusWindow(win);
    const startX = event.clientX;
    const startY = event.clientY;
    const rect = win.getBoundingClientRect();
    const originLeft = rect.left;
    const originTop = rect.top;

    const onMove = (moveEvent) => {
      win.style.left = `${originLeft + moveEvent.clientX - startX}px`;
      win.style.top = `${originTop + moveEvent.clientY - startY}px`;
      win.style.marginLeft = '0';
    };

    const onUp = () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  });

  win.addEventListener('mousedown', () => focusWindow(win));
});

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxClose = document.getElementById('lightbox-close');

function openLightbox(src, caption) {
  lightboxImage.src = src;
  lightboxImage.alt = caption;
  lightboxCaption.textContent = caption;
  lightbox.hidden = false;
}

function closeLightbox() {
  lightbox.hidden = true;
  lightboxImage.src = '';
  lightboxCaption.textContent = '';
}

if (lightboxClose) {
  lightboxClose.addEventListener('click', closeLightbox);
}

if (lightbox) {
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    if (!lightbox.hidden) {
      closeLightbox();
      return;
    }
    const openWins = windows.filter((win) => !win.hidden && win.id !== 'hero-window');
    const last = openWins.sort((a, b) => Number(b.style.zIndex || 0) - Number(a.style.zIndex || 0))[0];
    if (last) closeWindow(last.id);
  }
});

const clock = document.getElementById('clock');
if (clock) {
  const updateClock = () => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    clock.textContent = time;
  };
  updateClock();
  setInterval(updateClock, 30000);
}

const visitCount = document.getElementById('visit-count');
if (visitCount) {
  const namespace = 'ashishgiri156.github.io';
  const key = 'ashish-giri-portfolio-visits';
  fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`)
    .then((response) => response.json())
    .then((data) => {
      if (typeof data.value === 'number') {
        visitCount.textContent = data.value.toLocaleString();
      } else {
        visitCount.textContent = 'n/a';
      }
    })
    .catch(() => {
      visitCount.textContent = 'n/a';
    });
}

