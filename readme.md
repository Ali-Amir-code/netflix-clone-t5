### Netflix Landing Page Clone

#### Overview
This project is a Netflix-inspired landing page built with pure HTML, CSS, and JavaScript. It features responsive design, interactive components, and modern UI elements that mimic Netflix's aesthetic.

---

### Tools Used
- **Code Editor**: VS Code
- **Debugging**: Chrome Dev Tools
- **Inspiration**: Netflix official website
- **CSS Assistance**: CSS Gradient Generator for background gradients
- **Frameworks**: None (Vanilla JS/CSS)

---

### Key Features
1. **Hero Section**
   - Full-screen background with gradient overlay
   - Email signup form with responsive layout
2. **Dynamic Curved Separator**
   - Custom SVG with gradient effect
3. **Trending Now Slider**
   - Horizontal scrollable content carousel
   - Navigation buttons with disabled states
   - Hover animations on slides
4. **Reasons to Join Section**
   - Card-based layout with gradient backgrounds
   - Device-specific illustrations
5. **Enhanced FAQ Section**
   - Smooth collapsible accordions
   - Animated "+" to "x" transitions
   - Space-efficient design
6. **Responsive Footer**
   - Grid-based link organization
   - Adapts to mobile/tablet views

---

### Design Enhancements
Compared to Netflix's original design:
- **FAQ Section Improvements**:
  - Smoother animations with CSS transitions
  - Cleaner visual hierarchy with active state indicators
  - More intuitive interaction (single-click toggle)
- **Curved Separator**:
  - Custom gradient effect using SVG
  - Dual-color scheme for visual depth
- **Trending Slider**:
  - Slide hover scaling effect (transform: scale(1.1))
  - Disabled button states for better UX

---

### Technical Challenges
**Trending Now Slider Implementation**:
```javascript
// Core slider logic (index.js)
const track = document.getElementById('track');
const slides = track.children;
const slideW = slides[0].getBoundingClientRect().width + 10;
const visible = Math.floor(sliderContainer.offsetWidth / slideW);

// Navigation handlers
prevBtn.addEventListener('click', () => {
  if (position > 0) {
    position--;
    track.style.transform = `translateX(-${position * slideW}px)`;
  }
});
```
**Key challenges overcome**:
1. **Responsive Slide Calculation**:
   - Dynamically calculates visible slides based on container width
   - Handles margin/padding discrepancies

2. **Boundary Detection**:
   - Disables buttons at scroll limits
   - Prevents empty space at slider ends

3. **Performance Optimization**:
   - Uses CSS transforms instead of margin/padding adjustments
   - Debounced resize handling

---

### File Structure
```
netflix-clone/
├── index.html          # Main page structure
├── style.css           # Global styles + responsive design
├── index.js            # Slider + FAQ functionality
└── assets/
    ├── logo.svg        # Netflix logo
    ├── hero-image.webp # Background image
    ├── s1.jpg-s10.jpg  # Trending show thumbnails
    └── r1.png-r4.png   # Reason illustrations
```

---

### Responsive Features
- **Mobile-First Approach**:
  - Fluid grid layouts
  - Flexible units (vw/%)
- **Footer Adaptations**:
  ```css
  @media (max-width: 768px) {
    .footer-links { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 480px) {
    .footer-links { grid-template-columns: 1fr; }
  }
  ```
- **Form Optimization**:
  - Input/button stack vertically on small screens
  - Font size adjustments for readability

---

### How to Run
1. Clone repository
2. Open `index.html` in any modern browser
3. No dependencies required

---

### Future Improvements
- Add video background in hero section
- Implement user authentication flows
- Integrate actual movie API for dynamic content
- Add dark/light mode toggle