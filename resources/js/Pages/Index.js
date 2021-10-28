import React from 'react'
import Layout from './Layout'
import { Link } from '@inertiajs/inertia-react'

export default function Index({ user }) {
  return (
    <Layout>
      <div class="container" style={{marginTop:"150px"}}>
      	<div class="row align-items-center">
      		<div class="col-md-6">
      			<img src="/img/people.png" width="100%" />	
      		</div>
      		<div class="col-md-6">
      			<h1>Belajar bersama kami di Belajar.id</h1>
      			<br />
      			<Link class="btn btn-success me-2" href="/pelajaran">Lihat Pelajaran</Link>
      			<Link class="btn btn-outline-primary" href="/register">Daftar Sekarang</Link>
      		</div>
      	</div>
      </div>
      <div class="bg-light mt-5 mb-5">
      	<div class="container">
      		<div class="row">
      			<div class="col-md-6 offset-md-3">
      				<div class="rounded-pill card mt-3 mb-3 row" style={{paddingTop:"10px",paddingBottom:"10px"}}>
      					<div class="col-10 offset-1 row justify-content-evenly">
      						<div class="col-4">
      							<img src="/img/24-7.png" height="50px" />
      						</div>
      						<div class="col-4">
      							<img src="/img/responsive.png" height="50px" />
      						</div>
      					</div>
      				</div>
      			</div>
      		</div>
      	</div>
      </div>
      <div class="container">
      	<div class="row align-items-center">
      		<div class="col-md-5">
      			<img src="/img/peoples.jpg" width="100%" />	
      		</div>
      		<div class="col-md-7">
      			<h1>Belajar Makin Mudah Dengan Bimbingan Ahlinya.</h1>
      		</div>
      	</div>
      	<br/>
      	<br/>
      	<div class="row align-items-center">
      		<div class="col-md-5">
      			<img src="/img/presentasi.jpg" width="100%" />	
      		</div>
      		<div class="col-md-7">
      			<h1>Makin Asik Belajar Lewat Video Pembelajaran.</h1>
      		</div>
      	</div>
      </div>
      <div class="bg-light mt-5">
      	<div class="container text-center" style={{paddingTop:"20px",paddingBottom:"20px"}}>
    			<Link class="btn btn-success me-2" href="/pelajaran">Lihat Pelajaran</Link>
    			<Link class="btn btn-outline-primary" href="/daftar">Daftar Sekarang</Link>
      	</div>
      </div>
    </Layout>
  )
}