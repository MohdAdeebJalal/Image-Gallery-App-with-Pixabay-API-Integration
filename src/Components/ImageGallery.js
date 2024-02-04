import React from 'react'

export default function ImageGallery(props) {
  const tags = props.image.tags.split(',');
  return (
    <div className="mt-1 max-w-sm rounded shadow-md overflow-hidden">
      <img src={props.image.webformatURL} alt="Profile picture" className="w-full"/>
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2 "> Photo by : {props.image.user}</div>
        <ul>
          <li>
            <strong> views : </strong>
             {props.image.views}
          </li>
          <li>
            <strong> downloads : </strong>
             {props.image.downloads}
          </li>
          <li>
            <strong> likes : </strong>
             {props.image.likes}
          </li>
        </ul>
      </div>
      <div className="px-4 py-3 ">
        {tags.map((tag,index) =>(
          <span key = {index} className="inline-block mr-4 font-semibold rounded bg-grey-200 text-grey-800 text-sm">
          #{tag}
          </span>

        ))  }
      </div>



      
    </div>
  )
}
