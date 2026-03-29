const revealItems = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const windows = [...document.querySelectorAll('.window')];

const focusWindow = (windowId) => {
  windows.forEach((windowEl) => {
    windowEl.classList.toggle('active-window', windowEl.id === windowId);
  });

  const target = document.getElementById(windowId);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

document.querySelectorAll('[data-open-window]').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    focusWindow(trigger.dataset.openWindow);
  });
});

windows.forEach((windowEl) => {
  const bar = windowEl.querySelector('.window-bar');
  if (bar) {
    bar.addEventListener('click', () => {
      windowEl.classList.add('active-window');
      windows.forEach((other) => {
        if (other !== windowEl) {
          other.classList.remove('active-window');
        }
      });
    });
  }
});

const hobbyTabs = document.querySelectorAll('.quest-tab');
const hobbyPanels = document.querySelectorAll('.hobby-panel');

hobbyTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const hobby = tab.dataset.hobby;

    hobbyTabs.forEach((button) => {
      const active = button === tab;
      button.classList.toggle('active', active);
      button.setAttribute('aria-selected', String(active));
    });

    hobbyPanels.forEach((panel) => {
      panel.classList.toggle('active', panel.dataset.panel === hobby);
    });
  });
});

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeButton = document.querySelector('.lightbox-close');

const closeLightbox = () => {
  lightbox.hidden = true;
  lightboxImage.src = '';
  lightboxImage.alt = '';
  lightboxCaption.textContent = '';
};

document.querySelectorAll('.clickable-media').forEach((item) => {
  item.addEventListener('click', () => {
    const image = item.dataset.image;
    const caption = item.dataset.caption || '';
    const fallbackAlt = item.querySelector('img')?.alt || caption || 'Expanded image';

    lightboxImage.src = image;
    lightboxImage.alt = fallbackAlt;
    lightboxCaption.textContent = caption;
    lightbox.hidden = false;
  });
});

if (closeButton) {
  closeButton.addEventListener('click', closeLightbox);
}

if (lightbox) {
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && lightbox && !lightbox.hidden) {
    closeLightbox();
  }
});

const clock = document.querySelector('.clock');
if (clock) {
  const updateClock = () => {
    const now = new Date();
    const time = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    clock.textContent = time;
  };

  updateClock();
  setInterval(updateClock, 1000 * 30);
}
