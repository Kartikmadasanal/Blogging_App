import { Footer } from "flowbite-react";
import { Link } from 'react-router-dom';
import logo from "./FeatherPen.png"

function FooterBar() {
    const d = new Date();
let year = d.getFullYear();
    return (
        <Footer container>
            <div className="w-full text-center mt-1 ">
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
                        <Footer.Link href="/aboutus">About</Footer.Link>
                        <Footer.Link href="/">Home</Footer.Link>
                        <Footer.Link href="/contact">Contact</Footer.Link>
                    </Footer.LinkGroup>
                </div>
                <Footer.Divider />
                <Footer.Copyright href="#" by="Campusconnect" year={year} />
            </div>
        </Footer>
    );
}
export default FooterBar
