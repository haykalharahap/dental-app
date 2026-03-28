# 🦷 Dentoms Dental Care

Aplikasi booking janji temu klinik gigi **Dentoms Dental Care** — dibangun dengan React.js dan Vite. Aplikasi ini memungkinkan pasien untuk melihat profil dokter, memilih jadwal, dan melakukan booking perawatan gigi secara online.

> **drg. Ahmad Tommy Tantowi** — General Dentistry

---

## ✨ Fitur

- 🏠 **Halaman Utama** — Informasi klinik, profil dokter, dan tips kesehatan gigi
- 👨‍⚕️ **Profil Dokter** — Bio lengkap, pengalaman, pendidikan, bahasa, dan review pasien
- 📅 **Booking Online** — Pilih tanggal & waktu, konfirmasi janji temu dengan modal interaktif
- 📋 **Riwayat Kunjungan** — Filter berdasarkan status (Upcoming, Completed, Cancelled)
- 💡 **Tips Kesehatan Gigi** — Artikel tips dengan filter kategori (Hygiene, Nutrition, Prevention, Lifestyle)
- 🔔 **Reminder** — Pengingat jadwal kunjungan yang akan datang dengan countdown
- 🌙 **Dark / Light Mode** — Toggle tema dengan penyimpanan preferensi
- 📱 **Responsive** — Optimal untuk Android, iOS, tablet, dan desktop

---

## 🛠️ Tech Stack

| Teknologi | Versi |
|-----------|-------|
| [React](https://react.dev/) | 19.x |
| [Vite](https://vite.dev/) | 8.x |
| [React Router](https://reactrouter.com/) | 7.x |
| CSS (Vanilla) | Custom design system |
| LocalStorage | Data persistence |

---

## 📁 Struktur Project

```
dental-app/
├── public/
│   ├── logo.svg              # Logo Dentoms
│   └── favicon.svg
├── src/
│   ├── components/           # Komponen reusable
│   │   ├── TopNav.jsx        # Navigasi atas + logo + theme toggle
│   │   ├── BottomNav.jsx     # Navigasi bawah (5 menu)
│   │   ├── DentistCard.jsx   # Kartu dokter
│   │   ├── AppointmentCard.jsx # Kartu riwayat kunjungan
│   │   ├── TipCard.jsx       # Kartu tips kesehatan
│   │   ├── Modal.jsx         # Modal konfirmasi booking
│   │   ├── Toast.jsx         # Notifikasi toast
│   │   ├── SearchBar.jsx     # Search bar
│   │   ├── FilterTabs.jsx    # Tab filter kategori
│   │   └── EmptyState.jsx    # Placeholder kosong
│   ├── pages/                # Halaman utama
│   │   ├── HomePage.jsx      # Beranda
│   │   ├── DentistsPage.jsx  # Daftar dokter
│   │   ├── ProfilePage.jsx   # Profil & booking dokter
│   │   ├── HistoryPage.jsx   # Riwayat kunjungan
│   │   ├── TipsPage.jsx      # Tips kesehatan gigi
│   │   └── RemindersPage.jsx # Pengingat jadwal
│   ├── context/              # State management
│   │   ├── ThemeContext.jsx   # Dark/light mode
│   │   └── AppContext.jsx     # Modal & toast state
│   ├── data/                 # Data & storage
│   │   ├── dentists.js       # Data dokter
│   │   ├── healthTips.js     # Data tips kesehatan
│   │   └── storage.js        # LocalStorage helpers
│   ├── App.jsx               # Root app + routing
│   ├── main.jsx              # Entry point
│   └── index.css             # Design system & styles
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Cara Menjalankan

### Prasyarat

- [Node.js](https://nodejs.org/) versi 18 atau lebih baru
- npm (sudah termasuk dalam Node.js)

### Instalasi

```bash
# Clone repository
git clone https://github.com/haykalharahap/dental-app.git
cd dental-app

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Buka **http://localhost:5173/** di browser.

### Build Production

```bash
npm run build
npm run preview
```

---

## 🎨 Design System

Aplikasi menggunakan custom design system dengan:

- **Fonts**: Inter (body) + Outfit (heading) dari Google Fonts
- **Color Palette**: Cyan-to-Purple gradient accent, glassmorphism cards
- **Dark Mode Default**: Tema gelap sebagai default dengan toggle ke light mode
- **Glassmorphism**: `backdrop-filter: blur()` pada kartu dan navigasi
- **Responsive Breakpoints**:
  - `≤ 359px` — iPhone SE / small phones
  - `360–480px` — Standard phones (Android/iOS)
  - `481–767px` — Phablets / small tablets
  - `≥ 768px` — Tablets & desktop
- **iOS Safe Areas**: Support notch & home indicator
- **Touch Targets**: Minimum 44px (Apple HIG / Material Design)
- **Accessibility**: `prefers-reduced-motion` support

---

## 📱 Screenshots

### Dark Mode
Tampilan utama dengan tema gelap, glassmorphism cards, dan gradient accent.

### Light Mode
Tampilan terang dengan background bersih dan kontras tinggi.

### Booking Flow
Pilih tanggal → pilih waktu → konfirmasi → toast success.

---

## 📄 Lisensi

Project ini dibuat untuk keperluan **Dentoms Dental Care**.

---

## 👤 Author

**Haykal Harahap**

- GitHub: [@haykalharahap](https://github.com/haykalharahap)
