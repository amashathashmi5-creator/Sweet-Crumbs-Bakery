# 🍰 Sweet Crumbs Bakery — Premium Artisanal Website

A complete, responsive, premium bakery website created with **pure HTML5, CSS3, and vanilla JavaScript**. Built specifically for **Sweet Crumbs Bakery**, featuring a feminine pâtisserie aesthetic, soft rose pink, warm whipped cream, and honey-gold tones.

> **Zero build steps required!** No Node.js, npm, Vite, Next.js, or React needed. Simply open `index.html` in any browser or deploy directly to Netlify.

---

## 📁 Exact Project Structure

```text
Sweet-Crumbs-Bakery/
├── index.html                  # Main semantic HTML5 document
├── style.css                   # Custom responsive CSS3 design system
├── script.js                   # Interactive vanilla JavaScript controller
├── README.md                   # Beginner guide & documentation
├── assets/
│   └── favicon.svg             # Handcrafted SVG cupcake bakery favicon
└── images/
    ├── logo.svg                # Elegant vector brand emblem logo
    ├── placeholder-cake.svg    # Offline fallback vector artwork for cakes
    └── placeholder-pastry.svg  # Offline fallback vector artwork for pastries
```

---

## ✨ Features Included

1. **Top Announcement Ribbon**: Opening hours, telephone link, and street address.
2. **Sticky Navigation & Mobile Drawer**: Smooth glassmorphism header, responsive animated hamburger menu, and desktop active section highlighting.
3. **Hero Section**:
   - Tagline: *"Baked With Love, Made To Delight."*
   - High-resolution tiered celebration cake photography.
   - Dual Call to Actions (Menu & direct WhatsApp order).
   - Bakery highlights: 100% scratch baked, 2,500+ celebrations, 4.9-star rating.
4. **Our Story & Artisanal Philosophy**:
   - Background on Head Pastry Chef Eléonore.
   - 4 Pillars of quality (AOP French Butter, Pure Madagascar Vanilla, Custom Cake Artistry, Fresh at Dawn).
5. **Interactive Featured Menu (Filterable)**:
   - Filter tabs: All Confections, Signature Cakes, French Pastries, Macarons & Treats, Artisan Breads.
   - 12 product cards with prices, descriptions, and dietary badges.
   - **Quick Details Modal**: Ingredients, serving sizes, and allergen details.
   - Direct WhatsApp order buttons with pre-filled item names and prices.
6. **Interactive Custom Cake Studio**:
   - 5-step visual cake builder (Occasion, Size/Tiers, Sponge Flavor, Filling, and Finish).
   - Live real-time price calculator.
   - Instant **"Send Order via WhatsApp"** button generating a formatted order summary.
7. **Special Occasions Showcase**:
   - Weddings & Receptions (with complimentary tasting box consultation).
   - Milestone Birthdays (vintage Lambeth piping, smash cakes).
   - Baby Showers & Gender Reveals (colored sponge reveals, macaron favors).
   - Corporate & High Tea (luxury corporate gift boxes).
8. **Bakery Gallery with Lightbox Popup**:
   - Responsive photo grid with captions and hover zoom.
   - Full-screen vanilla JS image lightbox viewer.
9. **Customer Testimonials**:
   - 4 heartfelt reviews with client avatars, 5-star ratings, and occasion labels.
10. **Contact & Location**:
    - Bakery address, telephone, email, opening hours, and styled interactive map card.
    - Validated contact form (validates name, email, phone, and message).
    - Honest submission feedback banner with unique reference code (`#SC-XXXX`) and an option to send the exact inquiry to WhatsApp.
11. **Footer**:
    - Social links (Instagram, Facebook, Pinterest, WhatsApp).
    - Navigation links, specialty links, boutique hours, and "Back to Top" button.
12. **Floating WhatsApp Button**:
    - Fixed bottom-right corner with pulse animation for mobile users.

---

## 🚀 How to Preview the Website

### Method 1: Double-Click (Simplest)
1. Navigate to the `Sweet-Crumbs-Bakery` folder on your computer.
2. Double-click the file named `index.html`.
3. It will open instantly in your default web browser (Chrome, Edge, Safari, Firefox).

### Method 2: Using VS Code Live Server (Recommended)
1. Open Visual Studio Code.
2. Click **File** > **Open Folder...** and select `Sweet-Crumbs-Bakery`.
3. If you have the **Live Server** extension installed, right-click `index.html` and click **"Open with Live Server"**.
4. The site will run on `http://127.0.0.1:5500`.

### Method 3: Using Python (Optional)
If you have Python installed, open PowerShell or Terminal in this folder and run:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

---

## 🧪 How to Test Its Functionality

1. **Navigation Links**: Click on each navigation link in the top bar (`Our Story`, `Menu & Treats`, `Custom Cakes`, etc.) and ensure it smoothly scrolls to each section.
2. **Mobile Navigation**: Resize your browser window below 768px wide. Click the hamburger icon (three lines) to open the mobile drawer. Click any link to ensure the drawer smoothly closes.
3. **Menu Filters**: In the **Featured Cakes & Fresh Pastries** section, click `Signature Cakes`, `French Pastries`, `Macarons & Treats`, and `Artisan Breads`. Notice only matching products display.
4. **Product Details Modal**: Click the **"Details"** button on any product card. Inspect the ingredients, serving size, and allergens. Press `ESC` or click the `×` button to close.
5. **Interactive Custom Cake Builder**: In the **Design Your Dream Cake** section, select different tiers (e.g., 3-Tier Luxury), different flavors, and finishes. Notice the live order summary updates and the price automatically recalculates!
6. **Gallery Lightbox**: Click any gallery photo. A dark overlay will enlarge the photo with its caption. Click the `×` icon or outside the photo to close.
7. **Contact Form Validation**:
   - Leave the form blank and click **"Submit Cake Inquiry"**. Red validation warnings will appear.
   - Enter your name, valid email, phone number, and a short message.
   - Click submit. A green confirmation banner will appear with a reference number and a button to forward the details to WhatsApp.
8. **WhatsApp Buttons**: Click any WhatsApp button on the page. It will open `https://wa.me/...` with an encoded message tailored to that action.

---

## 📦 How to Upload to GitHub

You can upload this project using either the GitHub website (no command line needed) or using Git.

### Option A: Via GitHub Website (Beginner-Friendly, No Terminal Needed)
1. Go to [github.com](https://github.com) and log into your account.
2. Click the **"+"** icon in the top-right corner and select **New repository**.
3. Name your repository `Sweet-Crumbs-Bakery`.
4. Set the repository to **Public**.
5. Leave "Add a README file" **unchecked** (we already created one).
6. Click **Create repository**.
7. On the next screen, click the link that says **"uploading an existing file"**.
8. Drag and drop all the files and folders from `Sweet-Crumbs-Bakery` into the upload box:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
   - `assets/`
   - `images/`
9. Type a commit message (e.g., `"Initial commit of Sweet Crumbs Bakery"`) and click **Commit changes**.

### Option B: Via Git Command Line (If you have Git installed)
Open your terminal inside the `Sweet-Crumbs-Bakery` directory and run:
```bash
git init
git add .
git commit -m "Initial commit of Sweet Crumbs Bakery"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/Sweet-Crumbs-Bakery.git
git push -u origin main
```
*(Replace `YOUR_USERNAME` with your actual GitHub username).*

---

## 🌐 How to Publish on Netlify

Netlify makes deploying vanilla HTML websites free and instant.

### Method 1: Netlify Drag & Drop (Fastest, Takes 30 Seconds)
1. Go to [netlify.com](https://www.netlify.com/) and log in (or sign up with your GitHub account).
2. Go to the **Sites** dashboard tab.
3. Scroll down to the section that says **"Want to deploy a new site without connecting to Git? Drag and drop your site output folder here"**.
4. Drag the entire `Sweet-Crumbs-Bakery` folder from your computer and drop it directly onto the Netlify webpage.
5. Netlify will deploy it in seconds and give you a live production URL (e.g. `https://sweet-crumbs-bakery.netlify.app`)!

### Method 2: Connect via GitHub (Automatic Updates)
1. In your Netlify dashboard, click **Add new site** > **Import an existing project**.
2. Select **GitHub** and authorize access.
3. Search for your repository: `Sweet-Crumbs-Bakery`.
4. In the deploy settings:
   - **Branch to deploy**: `main`
   - **Base directory**: *(leave empty)*
   - **Build command**: *(leave completely empty — no build step needed!)*
   - **Publish directory**: `.` *(a single period, meaning the root directory)*
5. Click **Deploy Sweet-Crumbs-Bakery**.
6. Whenever you push new changes to GitHub, Netlify will automatically update your live site!

---

## 🎨 Customizing the Bakery Phone & WhatsApp Number

To change the WhatsApp phone number to your own bakery number:
1. Open `script.js` in a text editor (Notepad, VS Code, etc.).
2. At the top of the file, locate line 18:
   ```javascript
   const BAKERY_WHATSAPP_NUMBER = '15557933827';
   ```
3. Replace `15557933827` with your phone number including country code (without spaces, `+`, or dashes).
4. In `index.html`, do a quick Find & Replace for `15557933827` to update any direct links.
5. Save the file and refresh your browser!

---

© 2024 Sweet Crumbs Bakery. Baked with love, made to delight.
