# WIKA Beton Intern 2026 🚀

Website modern untuk memperkenalkan 6 peserta intern WIKA Beton 2026 dengan detail profil masing-masing.

## ✨ Features

- 🎨 **Modern UI/UX** dengan animasi keren dan gradient yang menarik
- 🌓 **Dark/Light Mode** dengan warna biru signature (#0D8BFE)
- 📱 **Fully Responsive** - tampil sempurna di semua device
- 🎯 **Landing Page** dengan welcome message yang interaktif
- 👥 **6 Intern Cards** dengan foto, divisi, dan bio
- 🔗 **Individual Pages** untuk setiap intern dengan detail lengkap
- 📸 **Photo Gallery** dengan slideshow otomatis
- ⚡ **Fast Performance** dengan Vite + React
- 🎭 **Smooth Animations** dengan CSS transitions & keyframes
- 💫 **Glassmorphism Effects** untuk UI yang premium

## 👨‍💼 Peserta Intern

1. **Dimas** - Finance
2. **Audrey** - Finance
3. **Ita** - Finance
4. **Hatif** - Finance
5. **Maman** - UI/UX Design
6. **Genta** - IT Support

## 🛠️ Tech Stack

- **React 18** - UI Framework
- **React Router DOM** - Client-side routing
- **Vite** - Build tool & dev server
- **CSS3** - Styling dengan custom animations & CSS variables
- **Context API** - Theme management
- **Google Fonts** - Inter & Space Grotesk

## 🚀 Cara Menjalankan

### Development Mode

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Buka browser di `http://localhost:5173`

### Build untuk Production

```bash
npm run build
```

### Preview Build

```bash
npm run preview
```

## 📁 Struktur Project

```
wika-beton-intern/
├── src/
│   ├── components/      # Reusable components (future)
│   ├── data/
│   │   └── interns.js   # Data peserta intern
│   ├── pages/
│   │   ├── Home.jsx     # Landing page
│   │   ├── Home.css
│   │   ├── InternDetail.jsx  # Detail page
│   │   └── InternDetail.css
│   ├── App.jsx          # Main app component
│   ├── App.css
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html           # HTML template
├── package.json
└── vite.config.js       # Vite configuration
```

## 🎨 Customization

### Mengubah Data Intern

Edit file `src/data/interns.js` untuk mengubah nama, divisi, foto, skills, achievements, dll.

### Mengubah Warna Theme

Setiap intern punya warna dan gradient sendiri yang bisa diubah di property `color` dan `gradient` di data intern.

### Menambah/Mengurangi Peserta

Tambah atau hapus object intern di array `internsData` di file `src/data/interns.js`.

## 📦 Deploy

Website ini sudah siap untuk di-deploy ke:
- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- **Firebase Hosting**

## 📄 License

Free to use untuk keperluan pembelajaran dan portfolio.

## 👏 Credits

Made with ❤️ by WIKA Beton Intern 2026

---

**Note:** Website ini dibuat untuk teman-teman intern. Data dan foto menggunakan placeholder dari Unsplash.
