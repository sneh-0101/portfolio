# 🎨 Customization Reference Guide

## Quick Edit Locations

### 📝 Personalizing Content

#### Your Name
**File:** `index.html`
- Line 74: `<h1 class="hero-title">Hi, I'm Sneh</h1>`
- Line 79: `<a href="#home" class="logo-text">Sneh</a>`
- Line 302: `<p>Name: Sneh</p>`

**Change to:**
```html
<h1 class="hero-title">Hi, I'm [YOUR NAME]</h1>
<a href="#home" class="logo-text">[YOUR NAME]</a>
```

#### Your Tagline
**File:** `index.html`
- Line 75: `<p class="hero-tagline">Full Stack Developer | BCA Student | Python Enthusiast</p>`

**Change to:**
```html
<p class="hero-tagline">[YOUR TITLE] | [YOUR TITLE 2] | [YOUR SPECIALTY]</p>
```

#### Your Email
**File:** `index.html`
- Line 302: `<a href="mailto:your.email@example.com">your.email@example.com</a>`
- Line 349: `<a href="mailto:your.email@example.com" class="footer-link">Email</a>`

**Change to:**
```html
<a href="mailto:popatsneh7@gmail.com">popatsneh7@gmail.com</a>
```

#### Social Media Links
**File:** `index.html`
- Line 303-304: GitHub and LinkedIn links
- Line 347-350: Footer social links

**Change to:**
```html
<!-- GitHub -->
<a href="https://github.com/your-username" target="_blank">

<!-- LinkedIn -->
<a href="https://linkedin.com/in/your-profile" target="_blank">
```

---

### 🎓 About Section

**File:** `index.html`
**Lines:** 155-180

**Current:**
```html
<p>
    I'm a passionate full stack developer and BCA student...
</p>
```

**Change to your content:**
```html
<p>
    I'm a passionate [YOUR BACKGROUND]...
</p>
```

---

### 💼 Skills Section

**File:** `index.html`

#### Add Programming Language
Find the "Programming Languages" section (around line 210) and add:
```html
<div class="skill-card">
    <div class="skill-icon">🔧</div>
    <div class="skill-name">Your Skill</div>
    <div class="skill-level">Advanced</div>
</div>
```

#### Change Skill Level
Options: "Beginner", "Intermediate", "Advanced", "Expert"

#### Add New Skill Category
After the existing categories, add:
```html
<div class="skill-category">
    <h3>Your Category</h3>
    <div class="skill-cards">
        <!-- Add skill cards here -->
    </div>
</div>
```

---

### 📦 Projects Section

**File:** `index.html`
**Lines:** 280-335

#### Add New Project
```html
<div class="project-card">
    <div class="project-header">
        <h3>Your Project Name</h3>
    </div>
    <p class="project-description">
        Describe your project here. What does it do? What problem does it solve?
    </p>
    <div class="tech-stack">
        <span class="tech-tag">Technology 1</span>
        <span class="tech-tag">Technology 2</span>
        <span class="tech-tag">Technology 3</span>
    </div>
    <a href="https://github.com/your-repo-link" class="project-link">View on GitHub →</a>
</div>
```

#### Remove Example Projects
Simply delete the `<div class="project-card">...</div>` blocks you don't need.

---

### 📄 Resume Section

**File:** `js/script.js`
**Lines:** 59-70

**Current:**
```javascript
const resumeData = {
    name: 'Sneh',
    email: 'popatsneh7@gmail.com',
    skills: ['Python', 'PHP', 'JavaScript', 'HTML', 'CSS', 'MySQL', 'Data Analysis', 'Git'],
};
```

**Update with your data:**
```javascript
const resumeData = {
    name: 'Your Name',
    email: 'your.email@gmail.com',
    skills: ['Skill1', 'Skill2', 'Skill3', 'Skill4', 'Skill5'],
};
```

**To add resume PDF:**
1. Save your resume as `resume.pdf`
2. Place in `assets/` folder
3. The download button will automatically work

---

### 🎯 Experience & Education

**File:** `index.html`
**Lines:** 345-380

#### Update Education
```html
<div class="timeline-item education">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <h3>Your Degree Name</h3>
        <p class="timeline-date">Graduation Year/Expected: YYYY</p>
        <p class="timeline-description">
            Your description of your education...
        </p>
    </div>
</div>
```

#### Update Experience/Internship
```html
<div class="timeline-item internship">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <h3>Your Position - Company Name</h3>
        <p class="timeline-date">Duration/Location</p>
        <p class="timeline-description">
            Description of your experience...
        </p>
    </div>
</div>
```

---

## 🎨 Styling Customization

### Change Primary Color

**File:** `css/style.css`
**Lines:** 6-12

**Current:**
```css
--primary-color: #6366f1;
--primary-dark: #4f46e5;
--secondary-color: #ec4899;
--accent-color: #10b981;
```

**Popular Color Combinations:**

**Blue Theme:**
```css
--primary-color: #3b82f6;
--primary-dark: #1d4ed8;
--secondary-color: #06b6d4;
--accent-color: #8b5cf6;
```

**Purple Theme:**
```css
--primary-color: #a855f7;
--primary-dark: #7e22ce;
--secondary-color: #db2777;
--accent-color: #06b6d4;
```

**Green Theme:**
```css
--primary-color: #10b981;
--primary-dark: #059669;
--secondary-color: #f59e0b;
--accent-color: #3b82f6;
```

**Red/Orange Theme:**
```css
--primary-color: #ef4444;
--primary-dark: #dc2626;
--secondary-color: #f97316;
--accent-color: #6366f1;
```

### Change Font

**File:** `css/style.css`
**Lines:** 17-18

**Current:**
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
```

**Options (no external fonts needed):**

**Modern Sans-serif:**
```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

**Clean and Simple:**
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**Monospace (Developer style):**
```css
font-family: 'Courier New', Courier, monospace;
```

### Change Spacing

**File:** `css/style.css`

**Global padding on sections (line ~270):**
```css
section {
    padding: 80px 0;  /* Change 80 to your preferred value */
}
```

**Container width (line ~36):**
```css
.container {
    max-width: 1200px;  /* Wider or narrower based on preference */
}
```

---

## 🎭 Dark Mode Colors

**File:** `css/style.css`
**Lines:** 13-25

**Current dark mode:**
```css
body.dark-mode {
    --bg-light: #1a1a2e;           /* Background */
    --bg-light-secondary: #16213e;  /* Secondary BG */
    --bg-light-tertiary: #0f3460;   /* Tertiary BG */
    
    --text-light: #e0e0e0;          /* Main text */
    --text-light-secondary: #b0b0b0;/* Secondary text */
    --text-light-tertiary: #808080; /* Tertiary text */
    
    --border-light: #333333;        /* Borders */
    --shadow-light: rgba(0, 0, 0, 0.3);
}
```

**Lighter Dark Mode (OLED friendly):**
```css
body.dark-mode {
    --bg-light: #0d0d0d;
    --bg-light-secondary: #1a1a1a;
    --bg-light-tertiary: #2d2d2d;
    --text-light: #ffffff;
    --text-light-secondary: #e0e0e0;
    --text-light-tertiary: #999999;
    --border-light: #2d2d2d;
    --shadow-light: rgba(0, 0, 0, 0.5);
}
```

---

## 🎬 Animation Adjustments

**File:** `css/style.css`

### Slower Animations
Change animation duration (lines ~780-810):
```css
@keyframes fadeInUp {
    /* Increase from 0.8s to 1.2s */
}
```

### Disable Animations (for accessibility)
Find animation properties and comment them out:
```css
/* .element {
    animation: none !important;
} */
```

### Change Transition Speed
**Line:** 29
```css
--transition: all 0.3s ease;  /* Change 0.3s to 0.5s or 0.2s */
```

---

## 📱 Responsive Breakpoints

**File:** `css/style.css`
**Lines:** 755+

**Current breakpoints:**
- 768px - Tablet
- 480px - Mobile
- 320px - Small mobile

**To adjust for different devices:**

```css
@media (max-width: 1024px) {
    /* Large tablets */
}

@media (max-width: 768px) {
    /* Current tablet breakpoint */
}

@media (max-width: 480px) {
    /* Current mobile breakpoint */
}
```

---

## 🔧 Form Customization

### Add More Form Fields

**File:** `index.html`
**Around line:** 350

**Add new field:**
```html
<div class="form-group">
    <label for="phone">Phone (Optional)</label>
    <input type="tel" id="phone" name="phone" placeholder="Your phone">
    <span class="error-message" id="phoneError"></span>
</div>
```

### Change Form Validation

**File:** `js/script.js`
**Lines:** 120-200

**Update validation function:**
```javascript
} else if (formData.phone.trim() === '') {
    setError('phone', 'Phone is required');
    isValid = false;
}
```

---

## 🎯 Section Visibility

### Hide a Section

**File:** `index.html`

**To temporarily hide a section:**
```html
<!-- Comment out the entire section -->
<!--
<section id="experience" class="experience">
    ... content ...
</section>
-->
```

**OR use CSS:**
```css
#experience {
    display: none;
}
```

### Reorder Sections

Simply move the `<section>` blocks in `index.html` in any order you want.

---

## 📊 Resume Data (JSON)

**File:** `assets/resume-data.json`

```json
{
  "name": "Your Full Name",
  "email": "your.email@example.com",
  "phone": "+91 XXXXXXXXXX",
  "location": "City, Country",
  "role": "Your Job Title",
  "summary": "Brief professional summary",
  "skills": [
    "Skill 1",
    "Skill 2",
    "Skill 3"
  ],
  "experience": [
    {
      "title": "Your Job Title",
      "company": "Company Name",
      "location": "Location",
      "duration": "3 months",
      "description": "What did you do?"
    }
  ],
  "education": [
    {
      "degree": "Your Degree",
      "school": "University Name",
      "year": "Expected 2026",
      "details": "Field of study details"
    }
  ]
}
```

---

## 🆘 Common Customization Tasks

### Make Header Sticky
Already done! But to adjust top position:
```css
.navbar {
    position: fixed;
    top: 0;  /* Adjust if needed */
}
```

### Change Section Title Color
**File:** `css/style.css` (~line 105)
```css
.section-title {
    color: var(--text-light);  /* Change color here */
}
```

### Adjust Button Size
**File:** `css/style.css` (~line 136)
```css
.btn {
    padding: 0.75rem 1.5rem;  /* Adjust padding */
    font-size: 1rem;           /* Adjust font size */
}
```

### Increase/Decrease Spacing Between Cards
**File:** `css/style.css`

Find grid definitions and adjust `gap`:
```css
.skills-grid {
    gap: 2.5rem;  /* Change value for more/less space */
}
```

---

## 📚 CSS Classes for Styling

### Main Classes
- `.hero` - Hero/Home section
- `.about` - About section
- `.skills` - Skills section
- `.projects` - Projects section
- `.contact` - Contact section
- `.footer` - Footer

### Component Classes
- `.btn` - Button styling
- `.card` - Card styling
- `.form-group` - Form field
- `.error-message` - Error text
- `.tech-tag` - Technology badge

---

## 🎓 Quick Edits Summary

| What to Change | File | Location |
|---|---|---|
| Your Name | index.html | Lines 74, 79, 302 |
| Email | index.html | Lines 302, 349 |
| Social Links | index.html | Lines 303-304, 347-350 |
| Tagline | index.html | Line 75 |
| About Text | index.html | Lines 160-180 |
| Skills | index.html | Lines 210-270 |
| Projects | index.html | Lines 280-335 |
| Resume Data | js/script.js | Lines 59-70 |
| Colors | css/style.css | Lines 6-12 |
| Dark Mode Colors | css/style.css | Lines 13-25 |
| Fonts | css/style.css | Lines 17-18 |
| Spacing | css/style.css | Line 270 |

---

## ✨ Final Tips

1. **Backup Original** - Keep a copy before major changes
2. **Test Changes** - Refresh browser (Ctrl+F5) to see updates
3. **Use Browser DevTools** - F12 to test CSS changes live
4. **View Source** - Check how elements are structured
5. **Comment Code** - Add notes about your changes
6. **Consistent Naming** - Keep naming conventions consistent
7. **Test Responsive** - Always test on mobile after changes

---

**Happy customizing! 🎨**
