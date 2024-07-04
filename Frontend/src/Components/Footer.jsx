import { Footer } from "flowbite-react";
import { Link } from 'react-router-dom';
import logo from "./FeatherPen.png"

function FooterBar() {
    return (
        <Footer container>
            <div className="w-full text-center">
                <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                    <Link
                        to='/'
                        className='self-center flex  whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
                    >
                        <img className=' size-7' src={logo} />
                        <span className='py-1  rounded-lg text-red font-sans '>
                            CampusConnect
                        </span>
                    </Link>
                    <Footer.LinkGroup>
                        <Footer.Link href="#">About</Footer.Link>
                        <Footer.Link href="#">Privacy Policy</Footer.Link>
                        <Footer.Link href="#">Licensing</Footer.Link>
                        <Footer.Link href="#">Contact</Footer.Link>
                    </Footer.LinkGroup>
                </div>
                <Footer.Divider />
                <Footer.Copyright href="#" by="Flowbite™" year={2022} />
            </div>
        </Footer>
    );
}
export default FooterBar