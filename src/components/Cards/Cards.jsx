import React,{useState,useEffect} from 'react'
import axios from '../../axios'

function Cards(props) {
    const [movie,setmovie]=useState({})
    useEffect(()=>{
        axios.get(props.url).then((response)=>{
            console.log(response.data.results,"RES!!")
            setmovie(response.data.results)
        })
    })
  return (
    <> <h1 className=' my-5 mx-4 '>Trending </h1>
    <div className='container d-flex'>
    <div className="card  mx-4"   style={{width: "18rem"}}>
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
  <div className="card "   style={{width: "18rem"}}>
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
  </div>
  </>
  )
}

export default Cards