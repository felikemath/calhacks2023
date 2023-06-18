import Form from '../components/post/Form';
import Navigation from '../components/misc/Navigation';

const Home = () => {
        return (
                <div className="bg-gradient-to-b from-yellow-200 from-10% via-yellow-100 via-30% to-white to-90%">
                        <Navigation page="Post" />
                        <Form />
                </div>
        );
}

export default Home;
