import React from 'react'
function NavMessage() {
    return (
        <li className='nav-item dropdown'>
            <a href="#" className='nav-link nav-icon text-decoration-none' data-bs-toggle="dropdown">
                <i className='bi bi-chat-left-text'></i>
                <span className='badge bg-success badge-number'>3</span>
            </a>

            <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow messages'>
                <li className='dropdown-header'>
                    You have 3 new messages
                    <a href="#" className='badge rounded-pill bg-primary p-2 ms-2 text-decoration-none'>
                        <span>
                            view all
                        </span>
                    </a>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>

                <li className='message-item'>
                    <a href="#" className='text-decoration-none'>
                        <img src="" alt="" className='rounded-circle' />
                        <div>
                            <h4>Maris Hudson</h4>
                            <p>
                                Lorem iest architecto tenetur tempore, minima enim.....
                            </p>
                            <p>4 hrs. ago</p>
                        </div>
                    </a>
                </li>
                <li>
                <hr className='dropdown-divider'/>
                </li>

                <li className='message-item'>
                    <a href="#" className='text-decoration-none'>
                        <img src="" alt="" className='rounded-circle' />
                        <div>
                            <h4>Maris Hudson</h4>
                            <p>
                                Lorem ipsum consectetur adipisicing elit. minima enim.....
                            </p>
                            <p>4 hrs. ago</p>
                        </div>
                    </a>
                </li>
                <li>
                <hr className='dropdown-divider'/>
                </li>
                <li className='dropdown-footer'>
                <a href="#" className='text-decoration-none p-2'>Show all notifications</a>
            </li>
            </ul>
        </li>
    )
}

export default NavMessage
