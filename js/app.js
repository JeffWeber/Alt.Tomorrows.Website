let dark = false;
let currentPage = 'home';
let stories = [];
const visited = new Set();

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Check initial theme preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        toggleTheme();
    }
    
    // Fetch stories metadata and render grid
    fetch('data/stories.json')
        .then(res => res.json())
        .then(data => {
            stories = data;
            renderGrid();
        })
        .catch(err => {
            console.error("Failed to load stories data:", err);
        });
        
    showPage('home');
});

function toggleTheme() {
  dark = !dark;
  document.body.classList.toggle('dark', dark);
  document.getElementById('themeBtn').textContent = dark ? 'Light' : 'Dark';
}

function showPage(page) {
  ['home','story-view','about-view'].forEach(id => {
    document.getElementById(id).style.display = 'none';
  });
  if (page === 'home') document.getElementById('home').style.display = 'flex';
  else if (page === 'story') document.getElementById('story-view').style.display = 'flex';
  else if (page === 'about') document.getElementById('about-view').style.display = 'flex';
  window.scrollTo(0, 0);
}

function showStory(id) {
  const s = stories.find(x => x.id === id);
  if (!s) return;
  
  document.getElementById('sv-meta').textContent = s.date; // wordcount removed per feedback
  document.getElementById('sv-title').textContent = s.title;
  document.getElementById('sv-body').innerHTML = '<p>Loading...</p>';
  
  // Show page immediately while fetching
  showPage('story');
  
  // Fetch actual markdown content
  fetch(`stories/${s.id}.md`)
    .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.text();
    })
    .then(markdownText => {
        // Parse markdown to HTML using marked.js
        document.getElementById('sv-body').innerHTML = marked.parse(markdownText);
    })
    .catch(err => {
        document.getElementById('sv-body').innerHTML = '<p>Sorry, there was an error loading the story content.</p>';
        console.error("Failed to fetch markdown:", err);
    });

  visited.add(id);
  
  // Update grid visited state
  document.querySelectorAll('.num-item').forEach(el => {
    const sid = parseInt(el.dataset.id);
    el.classList.toggle('visited', visited.has(sid));
  });
}

function renderGrid() {
  const wrap = document.getElementById('gridWrap');
  wrap.innerHTML = stories.map((s, i) => {
    // using index for zero padded display, this allows list to dictate ordering
    const num = String(i + 1).padStart(2, '0');
    return `<div class="num-item" data-id="${s.id}" onclick="showStory(${s.id})" onmouseenter="positionTooltip(this)">
      ${num}
      <div class="tooltip">
        <div class="tooltip-title">${s.title}</div>
        <div class="tooltip-teaser">${s.teaser}</div>
      </div>
      <span class="num-dot"></span>
    </div>`;
  }).join('');
}

// Ensure resize events also fix tooltips potentially
window.addEventListener('resize', () => {
    document.querySelectorAll('.num-item:hover').forEach(el => positionTooltip(el));
});

window.positionTooltip = function positionTooltip(el) {
  const rect = el.getBoundingClientRect();
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  // reset state
  el.classList.remove('flip-left', 'flip-up');
  
  // calculate if it needs flipping
  if (rect.left + 270 > vw) {
      el.classList.add('flip-left');
  }
  if (rect.bottom + 140 > vh) {
      el.classList.add('flip-up');
  }
};
