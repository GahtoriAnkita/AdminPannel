import React from 'react'

function NavNotice() {
    return (
        <li className='nav-item dropdown'>
            <a href="#" className='nav-link nav-icon' data-bs-toggle='dropdown'>
                <i className='bi bi-bell'></i>
                <span className='badge bg-primary badge-number'>4</span>
            </a>

            <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications'>
                <li className='dropdown-header'>
                    You have 4 new Notifications
                    <a href="#">
                        <span className='badge rounded-pill bg-primary p-2 ms-2'>
                            View all
                        </span>
                    </a>
                </li>
                <li >
                    <hr className='dropdown-divider' />
                </li>

                <li className='notification-item'>
                    <i className='bi bi-exclamation-circle text-warning'></i>
                    <div>
                        <h4>Lorem ipsum</h4>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>30 min. ago</p>
                    </div>
                </li>

                <li>
                    <hr className='dropdown-divider' />
                </li>

                <li className='notification-item'>
                    <i className='bi bi-info-circle text-primary'></i>
                    <div>
                        <h4> dolor sit amet.</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <p>4hrs. ago</p>
                    </div>
                </li>

                <li>
                    <hr className='dropdown-divider' />
                </li>

                <li className='dropdown-footer'>
                    <a href="#">Show all notifications</a>
                </li>
            </ul>
        </li>
    );
}

export default NavNotice
