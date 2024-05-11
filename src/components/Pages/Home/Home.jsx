import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import About from './About'
import Slider from './Slider'
import dbArray from '../../../data'
import Card from '../../Card/Card'


export default function Home() {
    const [currentblog,setCurrentBlog] =useState([])

    useEffect(() => {
        const sortedData = dbArray.blogData.sort((a, b) => new Date(b.date) - new Date(a.date));
        const slicedData = sortedData.slice(0, 3);
        setCurrentBlog(slicedData);
    }, [dbArray.blogData]);
    
    console.log("sett",currentblog)
  return (
    <Container className="py-3">
      <Slider/>
      <About/>
      <div className="w-100 ">
      <h2 className='fw-bold'>Son Blog Yazılarımız</h2>
      <div className="row">
        {currentblog.map((item,index)=>(
        <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-xs-12"><Card title={item.title} desc={item.desc} date={item.date} img={item.img} slug={index} id={item.id}/>
        </div>
        ))}
      </div>
      </div>
    </Container>
  )
}
