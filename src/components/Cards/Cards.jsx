import React,{useState,useEffect} from 'react'
import axios from '../../axios'
import { imageUrl } from '../../constants/constants'

function Cards(props) {
    const [movie,setmovie]=useState([])
    useEffect(()=>{
        axios.get(props.url).then((response)=>{
            console.log(response.data.results,"RES!!")
            setmovie(response.data.results)
        })
    })
  return (
    <> <h1 className=' my-5 mx-4 '>Trending </h1>
    <div className='container d-flex'>
    {movie.map((obj)=>(
    <div key={obj.id} className="card  mx-4"   style={{width: "18rem"}}>
    <img src={`${imageUrl+obj.poster_path}`} className="card-img-top" alt="unable to load"/>
    <div className="card-body">
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
  ))}
  </div>
  </>
  )
}

export default Cards