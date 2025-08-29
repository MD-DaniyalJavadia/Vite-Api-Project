import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'

function NewsMain() {
  const [topNews, setTopNews] = useState([])
  const [page, setPage] = useState(1)

  const fetchNews = async (currentPage) => {
    let pageSize = 9; // number of articles per page
    let url = `https://newsapi.org/v2/everything?q=tesla&from=2025-07-29&sortBy=publishedAt&pageSize=${pageSize}&page=${currentPage}&apiKey=222f6654f2f04c71b83bf134232a0803`
    
    let data = await fetch(url)
    let parsedData = await data.json()
    setTopNews(parsedData.articles)
  }

  useEffect(() => {
    fetchNews(page)
  }, [page])

  const handlePrevious = () => {
    if (page > 1) setPage(page - 1)
  }

  const handleNext = () => {
    setPage(page + 1)
  }

  return (
    <div className="container">
      <div className="row">
        {topNews.map((data, index) => (
          <div className="col-4" key={index}>
            <NewsItem
              title={data.title?.slice(0, 40) || "No Title"}
              desc={data.description?.slice(0, 30) || "No Description"}
              img={data.urlToImage || "No Image"}
              newsurl={data.url || "#"}
            />
          </div>
        ))}
      </div>

      <div className="container mt-4 d-flex justify-content-between">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handlePrevious}
          disabled={page <= 1}
        >
          Previous
        </button>

        <span className="align-self-center">Page {page}</span>

        <button
          type="button"
          className="btn btn-primary"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default NewsMain
