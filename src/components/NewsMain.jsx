import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'

function NewsMain() {

    

  const [topNews, setTopNews ] = useState([])
  useEffect(() => {
    async function datafetch() {
      


      let url = "https://newsapi.org/v2/everything?q=tesla&from=2025-07-29&sortBy=publishedAt&apiKey=222f6654f2f04c71b83bf134232a0803"
      let data = await fetch(url)
      let dataparsed = await data.json()
      setTopNews(dataparsed.articles)
      
    }
    datafetch();
  }, [])

  return (
    <div>
      <div className="container">
        <div className="row">
            {topNews.map((data) => {
                return <div className="col-4">
                <NewsItem title={data.title?.slice(0,40) || "No Title"} desc={data.description?.slice(0,30) || "No Description"} img={data.urlToImage || "No Image"} newsurl={data.url || "Nothing"}    />
            </div> 
            })}
        </div>

        <div className='container mt-4 d-flex justify-content-between'>
<button type='button'  className='btn btn-primary'>previous</button>
        </div>
      </div>
    </div>
    
  )
}

export default NewsMain
