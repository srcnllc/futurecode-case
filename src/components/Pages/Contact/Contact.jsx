import React from 'react';
import { Container } from 'react-bootstrap';

export default function Contact() {
  return (
    <Container>
      <div className="row my-4 py-4 rounded-3 border d-flex align-items-center">
        <div className="col-md-5 col-sm-12 ">
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, ipsam?</p>
          <h3 className='border-bottom py-3'>0555 555 55 55</h3>
          <p className='border-bottom py-3'>Konum</p>
        </div>
        <div className="col-md-7 col-sm-12 ">
          <form>
            <div className="mb-3">
              <input type="text" className="form-control"  placeholder="İsim / Soyisim " />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control"  placeholder="E-posta" />
            </div>
            <div className="mb-3">
            <input type="text" className="form-control"  placeholder="Konu" />
            </div>
            <div className="mb-3">
              <textarea className="form-control"  rows="3" placeholder="Mesajınız"></textarea>
            </div>
            <div className="mb-3">
            <button type="submit" className="btn btn-dark">Gönder</button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}
