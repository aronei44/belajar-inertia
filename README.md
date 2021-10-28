# Belajar.Id

## Keterangan

Aplikasi website untuk startup (katanya) di bidang pendidikan terutama Teknik Informatika, Web Programming, Dan sejenisnya.

## Framework

- Backend : Laravel 8
- Frontend : ReactJS
- Penghubung : InertiaJS

## Instalasi

- Clone Project
~~~
git clone https://github.com/aronei44/belajar-inertia.git
cd belajar-inertia
~~~

- Persiapan Laravel
~~~
composer install or composer update
cp .env.example .env
php artisan key:generate
~~~

- Persiapan ReactJS
~~~
npm install && npm run dev
~~~

- Persiapan Database

silahkan siapkan sendiri host dan databasenya sesuai dengan .env

- Start
Buka 2 terminal pada project ini

Laravel:
~~~
php artisan serve
~~~

ReactJS:
~~~
npm run watch
~~~
