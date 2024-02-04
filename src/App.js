import ImageGallery from './Components/ImageGallery';
import ImageSearch from './Components/ImageSearch';
import {useEffect, useState} from  'react'


function App() {
  const [image,setImage] = useState([]);
  const [loading,setLoading] = useState(true);
  const [term,setTerm] = useState('');
  
  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImage(data.hits);
        setLoading(false);
      })
      .catch(err => console.log(err));
  },[term]);

  return (
    <div className='container mx-auto'>
      <ImageSearch searchText = { (text) => setTerm(text)}/>

      {!loading && image.length === 0 && <h1 className='text-6xl mx-auto mt-32'> Image Not Found ...</h1> }

      {loading ? <h1 className='text-6xl mx-auto mt-32'> Loading ...</h1>
       : <div className='grid grid-cols-3 gap-4'>
        {image.map(image=>(
          <ImageGallery key={image.id} image={image}/>
        ))}

      </div>}

    </div>
    
  );
}

export default App;
