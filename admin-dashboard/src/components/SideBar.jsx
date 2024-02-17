import React from 'react'
import "./sideBar.css"
import navList from "../data/navItem"
import NavItem from './NavItem'
import { Link } from 'react-router-dom'
function SideBar() {
    return (
        <aside className='sidebar' id='sidebar'>
            <ul className="sidebar-nav" id='sidebar-nav'>
                <li className='nav-item'>
                    <Link to="/" className="nav-link">
                        <i className="bi bi-grid"></i>
                        <span className='px-2'>Dashboard</span>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="menuPages" className="nav-link">
                   <i class="bi bi-file-earmark"></i>
                        <span className='px-2'>Menu/Pages</span>
                    </Link>
                </li>

                <li className='nav-item'>
                    <a href="#"
                        className='nav-link collapsed'
                    >
                        <i className="bi bi-person-gear"></i>
                        <span className='px-2'>Categories</span>
                    </a>
                </li>

                <li className='nav-item'>
                    <a href="#"
                        className='nav-link collapsed'
                        data-bs-target='#tables-nav'
                        data-bs-toggle='collapse'
                    >
                        <i className="bi bi-headset-vr"></i>
                        <span className='px-2'>Brands</span>
                        <i className="bi bi-chevron-compact-down ms-auto"></i>
                    </a>
                    <ul
                        id='tables-nav'
                        className='nav-content collapse'
                        data-bs-parent="#sidebar-nav"
                    >
                        <li>
                            <a href="#" className='text-decoration-none'>
                                <span>Frame Type</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className='text-decoration-none'>
                                <span>Frame Shape</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className='text-decoration-none'>
                                <span>Frame Size</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className='text-decoration-none'>
                                <span>Frame Material</span>
                            </a>
                        </li>
                    </ul>
                </li>

                <li className="nav-item">
                    <a href="#"
                        className="nav-link collapsed"
                        data-bs-target='#components-nav'
                        data-bs-toggle='collapse'
                    >
                       
                        <i class="bi bi-file-ppt"></i>
                        <span className='px-2'>Power Type</span>
                        <i className="bi bi-chevron-compact-down ms-auto"></i>
                    </a>
                    <ul id='components-nav'
                        className='nav-content collapse'
                        data-bs-parent='#sidebar-nav'
                    >
                        <li>
                            <a href="#" className='text-decoration-none'>
                                <span>Lens</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className='text-decoration-none'>
                                <span>Lens Feature</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className='text-decoration-none'>
                                <span>Lens Colors</span>
                            </a>
                        </li>
                    </ul>
                </li>

                <li className='nav-item'>
                <a href="#" className="nav-link">
                <i className='bi bi-menu-button-wide'></i>
                    <span className='px-2'>Product</span>
                </a>
            </li>

                <li className='nav-item'>
                    <a href="#" className='nav-link collapsed'
                        data-bs-target='#order-nav'
                        data-bs-toggle='collapse'
                    >
                        <i className="bi bi-card-list"></i>
                        <span className='px-2'>Order</span>
                        <i className="bi bi-chevron-compact-down ms-auto"></i>
                    </a>
                    <ul
                        id='order-nav'
                        className='nav-content collapse'
                        data-bs-parent='#sidebar-nav'
                    >
                        <li>
                            <a href="#" className='text-decoration-none'>
                                <span>Order List</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className='text-decoration-none'>
                                <span>Order Details</span>
                            </a>
                        </li>
                    </ul>
                </li>

                <li className='nav-item'>
                    <a href="#" className='nav-link collapsed'
                    >
                        <i className="bi bi-card-list"></i>
                        <span className='px-2'>Customers</span>
                    </a>
                </li>
                <hr />
                <li className='nav-heading pb-2'>Pages</li>
                {navList?.map(nav => (
                    <NavItem key={nav._id} nav={nav} />
                ))}
            </ul>
        </aside>
    )
}

export default SideBar
