# 📸 How to Add Your Image & Resume

## Step 1: Prepare Your Files

### Your Profile Image
1. Get your profile photo (JPG or PNG)
2. Recommended size: 400x400 pixels or larger
3. Make it square (1:1 ratio) for best appearance
4. Name it: `profile.jpg` or `profile.png`

### Your Resume
1. Export/save your resume as PDF
2. Make sure it's a good quality PDF
3. Name it: `resume.pdf`

---

## Step 2: Add Files to Assets Folder

### Location: `d:\sneh_port_2\assets\`

**Add both files:**
- `profile.jpg` (your profile image)
- `resume.pdf` (your resume)

**Final structure should look like:**
```
assets/
├── profile.jpg           ← Your profile photo
├── resume.pdf            ← Your resume
├── resume-data.json      ← Already exists
```

---

## Step 3: How It Works Now

### Your Profile Image
- **Where it appears:** In the About section
- **Automatically displays:** When you open the website
- **What it shows:** A circular bordered image with hover effect
- **Size:** 300x300 pixels on desktop, 250x250 on mobile

### Your Resume Download
- **Where it appears:** In the Resume section with "Download Resume" button
- **How to use:** Click the button to download your resume
- **Automatic:** Works immediately once resume.pdf is in assets/

---

## Step 4: Update Profile Information

Edit `assets/resume-data.json`:

```json
{
  "name": "Your Full Name",
  "email": "your.email@gmail.com",
  "phone": "+91 XXXXXXXXXX",
  "location": "City, Country",
  "role": "Full Stack Developer",
  "summary": "Brief professional summary",
  "skills": [
    "Skill 1",
    "Skill 2",
    "Skill 3"
  ]
}
```

---

## Step 5: Test Your Changes

1. **Open** `index.html` in your browser
2. **Check About section** - Your profile image should appear
3. **Click "Download Resume"** - Your PDF should download
4. **Mobile test** - Resize browser to see responsive image
5. **Dark mode** - Toggle to verify image looks good in both themes

---

## ✅ Quick Checklist

- [ ] Profile image saved as `assets/profile.jpg`
- [ ] Resume saved as `assets/resume.pdf`
- [ ] Updated `resume-data.json` with your info
- [ ] Tested in browser
- [ ] Profile image displays
- [ ] Resume download works
- [ ] Mobile view looks good

---

## 🎨 Profile Image Tips

✅ **Do:**
- Use a professional headshot
- Good lighting
- Clear face visible
- Square format (1:1)
- 400x400 pixels minimum
- JPG or PNG format

❌ **Don't:**
- Use blurry images
- Use group photos
- Use very casual photos
- Use low resolution
- Use GIF format

---

## 📄 Resume PDF Tips

✅ **Do:**
- Use clear formatting
- Include contact info
- List skills prominently
- Show experience
- Include education
- Keep to 1-2 pages

❌ **Don't:**
- Use image format
- Make it too fancy
- Use uncommon fonts
- Make file too large
- Use outdated format

---

## 🆘 Troubleshooting

### Image Not Showing?
1. Check filename is exactly `profile.jpg`
2. Hard refresh browser (Ctrl+F5)
3. Check file is in `assets/` folder
4. Check file format (JPG or PNG)

### Resume Not Downloading?
1. Check filename is exactly `resume.pdf`
2. Check file is in `assets/` folder
3. Check PDF is valid (not corrupted)
4. Try different browser

### Image Looks Weird?
1. Make sure image is square (1:1 ratio)
2. Image should be at least 300x300
3. Try JPG instead of PNG
4. Crop if not square

---

## 📝 Example

### Your assets folder should have:

```
assets/
├── profile.jpg
│   └── Your professional headshot
│
├── resume.pdf
│   └── Your complete resume
│
└── resume-data.json
    └── Your resume data
```

---

**That's it! Your portfolio now displays your image and resume!** ✨

Once added, your portfolio will show:
- 🖼️ Your profile image in About section
- 📥 Resume download button that works
- 💼 Professional appearance
- 📱 Mobile-responsive image

**Questions?** Check the main README.md file.
