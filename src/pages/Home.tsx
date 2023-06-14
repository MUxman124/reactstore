import Banner from "../Components/Banner"
import Product from "../Components/Product"
import Testimonials from "../Components/Testimonials"
import FeatureProducts from "../Components/FatureProducts"
import SaleCard from "../Components/SaleCard"
import CustomerExperience from "../Components/CoustmerExperience"
const Home = () => {
    return (
        <div>
            <Banner />
            <FeatureProducts />
            <CustomerExperience />
            <Product />
            <SaleCard />
            <Testimonials />
        </div>
    )
}
export default Home