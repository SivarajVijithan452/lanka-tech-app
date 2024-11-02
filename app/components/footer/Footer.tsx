import Link from "next/link";
import Container from "../Container";
import Footerlist from "./Footerlist";
import Image from "next/image";
import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai"; 
import { FaLinkedin } from "react-icons/fa"; 

const Footer = () => {
    return (
        <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
            <Container>
                <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
                    <Footerlist>
                        <Image
                            src="/logo_tech.png"
                            alt="Lanka Tech Logo"
                            width={500}
                            height={50}
                        />
                        <p>Lanka Tech (PVT) Ltd is an innovative ICT product distributor and service provider which established in 2001.</p>
                    </Footerlist>
                    <Footerlist>
                        <h3 className="text-xl font-bold mb-2">Shop Categories</h3>
                        <Link href="#">Phones</Link>
                        <Link href="#">Laptops</Link>
                        <Link href="#">Desktops</Link>
                        <Link href="#">Accessories</Link>
                    </Footerlist>
                    <Footerlist>
                        <h3 className="text-xl font-bold mb-2">Company Info</h3>
                        <Link href="#">About us</Link>
                        <Link href="#">Legal Notice</Link>
                        <Link href="#">Delivery terms and conditions</Link>
                        <Link href="#">FAQs</Link>
                    </Footerlist>
                    <Footerlist>
                        <h3 className="text-xl font-bold mb-2">Quick Links</h3>
                        <Link href="#">Contact Us</Link>
                        <Link href="#">Special Offers</Link>
                        <div className="flex gap-2">
                            <Link href="#">
                                <MdFacebook size={30} />
                            </Link>
                            <Link href="#">
                                <AiFillTwitterCircle size={30} />
                            </Link>
                            <Link href="#">
                                <AiFillInstagram size={30} />
                            </Link>
                            <Link href="#">
                                <FaLinkedin size={30} />
                            </Link>
                        </div>
                    </Footerlist>
                </div>
                <p className="text-center font-bold">Copyright © {new Date().getFullYear()} LankaTech All Rights Reserved</p>
            </Container>
        </footer>
    );
}

export default Footer;
