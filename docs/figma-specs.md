# Panto Landing — Figma Specs (MCP)

Figma file: https://www.figma.com/design/mxKMr8cL6ufY2pQ4fSKXqC/Panto---Furniture-Landing-Page-Design--Community-
Entry node: 1:2

## 0) Frame inventory (pages / top frames)

- **Webdesign** (1:2) — Main frame, 1440 × 5622 px, white background

### Children (53 nodes, top to bottom):

| ID | Name | Type | Section |
|----|------|------|---------|
| 1:3 | Rectangle 1441 | RECTANGLE | Hero background image |
| 1:4 | Frame 48095388 | FRAME | Search bar |
| 1:10 | Group 4161 | GROUP | Nav links |
| 1:18 | Panto | TEXT | Logo |
| 1:20 | Make your interior… | TEXT | Hero heading |
| 1:21 | Turn your room… | TEXT | Hero subtitle |
| 1:22–1:28 | Groups | GROUP | Social / scroll indicators |
| 1:31 | Bag | FRAME | Cart icon |
| 1:35–1:38 | Groups | GROUP | Hero decorative elements |
| 1:55 | Why Choosing Us | TEXT | Section heading |
| 1:57 | We provide many… | TEXT | Section description |
| 1:58–1:76 | Groups / Texts | MIXED | 3 feature cards (Many Choices, Luxury Facilities, Affordable Price) |
| 1:78 | Rectangle 1444 | RECTANGLE | Section divider / image |
| 1:81 | Best Selling Product | TEXT | Section heading |
| 1:82 | Frame 48095400 | FRAME | Product tab bar |
| 1:93 | Group 48095401 | GROUP | Product cards grid (4 products) |
| 1:242–1:248 | Frames / Groups | MIXED | Navigation arrows + View All |
| 1:254–1:257 | Rectangles | RECTANGLE | Experience section images |
| 1:260 | we provide you… | TEXT | Experience heading |
| 1:261 | You don't have… | TEXT | Experience description |
| 1:270–1:272 | Rectangles | RECTANGLE | Materials section images |
| 1:282 | Very serious materials… | TEXT | Materials heading |
| 1:283 | Because panto was… | TEXT | Materials description |
| 1:292–1:398 | Groups | GROUP | Testimonials section (3 reviews) |
| 1:402–1:408 | Frames | FRAME | Footer area |

---

## 1) Design Tokens

### Colors

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| brand-orange | `#E58411` | 229, 132, 17 | Primary CTA, buttons, highlights |
| brand-orange-light | `#F6973F` | 246, 151, 63 | Hover states, secondary accent |
| teal | `#00D5C8` | 0, 213, 200 | Accent color |
| dark-navy | `#0D1A39` | 13, 26, 57 | Primary heading text |
| dark-text | `#1E2832` | 30, 40, 50 | Body text |
| gray-medium | `#7C7C7C` | 124, 124, 124 | Secondary / muted text |
| gray-light | `#8D8D8D` | 141, 141, 141 | Tertiary text |
| bg-light-1 | `#F9F9F9` | 249, 249, 249 | Light section background |
| bg-light-2 | `#F7F7F7` | 247, 247, 247 | Alternate section background |
| bg-light-3 | `#EEEEEE` | 238, 238, 238 | Tab bar background, borders |
| white | `#FFFFFF` | 255, 255, 255 | Main background, hero text |
| black | `#000000` | 0, 0, 0 | Icons |

### Typography

| Style | Family | Weight | Size | Line-height | Letter-spacing | Usage |
|-------|--------|--------|------|-------------|----------------|-------|
| H1 Hero | Gilroy-Bold | bold | 80px | 130% (104px) | -0.8px | Hero main heading |
| H2 Section | Gilroy-Bold | bold | 42px | auto | 0 | Section headings (Why Choosing Us, Best Selling, etc.) |
| H3 Card | Gilroy-Bold | bold | 24px | auto | 0 | Feature card titles |
| Logo | Gilroy-Bold | bold | 28px | intrinsic | 0.28px | Brand logo "Panto", title-case |
| Nav link | Gilroy-Medium | medium | 18px | 150% (27px) | 0 | Navigation links |
| Body large | Gilroy-Regular | regular | 24px | 160% (38.4px) | 0 | Hero subtitle |
| Body | Gilroy-Regular | regular | 18px | ~160% | 0 | Section descriptions |
| Body small | Gilroy-Regular | regular | 16px | auto | 0 | Feature card descriptions |
| CTA text | Gilroy-Medium | medium | 14px | auto | 0 | "More Info" buttons |
| Label | Gilroy-SemiBold | semi-bold | 18px | auto | 0 | Section tab labels |
| Product name | Inter | 600 | ~21px | auto | 0 | Product card titles |
| Product category | Inter | 400 | ~17px | auto | 0 | Product card subtitles |
| Product price $ | Inter | 600 | ~15px | auto | 0 | Currency symbol |
| Product price num | Inter | 600 | ~21px | auto | 0 | Price numbers |
| Footer heading | DM Sans | 400 | 17px | auto | 0 | Footer section headings |
| Footer link | Gilroy-Medium | medium | 15px | auto | 0 | Footer links |
| Footer copy | DM Sans | 400 | 15px | auto | 0 | Copyright text |
| Testimonial name | Gilroy-Bold | bold | 18px | auto | 0 | Reviewer names |
| Testimonial role | Gilroy-Regular | regular | 12px | auto | 0 | Reviewer roles |
| Testimonial body | Gilroy-Regular | regular | 14px | auto | 0 | Review text |

### Radius / Shadows / Blur

**Corner Radii:**
- Search bar: `42px` (full pill)
- Search button (orange): `24px`
- Product tab bar: `44px` (pill)
- Product tab items: `32px` (pill)
- Product card image: `20px`
- Section images large: `49px`
- Section images medium: `20px`
- Decorative rounded rect: `36px`
- Navigation arrows: `~26px` (circle)
- Testimonial avatars: `~44px` (circle)
- Testimonial avatar small: `~18px`

**Shadows:**
- Navigation arrows: `drop-shadow(0 7px 19.5px rgba(0,0,0,0.06))`
- Scroll indicator dots: `drop-shadow(0 4px 6px rgba(0,0,0,0.10))`
- Check icon: `drop-shadow(0 4px 4px rgba(0,0,0,0.25))`

**Blur:**
- Search bar: `backdrop-blur(8px)`
- Hero social icons: `backdrop-blur(8px)`
- Product card price bg: `blur(24px)` (layer blur)
- Section decorative blobs: `blur(50px)` (layer blur)
- Testimonial card bg: `backdrop-blur(11px)`

### Layout

- Container max width: `1440px`
- Main frame: 1440 × 5622 px
- Hero background image: 1440 × 1084 px (with gradient overlay fading to white at bottom)
- Search bar width: `344px`, height: `56px`
- Product tab bar: `348px × 57px`
- Product tab items: `84px × 45px`

---

## 2) Navbar Specs

- **Height:** ~40px content area (logo to icons)
- **Padding X:** ~80px (logo at x=-881, frame edge at x=-961)
- **Logo:** "Panto" — Gilroy-Bold 28px, white, title-case, letter-spacing 0.28px
- **Links:** Furniture, Shop, About Us, Contact — Gilroy-Medium 18px, white
- **Icons:** Search icon (magnifier in group), Bag icon (34×34px, black)
- **Position:** Overlaid on hero image (transparent background)
- **Z-index:** Above hero image

## 3) Hero Specs

- **Section height:** 1084px (background image)
- **Background image:** Full-width image (imageRef: `d2bee09011d0ef5c5aab59b69714774a45812d7d`)
  - Filters: contrast +0.07, saturation +0.14, shadows -0.18
- **Overlay gradient:** Linear top→bottom, transparent at 86% → white at 100%
- **Title (H1):** "Make your interior more minimalistic & modern"
  - Gilroy-Bold 80px, white, title-case
  - Width: 861px, centered
  - Line-height: 130% (104px), letter-spacing: -0.8px
- **Subtitle:** "Turn your room with panto into a lot more minimalist and modern with ease and speed"
  - Gilroy-Regular 24px, white
  - Width: 606px, centered
  - Line-height: 160% (38.4px)
- **Search bar:** 344 × 56px, white bg with `backdrop-blur(8px)`, border-radius 42px
  - Padding: 8px top/bottom/right, 20px left
  - Contains: "Search furniture" placeholder (Gilroy-Regular 18px, white 80% opacity)
  - Orange search button: 40×40px, border-radius 24px, fill `#E58411`
- **Spacing:** Title top ~160px from nav, subtitle ~14px below title, search bar ~36px below subtitle
- **Decorative elements:** Social media icons (left side), scroll indicators (bottom), floating UI elements

## 4) Sections Detail

### Why Choosing Us (starts below hero)
- **Heading:** "Why Choosing Us" — Gilroy-Bold 42px, dark navy `#0D1A39`
- **Subtext:** Gilroy-Regular 16px, gray `#7C7C7C`
- **3 Feature cards:**
  - Icon in circle (with shadow)
  - Title: Gilroy-Bold 24px (Many Choices, Luxury Facilities, Affordable Price)
  - Description: Gilroy-Regular 16px
  - CTA: "More Info" — Gilroy-Medium 14px, with arrow icon
- **Layout:** Vertical stack, left-aligned

### Best Selling Product
- **Heading:** "Best Selling Product" — Gilroy-Bold 42px
- **Tab bar:** 348 × 57px, bg `#EEEEEE`, border-radius 44px
  - Tabs: Chair (active, orange bg), Beds, Sofa, Lamp
  - Each tab: 84 × 45px, border-radius 32px
  - Active tab text: Gilroy-Medium 18px
  - Inactive tab text: Gilroy-Regular 18px
- **Product cards (4 in a row):**
  - Image with rounded corners (20px)
  - Blurred price tag overlay (blur 24px)
  - Product name: Inter 600 ~21px
  - Category: Inter 400 ~17px
  - Price: "$" Inter 600 ~15px + number Inter 600 ~21px
  - Cart button: circular (31px radius)
  - Products: Sakarias Armchair ($392), Baltsar Chair ($299), Anjay Chair ($519), Nyantuy Chair ($921)
- **Navigation:** Left/right arrows (50×50px circles, shadow), "View All" link

### Experience Section
- **Heading:** "we provide you the best experience" — Gilroy-Bold 42px
- **Description:** Gilroy-Regular 18px
- **CTA:** "More Info" — Gilroy-Medium 14px
- **Label:** "experiences" — Gilroy-SemiBold 18px
- **Images:** 4 rectangles with various border radii (49px, 20px), decorative blurred blobs (blur 50px)
- **Navigation arrows:** Same style as products section

### Materials Section
- **Heading:** "Very serious materials for making furniture" — Gilroy-Bold 42px
- **Description:** Gilroy-Regular 18px
- **CTA:** "More Info" — Gilroy-Medium 14px
- **Label:** "Materials" — Gilroy-SemiBold 18px
- **Images:** 3 rectangles (49px, 20px radius), decorative elements
- **Small image cards:** border-radius 29px, with secondary images (14.25px radius)

### Testimonials
- **Heading:** "Our Client Reviews" — Gilroy-Bold 42px
- **Label:** "Testimonials" — Gilroy-SemiBold 18px
- **3 review cards:**
  - Avatar: circular (~44px radius), with blurred background
  - Star ratings: 5 stars (Iconly/Bold/Star icons)
  - Name: Gilroy-Bold 18px
  - Role: Gilroy-Regular 12px
  - Quote: Gilroy-Regular 14px
  - Reviews: Ibuk Sukijan, Mpok Ina, Bang Upin
- **Card bg:** `backdrop-blur(11px)`, rounded (~18px)
- **Navigation arrows:** Same style

### Footer
- **Background:** Dark section
- **Logo:** "Panto" — Gilroy-Bold 28px
- **Description:** Gilroy-Medium 15px
- **Columns:**
  - Services (DM Sans 17px): Email Marketing, Campaigns, Branding
  - Furniture (DM Sans 17px): Beds, Chair, All
  - Follow Us (DM Sans 17px): Facebook, Twitter, Instagram
- **Links:** Gilroy-Medium 15px
- **Bottom bar:** Terms & Conditions | Copyright © 2021 | Privacy Policy (DM Sans 15px)
- **Navigation arrows:** Left/right (50×50px, same circle style)

---

## 5) Image References

| Node ID | Image Ref | Description |
|---------|-----------|-------------|
| 1:3 | `d2bee09011d0ef5c5aab59b69714774a45812d7d` | Hero background |
| 1:78 | (image) | Why Choosing Us section image |
| 1:254–1:257 | (images) | Experience section images |
| 1:270–1:272 | (images) | Materials section images |
| 1:293 | unsplash:JaXs8Tk5Iww | Testimonial 1 avatar |
| 1:328 | unsplash:h2_3dL9yLpU | Testimonial 2 avatar |
| 1:364 | unsplash:_HqHX3LBN18 | Testimonial 3 avatar |

To download images via Figma API:
```
GET https://api.figma.com/v1/images/mxKMr8cL6ufY2pQ4fSKXqC?ids=<node_id>&format=png&scale=2
```
