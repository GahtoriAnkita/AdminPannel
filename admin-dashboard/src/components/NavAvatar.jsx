import React from 'react'
import profileImg from '../images/LensKandyLogo.png'
function NavAvatar() {
    return (
        <li className='nav-item dropdown pe-3'>
            <a href="#"
                className='nav-link nav-profile d-flex align-items-center pe-0'
                data-bs-toggle='dropdown'
            >
                <span className='d-none d-md-block dropdown-toggle ps-2'><img src={profileImg} alt="Profile" className='rounded-circle' /></span>
            </a>

            <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow profile'>
                <li className='dropdown-header'>
                    <h6>LensKendy</h6>
                    <span>Welcome to Admin dashboard</span>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>
                <li>
                    <a href="users-profile.html" className='dropdown-item d-flex align-items-center'>
                        <i className='bi bi-person'></i>
                        <span>My Profile</span>
                    </a>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>
                <li>
                    <a href="user-profile.html" className='dropdown-item d-flex align-items-center'>
                        <i className='bi bi-gear'></i>
                        <span>Account Setting</span>
                    </a>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>
                <li>
                    <a href="pages-faq.html" className='dropdown-item d-flex align-items-center'>
                        <i className='bi bi-question-circle'></i>
                        <span>Need Help?</span>
                    </a>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>
                <li>
                    <a href="#" className='dropdown-item d-flex align-items-center'>
                        <i className='bi bi-box-arrow-right'></i>
                        <span>Sign Out</span>
                    </a>
                </li>
            </ul>
        </li>
    )
}

export default NavAvatar
