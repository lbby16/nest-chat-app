# Proyek NestJS dengan RabbitMQ

Aplikasi menggunakan **NestJS** untuk mengelola profile pengguna, pengiriman pesan menggunakan **RabbitMQ**, dan penyimpanan data menggunakan **MongoDB**.

## Fitur Utama

- **Pengelolaan Profil Pengguna**: Menyediakan endpoint untuk membuat, memperbarui, dan mengambil profil pengguna.
- **Autentikasi Pengguna**: Pendaftaran dan login pengguna menggunakan JWT.
- **Pengiriman Pesan**: Pengguna dapat mengirim dan menerima pesan menggunakan RabbitMQ.
- **MongoDB**: Menyimpan data profil pengguna dan pesan.

## Prasyarat

Pastikan Anda memiliki alat berikut sebelum menjalankan proyek:

- [Node.js](https://nodejs.org/) versi 16 atau lebih tinggi
- [MongoDB](https://www.mongodb.com/) untuk database
- [RabbitMQ](https://www.rabbitmq.com/) untuk pengiriman pesan
- [Yarn](https://yarnpkg.com/) atau [npm](https://www.npmjs.com/) untuk manajemen paket

## Instalasi

1. **Clone repository**:
   ```bash
   git clone https://github.com/lbby16/nest-chat-app.git