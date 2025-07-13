# 🛠️ Backend Catalog Service

Ini adalah proyek **GraphQL Backend** untuk aplikasi katalog produk, dibangun menggunakan **NestJS**, **TypeORM**, dan **PostgreSQL** (opsional). Backend ini menyediakan API GraphQL untuk melakukan operasi CRUD produk, serta mendukung query filter berdasarkan nama dan kategori.

---

## 🚀 Teknologi yang Digunakan

- [NestJS](https://nestjs.com/) – Framework backend TypeScript yang modular dan scalable
- [GraphQL](https://graphql.org/) – API query language
- [@nestjs/graphql](https://docs.nestjs.com/graphql/quick-start) – GraphQL integration
- [TypeORM](https://typeorm.io/) – ORM untuk TypeScript
- \[SQLite / PostgreSQL] – Database engine (default SQLite untuk testing/dev)

---

## 📦 Fitur Utama

- ✅ CRUD produk via GraphQL
- 🔍 Query produk berdasarkan `id`, `name`, dan `category`
- 🧩 Modular: resolver, service, dan entity terpisah
- 🕓 Timestamp otomatis (`createdAt`, `updatedAt`)
- 📡 Siap dihubungkan ke frontend Apollo Client

---

## ⚙️ Instalasi & Jalankan Server

1. **Clone repositori ini:**

```bash
git clone https://github.com/username/catalog-service.git
cd catalog-service
```

2. **Install dependencies:**

```bash
npm install
# atau
yarn install
```

3. **Jalankan server:**

```bash
npm run start:dev
```

Server akan berjalan di: [http://localhost:8000/graphql](http://localhost:8000/graphql)

---

## 🔐 Konfigurasi CORS

Pastikan CORS sudah diaktifkan di `main.ts`:

```ts
app.enableCors({
  origin: 'http://localhost:3000', // frontend
});
```

---

## 🔧 Struktur Folder

```bash
src/
├── product/               # Modul utama produk
│   ├── product.entity.ts  # Entity TypeORM
│   ├── product.service.ts # Service: logic bisnis
│   └── product.resolver.ts# Resolver GraphQL
├── app.module.ts          # Root module
└── main.ts                # Entry point aplikasi
```

---

## ✏️ Contoh Query GraphQL

**List semua produk:**

```graphql
query {
  listAllProducts {
    id
    name
    price
    stock
  }
}
```

**Tambah produk:**

```graphql
mutation {
  createProduct(input: { name: "Baju Anak", price: 50000, stock: 100 }) {
    id
    name
  }
}
```

---

## 👨‍💻 Pengembang

- **Nama:** Muhammad Naufal
- **Repo Frontend:** \[Link frontend kamu jika ada]

---
