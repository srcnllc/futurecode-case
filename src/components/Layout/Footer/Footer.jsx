import React from 'react'
import { Container, NavLink } from 'react-bootstrap'
import { BsInstagram , BsFacebook ,BsTwitterX ,BsWhatsapp ,BsLinkedin  } from 'react-icons/bs';


export default function Footer() {
  return (
    <footer className="bg-dark d-flex flex-column align-item-center justufy-content-center text-white">
        <Container>
            <div className="row py-3 d-flex align-self-strech">
                <div className="col-md-5  col-sm-12  ">
                    <NavLink href='/'>FutureCodeCase</NavLink>
                    <p className='py-2'>FutureCode case çalışmasıdır.Tüm Hakları FutureCode aittir.</p>
                </div>
                <div className="col-md-3 col-sm-6 d-flex flex-column align-items-center">
                    <ul className='list-unstyled d-flex flex-column justify-content-between h-100'>
                    <li >
                        <NavLink href='/'>Ana Sayfa</NavLink>
                        </li>
                        <li >
                        <NavLink href='/blog'>Blog</NavLink>
                        </li>
                        <li>
                        <NavLink href='/iletisim'>İletişim</NavLink>
                        </li>
                    </ul>
                    
                </div>
                <div className="col-md-4 col-sm-6 d-flex align-items-center justify-content-center">
                <ul className="nav justify-content-center list-unstyled d-flex">
                  <li className="ms-3"><a className="" href="#"><BsInstagram color='white'/></a></li>
                  <li className="ms-3"><a className="" href="#"><BsFacebook color='white'/></a></li>
                  <li className="ms-3"><a className="" href="#"><BsTwitterX color='white'/></a></li>
                  <li className="ms-3"><a className="" href="#"><BsLinkedin   color='white'/></a></li>
                  <li className="ms-3"><a className="" href="#"><BsWhatsapp  color='white'/></a></li>
                </ul>
                </div>
            </div>
        </Container>
    </footer>
  )
}
