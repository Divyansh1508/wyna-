# Logo Setup Instructions

## 📸 How to Add the WYNA Logo

Your WYNA brand logo (the beautiful red and golden image you provided) needs to be added to the project.

### Step-by-Step:

1. **Locate Your Logo File**

   - Find the WYNA logo image (the one with red background and golden text "WYNA")
   - This is the image you showed me with "Weave Your New Aura" and "2026-27"

2. **Rename the File**

   - Rename the file to exactly: `logo.jpeg`
   - Make sure it's `.jpeg` not `.jpg` or `.png`
   - Or if you want to keep original format, update references in code

3. **Copy to Correct Location**

   - Navigate to: `C:\Users\divya\Desktop\web\frontend\public\`
   - Paste the `logo.jpeg` file there
   - Final path should be: `C:\Users\divya\Desktop\web\frontend\public\logo.jpeg`

4. **Verify**
   - The file should be in the same folder as `index.html` and `manifest.json`
   - File size should be reasonable (< 1MB for web performance)

### Where the Logo Appears:

Once added, the logo will automatically show in:

- ✅ Website header (top left)
- ✅ Admin dashboard sidebar
- ✅ Browser tab icon (favicon)
- ✅ Hero section background pattern

### File Structure:

```
web/
└── frontend/
    └── public/
        ├── index.html
        ├── manifest.json
        └── logo.jpeg  ← PUT YOUR LOGO HERE
```

### Troubleshooting:

**Logo Not Showing?**

1. Check file name is exactly `logo.jpeg`
2. Check file is in `frontend/public/` folder
3. Clear browser cache (Ctrl + Shift + R)
4. Restart the development server

**Need Different Format?**
If your logo is `.png` or `.jpg`:

- Either rename to `.jpeg`
- Or update these files to use `.png`/`.jpg`:
  - `frontend/src/components/Header/Header.js`
  - `frontend/src/pages/Admin/AdminDashboard.js`
  - `frontend/public/index.html`

### Quick Test:

After adding the logo, open browser and navigate to:

```
http://localhost:3000
```

You should see the WYNA logo in:

- Top left corner of header
- Red and golden color scheme
- Professional branding throughout

---

**Note**: The logo image you shared (with the model wearing traditional attire and "WYNA" text) is perfect for this! Just save it as `logo.jpeg` in the correct folder.
