import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import dbArray from '../../../data'
import { Container } from 'react-bootstrap';


export default function BlogDetail() {
    const [detailData, setDetailData] = useState([])
    const { id } = useParams();

    useEffect(() => {
        const filteredData = dbArray.blogData.find(item => item.id.toString() === id);
        setDetailData(filteredData);
    }, [id]);

    console.log("detail", detailData);
  return (
    <Container>
        <div className="row py-4">
            <div className="col-12 d-flex flex-column">
                <h2 className='text-center text-dark'>{detailData.title}</h2>
                <img className='rounded-2' src={detailData.img} alt="" height={400}/>
                <div className='my-2 d-flex align-items-center gap-2 '>
                    <h5 className='m-0 text-muted'>{detailData.author}</h5>
                    <span>-</span>
                    <h5 className='m-0 text-muted'>{detailData.date}</h5>
                </div>
                <p className='lh-base'>{detailData.desc}</p>
            </div>
        </div>
    </Container>
 
    )
}
