import { Icon } from '@iconify/react';
import Badge from '../Badge';
import NavItem from './NavItem';

const Header = () => {

    return (
        <header className='py-2  border-b border-b-gray border-opacity-25 shadow-sm absolute top-0 left-0 w-full pr-20 '>

            <div className="container-fluid  ">
                <div className="flex justify-end items-center">

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