## Invofest Admin Dashboard

Project ini merupakan website admin berbasis fullstack yang digunakan untuk mengelola data category, speaker, dan event pada kegiatan Invofest.

---

## Tujuan Project

Tujuan dari project ini adalah untuk mempermudah admin dalam melakukan pengelolaan data event secara digital melalui sistem berbasis website.

Admin dapat melakukan:
- tambah data,
- melihat data,
- mengubah data,
- dan menghapus data.

---

## Teknologi yang Digunakan

Pada project ini saya menggunakan beberapa teknologi, yaitu:

### Frontend
- React Vite
- TypeScript
- Tailwind CSS
- Axios

### Backend
- Express JS
- Prisma ORM

### Database
- Supabase PostgreSQL

### Deployment
- Frontend menggunakan Vercel
- Backend menggunakan Railway

---


## Penjelasan CRUD Category

### Read Data
Pada halaman category list, sistem menampilkan seluruh data category yang berasal dari database.

### Create Data
Admin dapat menambahkan category baru melalui tombol create category.

Data yang diinput akan dikirim ke backend menggunakan method POST.

### Update Data
Admin juga dapat mengedit data category.

Saat tombol edit ditekan, admin diarahkan ke halaman edit dan data akan diperbarui menggunakan method PUT.

### Delete Data
Selain itu admin dapat menghapus data category menggunakan tombol delete yang menggunakan method DELETE.

---

## CRUD Speaker dan Event

Fitur CRUD yang sama juga diterapkan pada data speaker dan event.

Semua data telah terhubung dengan backend API dan database Supabase.

---

## Arsitektur Sistem

Alur sistem pada project ini adalah:

Frontend React mengirim request ke backend Express API.

Kemudian backend memproses data menggunakan Prisma ORM dan menyimpannya ke database Supabase PostgreSQL.

---

## Deployment

Project ini sudah berhasil dideploy secara online.

- Frontend dideploy menggunakan Vercel
- Backend dideploy menggunakan Railway

Sehingga aplikasi dapat diakses secara online.

---

## Link Youtoube:
https://youtu.be/mx4N8pXeiKk?si=Fp7ttqiX_V4vrK-z
