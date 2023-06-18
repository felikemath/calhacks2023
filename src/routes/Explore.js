import Post from '../components/explore/Posts';
import Navigation from '../components/misc/Navigation';

const Explore = () => {
        return (
                <div className="bg-gradient-to-b from-yellow-200 from-10% via-yellow-100 via-30% to-white to-90%">
                        <Navigation page="Explore" />
                        <Post />
                </div>
        );
}

export default Explore;
