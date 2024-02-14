import React from 'react'
import "./sideBar.css"
function SideBar() {
    return (
        <aside className='sidebar' id='sidebar'>
            <ul className="sidebar-nav" id='sidebar-nav'>
                <li className='nav-item'>
                    <a href="/" className="nav-link">
                        <i className="bi bi-grid"></i>
                        <span className='px-2'>Dashboard</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a href="#"
                        className="nav-link collapsed"
                        data-bs-target='#components-nav'
                        data-bs-toggle='collapse'
                    >
                        <i className='bi bi-menu-button-wide'></i>
                        <span className='px-2'>Products</span>
                        <i class="bi bi-chevron-compact-down ms-auto"></i>
                    </a>
                    <ul id='components-nav'
                        className='nav-content collapse'
                        data-bs-parent='#sidebar-nav'
                    >
                        <li>
                            <a href="#" className='text-decoration-none'>
                                <span>Product list</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className='text-decoration-none'>
                                <span>Create Products</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className='text-decoration-none'>
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
                        <i class="bi bi-person-gear"></i>
                        <span className='px-2'>Categories</span>
                        <i class="bi bi-chevron-compact-down ms-auto"></i>
                    </a>
                    <ul
                        id='forms-nav'
                        className='nav-content collapse'
                        data-bs-parent='#sidebar-nav'
                    >
                        <li>
                            <a href="#" className='text-decoration-none'>
                                <span>Categories List</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className='text-decoration-none'>
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
                        <span className='px-2'>Brands</span>
                        <i class="bi bi-chevron-compact-down ms-auto"></i>
                    </a>
                    <ul
                        id='tables-nav'
                        className='nav-content collapse'
                        data-bs-parent="#sidebar-nav"
                    >
                        <li>
                            <a href="#" className='text-decoration-none'>
                                <span>Brand List</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className='text-decoration-none'>
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
                        <span className='px-2'>Order</span>
                        <i class="bi bi-chevron-compact-down ms-auto"></i>
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
                        data-bs-target='#order-nav'
                        data-bs-toggle='collapse'
                    >
                        <i class="bi bi-card-list"></i>
                        <span className='px-2'>Customers</span>
                    </a>
                </li>
            </ul>
        </aside>
    )
}

export default SideBar
