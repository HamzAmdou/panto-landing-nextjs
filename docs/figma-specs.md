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
| 1:22 | Group 4148 | GROUP | Glass dot indicator (32×32), bottom-left |
| 1:25 | Group 4151 | GROUP | Glass dot indicator (32×32), center-bottom |
| 1:28 | Group 4154 | GROUP | Glass dot indicator (37×37), bottom-right |
| 1:31 | Bag | FRAME | Cart bag icon (34×34, white path) |
| 1:35 | Group 4157 | GROUP | Cart badge (orange ellipse with "0") |
| 1:38 | Group 4160 | GROUP | Color picker widget (112×138) |
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
| white | `#FFFFFF` | 255, 255, 255 | Main background, hero text, navbar icons |

### Typography

| Style | Family | Weight | Size | Line-height | Letter-spacing | Usage |
|-------|--------|--------|------|-------------|----------------|-------|
| H1 Hero | Gilroy-Bold | bold | 80px | 130% (104px) | -0.8px | Hero main heading |
| H2 Section | Gilroy-Bold | bold | 42px | auto | 0 | Section headings (Why Choosing Us, Best Selling, etc.) |
| H3 Card | Gilroy-Bold | bold | 24px | auto | 0 | Feature card titles |
| Logo | Gilroy-Bold | bold | 28px | intrinsic | 0.28px | Brand logo "Panto", title-case |
| Nav link | Gilroy-Medium | medium | 18px | 21px | 0 | Navigation links |
| Body large | Gilroy-Regular | regular | 24px | 160% (38.4px) | 0 | Hero subtitle (opacity 0.80) |
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
- Glass dot indicators: `backdrop-blur(4px)`
- Color picker pill: `backdrop-blur(4px)`
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

- **Height:** 35px content area (grid row)
- **Top padding:** 40px from viewport top
- **Layout:** CSS Grid `grid-cols-[1fr_auto_1fr]`, centered within Container (max-w 1440px, px 80px)
- **Logo (node 1:18):** "Panto" — Gilroy-Bold 28px, white, letter-spacing 0.28px, justify-self-start
- **Nav links (node 1:10):** Gilroy-Medium 18px, line-height 21px, white
  - Furniture (with dropdown arrow node 1:14, 10×6 white chevron) → Shop: `ml-66px`
  - Shop → About Us: `ml-62px`
  - About Us → Contact: `ml-64px`
- **Dropdown arrow (node 1:14):** 10×6px white SVG chevron, `ml-2` from "Furniture" text
- **Bag icon (node 1:31):** 34×34px, inline SVG, white fill (`#FFFFFF`) — NOT black
- **Cart badge (node 1:35):** Orange ellipse 20×26px (`#E58411`) with "0" white vector path, absolute positioned `top-[3px] left-[20px]` relative to bag
- **Position:** Overlaid on hero image (`absolute inset-x-0 top-0 z-20`)
- **Hidden on mobile:** Nav links use `hidden md:flex`

## 3) Hero Specs

- **Section height:** 1084px (background image)
- **Background image (node 1:3):** Full-width image (imageRef: `d2bee09011d0ef5c5aab59b69714774a45812d7d`)
  - Filters: `contrast(1.07) saturate(1.14) brightness(0.82)`
- **Overlay gradient:** `linear-gradient(180deg, transparent 0%, transparent 86%, white 100%)`
- **Content:** Centered within Container, `pt-200px`
- **Title — H1 (node 1:20):** "Make Your Interior More / Minimalistic & Modern"
  - Gilroy-Bold 80px, white
  - `max-w-900px`, centered, two `<span>` blocks with `whitespace-nowrap`
  - Line-height: 130% (104px), letter-spacing: -0.8px
- **Subtitle (node 1:21):** "Turn your room with panto into a lot more minimalist and modern with ease and speed"
  - Gilroy-Regular 24px, white, **opacity: 0.80**
  - Width: 606px, centered
  - Line-height: 160% (38.4px)
  - Margin-top: 14px below title
- **Search bar (node 1:4):** 344 × 56px, `bg-white/15`, `border border-white/60`, `backdrop-blur(8px)`, border-radius 42px
  - Padding: 8px top/bottom/right, 20px left
  - Placeholder: "Search furniture" — Gilroy-Regular 18px, `white/80` opacity
  - Orange search button: 40×40px, border-radius 24px, fill `#E58411`, contains Search icon (lucide-react)
  - Margin-top: 36px below subtitle

### Hero Decorative Elements

All positioned absolutely within a 1440px-wide coordinate frame (`absolute inset-0 mx-auto max-w-[1440px]`).

- **Glass dot (node 1:22):** 32×32px at `left:103px, top:743px`
  - `backdrop-blur(4px)`, `bg-white/20`, `border border-white/60`, rounded-full
  - Inner dot: 9×9px white circle
- **Glass dot (node 1:25):** 32×32px at `left:800px, top:777px`
  - Same style as node 1:22
- **Glass dot (node 1:28):** 37×37px at `left:1369px, top:809px`
  - Same style, slightly larger; inner dot: 11×11px white circle
- **Color picker (node 1:38):** 112×138px at `left:249px, top:585px`
  - Glass pill shape (rounded rect with pointed bottom, `bg-white/20`, `border-white/60`)
  - 3 color circles (r=12, stroke white 2px):
    - Orange `#E58411` (selected, with white checkmark icon)
    - Teal `#00D6C9`
    - Gray `#7C7C7C`
  - Pointer circle below: outer r=28 (`bg-white/20`, `stroke-white/60`), inner r=9 white solid

## 4) Sections Detail

### Why Choosing Us (nodes 1:55–1:76)

**Layout:** 4-column grid within Container (1440px, px-80).
- Col 1: Section title (left-aligned, relX=80)
- Col 2: "Luxury facilities" card (relX=452)
- Col 3: "Affordable Price" card (relX=764)
- Col 4: "Many Choices" card (relX=1076)
- Column spacing: ~312px apart, card description width: 284px
- Section top: relY=1204 (below hero 1084px + gap)

**Section title (node 1:55):** "Why\nChoosing Us" (two lines)
- Gilroy-Bold 42px, line-height 49.22px (~117%), color `#1E1E1E`, opacity 1.0
- Position: relX=80, relY=1242, w=242, h=104
- Vertically centered with card content

**3 Feature cards** (identical structure, different content):

| Card | Title node | Desc node | CTA node | relX |
|------|-----------|-----------|----------|------|
| Luxury facilities | 1:69 | 1:64 | 1:65 | 452 |
| Affordable Price | 1:76 | 1:71 | 1:72 | 764 |
| Many Choices | 1:62 | 1:57 | 1:58 | 1076 |

**Card title:** Gilroy-Bold 24px, line-height 28.13px, color `#1E1E1E`, opacity 0.9
**Card description:** Gilroy-Regular 16px, line-height 29.6px (~185%), color `#1E1E1E`, opacity 0.8, w=284px
**Card CTA:** "More Info" — Gilroy-Medium 14px, color `#E58411` (brand orange)
- Arrow icon: 39×13px SVG, stroke `#E58411` 1px, square line-cap
- Gap title→desc: ~20px, gap desc→CTA: ~14px

**Card content (text):**
- Luxury facilities: "The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities."
- Affordable Price: "You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here."
- Many Choices: "We provide many unique work space choices so that you can choose the workspace to your liking."

### Best Selling Product (nodes 1:78–1:251)

**Section background (node 1:78):** `1440 × 906px`, fill `#F7F7F7`, relY=1504

**Heading (node 1:81):** "Best Selling Product"
- Gilroy-Bold 42px, line-height 49.22px, color `#1E1E1E`
- Position: relX=525, relY=1554 (centered in section)

**Tab bar (node 1:82):** 348 × 57px, bg `#EEEEEE`, border-radius 44px, padding 6px
- Layout: horizontal, 4 tabs
- Each tab: 84 × 45px, border-radius 32px, centered text
- Active tab: bg `#FFFFFF`, Gilroy-Medium 18px, color `#1E1E1E/80`
- Inactive tab: bg transparent, Gilroy-Regular 18px, color `#1E1E1E/80`
- Tabs: Chair (active), Beds, Sofa, Lamp
- Position: relX=546, relY=1638

**Product cards (node 1:93):** 4 cards in a row, relX=121, relY=1775
- Card size: 268 × 492px (bg rect: 268 × 442), cornerRadius 20px, bg `#FFFFFF`
- Card gap: ~42px
- Product image: ~218 × 256px at top, gradient overlay below
- Typography:
  - Category: Inter 400 16.76px, line-height 20.28px, color `#8D8D8D`
  - Product name: Inter 600 21.33px, line-height 25.81px, color `#0E1B3A`
  - Price "$": Inter 600 15.23px, color `#0E1B3A`
  - Price amount: Inter 600 21.33px, color `#0E1B3A`
- Star rating: 5 filled stars, 18.28px, fill `#000000`
- Add button: 48.74px circle, bg `#0E1B3A`, white "+" icon
- Products (Chair tab):
  - Sakarias Armchair — $392 (image: chair-1.png)
  - Baltsar Chair — $299 (image: chair-2.png)
  - Anjay Chair — $519 (image: chair-3.png)
  - Nyantuy Chair — $921 (image: chair-4.png)

**Navigation arrows:**
- Left arrow (node 1:245): 50 × 50px, bg white, cornerRadius 26px, shadow `0 7px 19.5px rgba(0,0,0,0.06)`, arrow stroke `#1E1E1E` 2.17px
- Right arrow (node 1:242): same style, relX=1294
- Position: relY=1996 (below cards)

**View All (node 1:248):** relX=665, relY=2327
- "View All" — Gilroy-Medium 18px, color `#E58411`
- Arrow: 48 × 24px, stroke `#E58411`

### Experience Section (nodes 1:254–1:266)

**Layout:** Two-column grid (left: images, right: content)

**Left Column — Images:**
- Background cards (1:255, 1:256): 495 × 422px and 495 × 301px, fill `#F7F7F7`, cornerRadius 20px, stroke 1.523px
- Main image (1:257): 629 × 445px, cornerRadius 20px, image ref `4a4b57d91dde88ae6788c27acd5fc55158eb2f11`
  - Filters: contrast +0.063, highlights +0.109
- Blurred background (1:254): 555 × 423px, cornerRadius 49px, opacity 50%, layer blur 50px
- Position: relX=20, relY=2768 (main section)

**Right Column — Content:**
- Position: relX=743, relY=2733

**Label (node 1:266):** "experiences"
- Gilroy-SemiBold 18px, uppercase, letter-spacing 3.15px, color `#E58411`

**Heading (node 1:260):** "we provide you the best experience"
- Gilroy-Bold 42px, title case, line-height 49.22px, color `#1E1E1E`
- Size: 413 × 104px
- Gap from label: 42px

**Description (node 1:261):** "You don't have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials"
- Gilroy-Regular 18px, line-height 33.3px (185%), color `#1E1E1E`, opacity 0.8
- Size: 556 × 132px
- Gap from heading: 20px

**CTA Link (node 1:262):**
- "More Info" — Gilroy-Medium 14px, line-height 25.9px, color `#E58411`
- Arrow icon: 48 × 24px (inner: 37.5 × 10.8), stroke `#E58411` 1px, square cap
- Gap from description: 24px

### Materials Section (nodes 1:270–1:288)

**Layout:** Two-column grid (left: content, right: images) — reversed from Experience section

**Left Column — Content:**
- Position: relX=-881, relY=743 (negative X means positioned from left edge)

**Label (node 1:288):** "MATERIALS"
- Gilroy-SemiBold 18px, uppercase, letter-spacing 3.15px, color `#E58411`
- Size: 117 × 22px

**Heading (node 1:282):** "Very serious materials for making furniture"
- Gilroy-Bold 42px, title case, line-height 49.22px, color `#1E1E1E`
- Size: 413 × 156px
- Gap from label: ~22px

**Description (node 1:283):** "Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price"
- Gilroy-Regular 18px, line-height 33.3px (185%), color `#1E1E1E`, opacity 0.8
- Size: 556 × 99px
- Gap from heading: ~20px

**CTA Link (node 1:284):**
- "More Info" — Gilroy-Medium 14px, line-height 25.9px, color `#E58411`
- Arrow icon (node 1:286): 48 × 24px frame, inner vector 37.5 × 10.8, stroke `#E58411` 1px, square cap
- Gap from description: ~24px

**Right Column — Images:**
- Background card (node 1:271): 495 × 422px, fill `#F8F8F8` (rgb 0.9686), cornerRadius 20px
- Main image (node 1:272): 629 × 445px, cornerRadius 20px, image ref `61554c82d6a52e0a511f5d3e3a3ff6bbfcfafb76`
- Blurred background (node 1:270): 555 × 423px, cornerRadius 49px, opacity 50%, layer blur 50px
- Decorative group left (node 1:274): 223 × 250px, contains two overlapping images with blur effects
  - Rectangle 1448: 176 × 183px, cornerRadius 29px, opacity 50%, layer blur 50px
  - Rectangle 1450: 223 × 229px, cornerRadius 14.25px
  - Image ref: `443cef5f2c32d6f28e6923d590e9c7a89b1297f7`
- Decorative group right (node 1:277): 223 × 338px, contains two overlapping images with blur effects
  - Rectangle 1448: 177 × 301px, cornerRadius 29px, opacity 50%, layer blur 50px
  - Rectangle 1450: 223 × 317px, cornerRadius 14.25px
  - Image ref: `3c8ea705dfc44b8035ebd10cd5adaafc9278179e`

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
