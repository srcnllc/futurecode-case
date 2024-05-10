import React, { useEffect, useState } from 'react'
import Card from '../../Card/Card'
import { Container } from 'react-bootstrap'
import dbarray from '../../../data'


export default function Blog() {
    const [data, setData] = useState([])
    useEffect(() => {
        setData(dbarray.blogData)
      }, [])
  return (
    <Container>
      <div className="row my-4">
        {data.map((item,index)=>(
            <div className="col-4 mb-3" key={index}>
            <Card title={item.title} desc={item.desc} date={item.date} img={item.img} slug={index} id={item.id}/>
            </div>
        ))}
      </div>
    </Container>
  );
}
