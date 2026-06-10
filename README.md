# MiaoStories · 喵故事

Personal cat journal and boarding site for Lynn, a CS student in Seattle.  
Built with React + Vite + Tailwind CSS, deployed on Vercel.

---

## Stack

| | |
|---|---|
| Framework | React 18 + Vite |
| Styling | Tailwind CSS v3 (custom design tokens) |
| Routing | React Router v6 |
| Animation | Framer Motion |
| Icons | Lucide React |
| Forms | Formspree |
| Deploy | Vercel |

---

## Pages

| Route | Page |
|---|---|
| `/` | Home — hero, cat preview, Seattle section |
| `/cats` | All cats grid |
| `/cats/:id` | Individual cat detail |
| `/diary` | Cat diary entry list |
| `/diary/:id` | Individual diary entry |
| `/services` | Three care modes + pricing + FAQ |
| `/about` | About Lynn — photo mosaic + story |
| `/contact` | Contact form (Formspree) + WeChat/email |

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── CatCard.jsx
│   ├── CatSvg.jsx
│   └── SpaceNeedle.jsx
├── pages/
│   ├── Home.jsx
│   ├── Cats.jsx
│   ├── CatDetail.jsx
│   ├── Diary.jsx
│   ├── DiaryEntry.jsx
│   ├── Services.jsx
│   ├── About.jsx
│   └── Contact.jsx
├── data/
│   ├── cats.js       ← cat profiles
│   └── diary.js      ← diary entries
└── App.jsx

public/
├── cats/             ← cat photos
└── about/            ← personal photos
```

---

## Adding a New Cat

Edit `src/data/cats.js` and add an entry at the end of the `cats` array:

```js
{
  id: 10,                          // next sequential id
  name: '猫咪名',   nameEn: 'Name',
  age: '2 yrs',     ageZh: '2岁',  // use null if unknown
  gender: 'Female', genderZh: '女生',
  breed: 'Tabby',   breedZh: '狸花猫',
  personality:   ['关键词1', '关键词2'],
  personalityEn: ['keyword1', 'keyword2'],
  description:   '中文描述',
  descriptionEn: 'English description',
  story:         '一个故事片段',
  storyEn:       'A memory.',
  photo: '/cats/filename.jpg',     // place file in public/cats/
  accent: '#A0B8C0',               // hex color for this cat
  tags: ['tag1', 'tag2'],
},
```

---

## Adding a Diary Entry

Edit `src/data/diary.js` and add an entry at the end of the `diary` array:

```js
{
  id: 6,                           // next sequential id
  date: '2026-06-10',              // YYYY-MM-DD
  title: '标题',
  titleEn: 'Title',
  cats: ['猫咪名'],                 // must match name field in cats.js
  excerpt: '摘要，显示在列表页',
  excerptEn: 'Shown on the list page.',
  content: [                       // array of paragraphs
    '第一段',
    '第二段',
  ],
  contentEn: [
    'First paragraph.',
    'Second paragraph.',
  ],
  tags: ['猫咪名', '日常', '搞笑'],
},
```

---

## Local Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview production build locally
```

---

## Design Tokens

Defined in `tailwind.config.js`:

| Token | Value | Usage |
|---|---|---|
| `ink` | `#0F0E14` | Primary text |
| `ink-muted` | `#4A4655` | Secondary text |
| `ink-faint` | `#8B8695` | Captions, labels |
| `surface` | `#FAFAFA` | Page background |
| `surface-2` | `#F3F2F5` | Card backgrounds |
| `surface-3` | `#E8E6EC` | Borders, dividers |
| `rose` | `#9B6B7A` | Accent color |

Fonts: **Playfair Display** (serif headings) + **Inter** (sans body), loaded via Google Fonts in `index.html`.
