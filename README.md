# Study at Untan

Study at Untan adalah halaman responsif pada website Informatika Universitas
Tanjungpura untuk menyediakan informasi sekilas mengenai Universitas
Tanjungpura, fasilitas, kegiatan mahasiswa, tempat-tempat rekomendasi di Kota
Pontianak, dan estimasi biaya hidup sebagai mahasiswa di Kota Pontianak.

## ⚙️ Tech Stack

- **React (Vite)** untuk membangun antarmuka berbasis component
- **Tailwind CSS** untuk styling antarmuka yang cepat, konsisten dan mudah dikustomisasi
- **GSAP (GreenSock Animation Platform)** untuk scroll animation pada website
- **pnpm** sebagai package manager yang storage efficient dan performa instalasi lebih cepat dari npm/yarn

## 📌 Prasyarat

Project ini menggunakan **pnpm** sebagai package manager.

Jika belum install pnpm :

```sh
npm install -g pnpm
```

## 🪛 Langkah Instalasi

### 1. Clone Repository

```sh
git clone https://github.com/Areeep/study-at-untan.git
```

### 2. Masuk ke Folder Project

```sh
cd study-at-untan
```

### 3. Install Depedensi Frontend

```sh
pnpm install
```

## ▶️ Menjalankan Project

### 1. Jalankan development server:

```sh
pnpm dev
```

### 2. Buka di browser:

```sh
http://localhost:5173/
```

## 🌿 Branching

- `main` → branch utama (protected)
- `develop` → branch untuk development, semua fitur digabung kesini sebelum ke
  `main` branch
- `feature/*` → branch untuk pengembangan fitur baru
- `fix/*` → branch untuk memperbaiki bug
- `docs/*` → branch untuk perubahan dokumentasi saja
- `refactor/*` → branch untuk perapihan atau perubahan struktur kode tanpa
  mengubah fitur
- `chore/*` → branch untuk tugas kecil (depedency, config, dll)

## 🔄 Development Workflow

### 1. Buat branch dari `develop`:

```sh
git checkout develop
git pull origin develop
git checkout -b feature/nama-fitur
```

### 2. Lakukan perubahan dan commit:

```sh
git add .
git commit -m "feat: add login feature"
git checkout -b feature/nama-fitur
```

### 3. Push ke remote (Github):

```sh
git push origin feature/nama-fitur
```

### 4. Buat Pull Request ke branch `develop`

### 5. Setelah direview, lakukan merge
