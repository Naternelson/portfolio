import './App.css';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { useEffect, useState} from "react"

function App() {
  const [url, setUrl] = useState()
  const storage = getStorage()
  const imageRef = ref(storage, 'github-profile.jpg')
  useEffect(()=>{
    getDownloadURL(imageRef).then(url => setUrl(url))
  },[])
  return (
    <img src={url}></img>
  );
}

export default App;
