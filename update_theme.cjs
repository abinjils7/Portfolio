const fs = require('fs');

let index = fs.readFileSync('src/index.css', 'utf8');

index = index.replace(/:root \{[^}]+\}/, ':root {\n  --bg-primary: #0d0d0f;\n  --text-primary: #e0e0e2;\n  --text-secondary: #888888;\n  --accent: #7f77dd;\n  --accent-glow: rgba(127, 119, 221, 0.3);\n  --border-color: #222222;\n  --card-bg: #151515;\n  --teal: #5dcaa5;\n}');

index = index.replace(/background-color: var\(--bg-primary\);/g, 'background-color: var(--bg-primary);');

if (!index.includes('Fira+Code')) {
  index = index.replace(/@import url\([^)]+\);/, "@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&display=swap');");
}

index = index.replace(/\.hero-section \{[\s\S]*?\}/, (match) => {
  if (match.includes('radial-gradient')) return match;
  return match.replace(/background-color: var\(--bg-primary\);/, 'background-color: var(--bg-primary);\n  background-image: linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);\n  background-size: 30px 30px;');
});

index = index.replace(/\.nav-logo \{[\s\S]*?\}/, (match) => {
  return match.replace(/color: #ffffff;/, 'color: var(--accent);').replace(/font-family: 'Outfit'/, "font-family: 'Fira Code', monospace");
});

index = index.replace(/\.nav-logo span \{[\s\S]*?\}/, (match) => {
  return match.replace(/color: #7B3FE4;/, 'color: var(--accent);');
});

index = index.replace(/\.nav-link \{[\s\S]*?\}/, (match) => {
  return match.replace(/color: rgba\(255, 255, 255, 0\.55\);/, 'color: var(--text-secondary);').replace(/font-family: 'Inter'/, "font-family: 'Fira Code', monospace");
});

index = index.replace(/\.nav-link::after \{[\s\S]*?\}/, (match) => {
  return match.replace(/background: #7B3FE4;/, 'background: var(--accent);');
});

index = index.replace(/\.navbar \{[\s\S]*?\}/, (match) => {
  return match.replace(/background: rgba\(6, 0, 16, 0\.6\);/, 'background: rgba(13, 13, 15, 0.8);').replace(/border: 1px solid rgba\(255, 255, 255, 0\.08\);/, 'border: 1px solid var(--border-color);');
});

index = index.replace(/\.btn-primary \{[\s\S]*?\}/, (match) => {
  return match.replace(/background: #fff;/, 'background: var(--accent);').replace(/color: #000;/, 'color: #ffffff;').replace(/font-family: 'Inter'/, "font-family: 'Fira Code', monospace");
});

index = index.replace(/\.btn-secondary \{[\s\S]*?\}/, (match) => {
  return match.replace(/background: rgba\(255, 255, 255, 0\.1\);/, 'background: #111111; border: 1px solid #333333;').replace(/color: #fff;/, 'color: var(--text-secondary);').replace(/font-family: 'Inter'/, "font-family: 'Fira Code', monospace");
});

index = index.replace(/\.btn-secondary:hover \{[\s\S]*?\}/, (match) => {
  return match.replace(/background: rgba\(255, 255, 255, 0\.2\);/, 'background: #222222; color: var(--text-primary);');
});

index = index.replace(/\.nav-cta \{[\s\S]*?\}/, (match) => {
  return match.replace(/background: linear-gradient\(135deg, #7B3FE4, #411da5\);/, 'background: transparent; border: 1px solid var(--border-color);').replace(/color: #ffffff;/, 'color: var(--accent);').replace(/font-family: 'Inter'/, "font-family: 'Fira Code', monospace");
});

index = index.replace(/\.nav-cta:hover \{[\s\S]*?\}/, (match) => {
  return match.replace(/box-shadow: [^;]+;/, 'background: rgba(127, 119, 221, 0.1);');
});

index = index.replace(/\.hero-name \{[\s\S]*?\}/, (match) => {
  return match.replace(/color: #ffffff;/, 'color: var(--text-primary);');
});

index = index.replace(/\.hero-title \{[\s\S]*?\}/, (match) => {
  return match.replace(/color: #ffffff;/, 'color: var(--accent);');
});

fs.writeFileSync('src/index.css', index);
console.log('index.css updated');

let sections = fs.readFileSync('src/components/Sections.css', 'utf8');

sections = sections.replace(/background-color: #f5f5f5;/g, 'background-color: #0d0d0f;');
sections = sections.replace(/background: #f5f5f5;/g, 'background: #0d0d0f;');
sections = sections.replace(/color: #0a0a0a;/g, 'color: #e0e0e2;');
sections = sections.replace(/color: #999999;/g, 'color: #888888;');
sections = sections.replace(/color: #666666;/g, 'color: #888888;');
sections = sections.replace(/color: #444444;/g, 'color: #e0e0e2;');
sections = sections.replace(/color: #333333;/g, 'color: #e0e0e2;');
sections = sections.replace(/color: #555555;/g, 'color: #888888;');

sections = sections.replace(/border-bottom: 1px solid rgba\(0, 0, 0, 0\.06\);/g, 'border-bottom: 1px solid #1e1e22;');
sections = sections.replace(/border-top: 1px solid rgba\(0, 0, 0, 0\.08\);/g, 'border-top: 1px solid #1e1e22;');
sections = sections.replace(/border-bottom: 1px solid rgba\(0, 0, 0, 0\.08\);/g, 'border-bottom: 1px solid #1e1e22;');
sections = sections.replace(/border: 1px solid rgba\(0, 0, 0, 0\.08\);/g, 'border: 1px solid #222222;');
sections = sections.replace(/border: 1px solid rgba\(0, 0, 0, 0\.06\);/g, 'border: 1px solid #222222;');

sections = sections.replace(/background: #0a0a0a;/g, 'background: #7f77dd;');
sections = sections.replace(/background: #ffffff;/g, 'background: #151515;');
sections = sections.replace(/color: #ffffff;([\s\S]*?)padding: 1rem 2\.5rem;([\s\S]*?)border-radius: 60px;/g, 'color: #ffffff;$1padding: 1rem 2.5rem;$2border-radius: 8px;');

sections = sections.replace(/\.project-row:hover \{[\s\S]*?\}/, (match) => {
  return match.replace(/background: rgba\(0, 0, 0, 0\.02\);/, 'background: rgba(255, 255, 255, 0.02);');
});

sections = sections.replace(/\.project-row--active \{[\s\S]*?\}/, (match) => {
  return match.replace(/border-left: 3px solid #22c55e;/, 'border-left: 3px solid #5dcaa5;');
});

sections = sections.replace(/\.detail-label \{[\s\S]*?\}/, (match) => {
  return match.replace(/font-family: [^;]+;/, "font-family: 'Fira Code', monospace;");
});

sections = sections.replace(/\.skill-group-title \{[\s\S]*?\}/, (match) => {
  return match.replace(/font-family: [^;]+;/, "font-family: 'Fira Code', monospace;");
});

if (!sections.includes('.section-comment-label')) {
  sections += "\n\n.section-comment-label {\n    font-family: 'Fira Code', monospace;\n    font-size: 1rem;\n    color: #7f77dd;\n    margin-bottom: 1.5rem;\n    display: block;\n    text-transform: uppercase;\n}\n";
}

fs.writeFileSync('src/components/Sections.css', sections);
console.log('Sections.css updated');
