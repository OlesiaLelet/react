
import './App.css';
import Post from './components/component-1/Post';
import img from "./icons/verified.png";


const ANAKIN_IMAGE="https://i.pinimg.com/564x/8f/3d/a0/8f3da08bfc4ed75e1dbb45cfcaf97578.jpg"
const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";



function App() {
  return (
    <div className="content">
      <Post name="Anakin Skywalker" avatar={ANAKIN_IMAGE} nickname="@dart_vader" icon_verify={img} date="26 лют." text="WTF? Who is Ray? Why is she Skywalker? Luke...?" photo={RAY_IMAGE} />

    </div>
    
  )
}
export default App;