import React from 'react'
import Card from '../../Card/Card'
import { Container } from 'react-bootstrap'

export default function Blog() {
    const data = [
        {
          title: 'Blog 1 ',
          img:"../../../../../images/blogimage.jpg",
          desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          slug: '/blog/',
          date:'10.05.2024',
        },
        {
          title: 'Blog 2 ',
          img:"../../../../../images/blogimage.jpg",
          desc:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
          slug: '/blog/',
          date:'10.05.2024',
        },
        {
          title: 'Blog 3 ',
          img:"../../../../../images/blogimage.jpg",
          desc:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          slug: '/blog/',
          date:'10.05.2024',
        },
        {
          title: 'Blog 4 ',
          img:"../../../../../images/blogimage.jpg",
          desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
          slug: '/blog/',
          date:'10.05.2024',
        },
        {
          title: 'Blog 5 ',
          img:"../../../../../images/blogimage.jpg",
          desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
          slug: '/blog/',
          date:'10.05.2024',
        },
  
      ];
  return (
    <Container>
      <div className="row my-4">
        {data.map((item,index)=>(
            <div className="col-4 mb-3" key={index}>
            <Card title={item.title} desc={item.desc} date={item.date} img={item.img} slug={item.slug}/>
            </div>
        ))}
      </div>
    </Container>
  );
}
