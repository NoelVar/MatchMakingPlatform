import { Link } from 'react-router-dom'
import Logout from '../components/Logout'

const Home = () => {


    return (
        <div className="main-box home-container">
            <h1>Home</h1>
            <Logout />
        </div>             
    );
}

export default Home