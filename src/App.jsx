import logo from './assets/Logo.png'
import './app.css'
function App(){
    return(
        <div className="container">
            <header> 
                <img src={logo} alt="" />
                <div className="title">
                    react course - project 3
                </div>
            </header>
            <form action="">
                <input type="text" placeholder='top text'/>
                <input type="text" placeholder='bottom text' name="" id="" />
                <div className="btn">Get a new meme image</div>
            </form>
        </div>
    )
}

export default App