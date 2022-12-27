import React from 'react'
import {Link} from "react-router-dom";

export default function List() {

  let id = 1; 

  return (
    <div>
      
      list
      <Link to = {`/post/${id}`}>
        1번 아이디
      </Link>
    </div>
  )
}
