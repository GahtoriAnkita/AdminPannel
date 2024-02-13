import React from 'react'
import "./sideBar.css"
function SideBar() {
    return (
        <aside className='sidebar' id='sidebar'>
            <h6>Admin</h6>
            <ul className="sidebar-nav" id='sidebar-nav'>
                <li className='nav-item'>
                    <a href="/" className="nav-link">
                        <i className="bi bi-grid"></i>
                        <span>Dashboard</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a href="#"
                        className="nav-link collapsed"
                        data-bs-target='#components-nav'
                        data-bs-toggle='collapse'
                    >
                        <i className='bi bi-menu-button-wide'></i>
                        <span>Products</span>
                        <i className='bi bi-chevron-down ms-auto'></i>
                    </a>
                    <ul id='components-nav'
                        className='nav-content collapse'
                        data-bs-parent='#sidebar-nav'
                    >
                        <li>
                            <a href="#">
                                <span>Product list</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>Create Products</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>Product Reviews</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className='nav-item'>
                    <a href="#"
                        className='nav-link collapsed'
                        data-bs-target='#forms-nav'
                        data-bs-toggle='collapse'
                    >
                        <i class="bi bi-person-gear"></i>                        <span>Categories</span>
                        <i className='bi bi-chevron-down ms-auto'></i>
                    </a>
                    <ul
                        id='forms-nav'
                        className='nav-content collapse'
                        data-bs-parent='#sidebar-nav'
                    >
                        <li>
                            <a href="#">
                                <span>Categories List</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>Create Categories</span>
                            </a>
                        </li>
                    </ul>
                </li>

                <li className='nav-item'>
                    <a href="#"
                        className='nav-link collapsed'
                        data-bs-target='#tables-nav'
                        data-bs-toggle='collapse'
                    >
                        <i class="bi bi-headset-vr"></i>
                        <span>Brands</span>
                        <i className='bi bi-chevron-down ms-auto'></i>
                    </a>
                    <ul
                        id='tables-nav'
                        className='nav-content collapse'
                        data-bs-parent="#sidebar-nav"
                    >
                        <li>
                            <a href="#">
                                <span>Brand List</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>Create Brand</span>
                            </a>
                        </li>
                    </ul>
                </li>

                <li className='nav-item'>
                    <a href="#" className='nav-link collapsed'
                        data-bs-target='#order-nav'
                        data-bs-toggle='collapse'
                    >
                        <i class="bi bi-card-list"></i>
                        <span>Order</span>
                        <i className='bi bi-chevron-down ms-auto'></i>
                    </a>
                    <ul
                        id='order-nav'
                        className='nav-content collapse'
                        data-bs-parent='#sidebar-nav'
                    >
                        <li>
                            <a href="#">
                                <span>Order List</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>Order Details</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className='nav-item'>
                <a href="#" className='nav-link collapsed'
                    data-bs-target='#order-nav'
                    data-bs-toggle='collapse'
                >
                    <i class="bi bi-card-list"></i>
                    <span>Customers</span>
                </a>
                </li>    
            </ul>
        </aside>
    )
}

export default SideBar
