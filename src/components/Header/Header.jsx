import { Icon } from '@iconify/react';
import Badge from '../Badge';
import NavItem from './NavItem';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header className='py-2 bg-black text-secondary  border-bottom   border-b border-b-gray border-opacity-25 shadow-sm  pr-20 '>

            <div className="container-fluid  ">
                <div className="flex justify-between items-center">
                    <div className='flex items-center'>
                        <div className="flex justify-between items-center w-[240px] mr-10 pr-5  pl-5 text-2xl font-medium">
                            <h2>Admin</h2>
                            <Link to="http://localhost:5173/" target="_blank"><Icon icon="codicon:live-share" /> </Link>
                        </div>
                        <ul className='flex items-center space-x-5'>
                            <NavItem url="/" label="View Posts"  />
                            <NavItem url="/" label="Orders"  />
                            <NavItem url="/" label="Mailbox"  />
                        </ul>
                    </div>
                    <ul className='flex items-center space-x-10'>
                        <li>
                            <div className='text-2xl relative'> <Icon icon="ep:message" />
                                <Badge count={3} />
                            </div>
                        </li>
                        <li>
                            <div className='text-2xl relative'> <Icon icon="mdi:bell" />
                                <Badge count={4} variant="bg-warning" />
                            </div>
                        </li>
                        <li>
                            <div className='h-14 w-14 rounded-full border border-gray border-opacity-25 place-center'>
                                <Icon icon="mdi:user" className='text-3xl' />
                            </div>
                        </li>
                    </ul>

                </div>
            </div>


        </header>
    );
};

export default Header;