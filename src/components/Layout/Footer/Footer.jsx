import React from 'react'
import { Container, Nav, NavLink } from 'react-bootstrap'

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
                        <li className='list-group-item-action'>
                        <NavLink href='/'>Blog</NavLink>
                        </li>
                        <li>
                        <NavLink href='/iletisim'>İletişim</NavLink>
                        </li>
                    </ul>
                    
                </div>
                <div className="col-md-4 col-sm-6 border">3</div>
            </div>
        </Container>
    </footer>
  )
}
