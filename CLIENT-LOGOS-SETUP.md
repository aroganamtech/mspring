# Client Logos Setup Guide for Apply Job Page

Your Apply Job page is now ready to display client logos with elegant animations! Here's what you need to do:

## Step 1: Create the Clients Assets Folder

Create a new folder:
```
src/assets/clients/
```

## Step 2: Add Logo Files

Place your client logo SVG or PNG files in `src/assets/clients/` with these exact filenames:

| Company | Filename |
|---------|----------|
| Airtel | `airtel.svg` or `airtel.png` |
| Tech Mahindra | `tech-mahindra.svg` or `tech-mahindra.png` |
| 3i Infotech | `3i-infotech.svg` or `3i-infotech.png` |
| ITC Infotech | `itc-infotech.svg` or `itc-infotech.png` |
| Quess | `quess.svg` or `quess.png` |
| Medikabazaar | `medikabazaar.svg` or `medikabazaar.png` |
| NTT Data | `ntt-data.svg` or `ntt-data.png` |
| Capgemini | `capgemini.svg` or `capgemini.png` |
| LTIMindtree | `ltimindtree.svg` or `ltimindtree.png` |
| Accenture | `accenture.svg` or `accenture.png` |
| BDO | `bdo.svg` or `bdo.png` |
| Adobe | `adobe.svg` or `adobe.png` |
| UST | `ust.svg` or `ust.png` |
| Tata Advanced Systems | `tata-advanced-systems.svg` or `tata-advanced-systems.png` |
| FIS | `fis.svg` or `fis.png` |
| Happiest Minds | `happiest-minds.svg` or `happiest-minds.png` |
| Zensar | `zensar.svg` or `zensar.png` |
| Zeta | `zeta.svg` or `zeta.png` |
| Dentsu | `dentsu.svg` or `dentsu.png` |
| Blue Star | `blue-star.svg` or `blue-star.png` |

**Use SVG for best quality** (scalable and smaller file size) — PNG works too.

## Step 3: Logo Specifications

- **Size**: 200×200px minimum (will be scaled to 48px max-height in the tiles)
- **Format**: SVG (recommended) or PNG
- **Background**: Transparent
- **Color**: Full color (logos look best in color)

## Features & Animations

✨ **Animated Logo Grid**
- Smooth fade-in cascade animation as the page loads
- Each logo fades in with a staggered delay

🎨 **Grayscale-to-Color Hover Effect**
- Logos appear grayscale by default (elegant, professional look)
- On hover: Logo goes full color with a subtle lift effect
- Box shadow expands to show interactivity

📱 **Responsive Layout**
- On desktop (1024px+): 2-column grid
- On tablet: 4-column grid  
- On mobile: 2-column grid (automatic)

## Fallback Behavior

If a logo file is missing or fails to load, the component automatically falls back to displaying the company name as text. So you can add logos gradually — start with your top clients.

## Example: Adding the First Logo

1. Download/create Airtel's logo as `airtel.svg`
2. Place it in `src/assets/clients/airtel.svg`
3. Your app will automatically load and display it with animations!

---

**Questions?** The ApplyJobPage component has been updated to handle logo images. Just add your SVG/PNG files to `src/assets/clients/` and the page will render them automatically. 🚀
