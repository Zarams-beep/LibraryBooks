import Link from "next/link";
import { MdCategory,MdLogout} from "react-icons/md";
import { GiBookmarklet } from "react-icons/gi";
import {FaRegHeart} from "react-icons/fa";
import { IoSettingsOutline,IoGameController } from "react-icons/io5";
import { PiCatFill } from "react-icons/pi";
import {IoIosStar } from "react-icons/io";
import { GoBellFill } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";
import PropTypes from 'prop-types';

const SideBar = ({notificationNumber=0, number = 0})=>{

    return(
        <>
            <aside className="asidePart">
                <section className="headerPart">
                    <Link href='/' className="linkClick">
                    <p className="vault">BOOKVAULT</p>
                    <p className="hub">HUB</p>
                    </Link>
                </section>
                <section className="list">
                    <ul>
                        <li><Link href ="/aside-category" className="linkClick"><MdCategory className="iconsSide"/>
                        Category
                        </Link></li>

                        <li>
                            <Link href="/" className="linkClick">
                            <GiBookmarklet className="iconsSide"/>My Library</Link></li>

                        <li>
                        <Link href="/" className="linkClick">
                            <FaRegHeart className="iconsSide"/>Donated Books</Link></li>
                        <li><Link href="/games" className="linkClick"> 
                            <IoGameController className="iconsSide"/>Games</Link></li>

                        <li className="relativeLi">
                        <Link href ="/check-out" className="linkClick"><FaShoppingCart className="iconsSide"/><p>{number}</p>View Cart </Link></li>

                        <li className="relativeLi2">
                        <Link href="/" className="linkClick">
                            <GoBellFill className="iconsSide"/><p>{notificationNumber}</p> Notification</Link></li>
                        <li>
                        <Link href="/" className="linkClick">
                            <IoIosStar className="iconsSide"/>Rated</Link></li>
                    </ul>

                    <ul>
                        <li>
                        <Link href="/" className="linkClick">
                            <IoSettingsOutline className="iconsSide"/>Settings</Link></li>
                        <li>
                        <Link href="/" className="linkClick">
                            <PiCatFill className="iconsSide"/>Buy me a Cat</Link></li>
                        <li><Link href="/" className="linkClick"><MdLogout className="iconsSide"/>Logout</Link></li>
                    </ul>
                </section>
            </aside>
        </>
    )
}
SideBar.propTypes={
    notificationNumber: PropTypes.number,
    number: PropTypes.number,
}
export default SideBar