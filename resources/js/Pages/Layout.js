import React, { useEffect } from 'react'
import { Link,Head } from '@inertiajs/inertia-react'


export default function Layout({ children }) {
  return (
    <main>
      <header>
        <Head title="Belajar.id" />
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" href="/">Belajar.id</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/pelajaran">Pelajaran</Link>
                </li>
                <li className="nav-item">
                  <Link className="rounded-pill btn btn-outline-success me-2" href="/login">Masuk</Link>
                </li>
                <li className="nav-item">
                  <Link className="rounded-pill btn btn-outline-primary" href="/register">Daftar</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <article>{children}</article>
      <div class="bg-dark text-white" style={{paddingTop:"30px",paddingBottom:"30px"}}>
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <h1>Belajar.id</h1>
              <p class="lead"><i>Dari Desa Untuk Negeri</i></p>
              <br />
              <p>Bogor, Jawa Barat, Indonesia</p>
            </div>
            <div class="col-md-4">
              <h3>All Link</h3>
              <ul>
                <li>
                  <Link class="nav-link text-white" href="/">Halaman Utama</Link>
                </li>
                <li>
                  <Link class="nav-link text-white" href="/pelajaran">Lihat Pelajaran</Link>
                </li>
              </ul>

            </div>
            <div class="col-md-4">
              <h3>Follow Us</h3>
              <ul>
                <li>
                  <a class="nav-link text-white" href="/">Github</a>
                </li>
                <li>
                  <a class="nav-link text-white" href="/">Gitlab</a>
                </li>
                <li>
                  <a class="nav-link text-white" href="/">Youtube</a>
                </li>
                <li>
                  <a class="nav-link text-white" href="/">Instagram</a>
                </li>
                <li>
                  <a class="nav-link text-white" href="/">Facebook</a>
                </li>
                <li>
                  <a class="nav-link text-white" href="/">Linkedin</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}