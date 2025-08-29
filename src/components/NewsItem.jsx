import React from 'react'

function NewsItem({title , desc , img, newsurl}) {
  return (
    
    <div className='mt-5'>
      <div className="card" style={{width: "18rem", height: "480px"}}>
  <img src={img}className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{desc}</p>
    <a href={newsurl} className="btn btn-primary">Read More</a>
  </div>
</div>
    </div>
  )
}

export default NewsItem
