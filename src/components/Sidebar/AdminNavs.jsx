import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const AdminNavs = () => {
    return (
        <nav className='relative z-2'>
            <ul>
                <li className='has-children'>
                    <div className='flex items-center text-base py-2 space-x-3  '>
                        <div><Icon icon="mdi:notes" /></div>
                        <div className='text-sm mt-1'>Posts</div>
                    </div>
                    <ul className="submenu">
                        <li><Link to="/post/all">All Posts</Link></li>
                        <li><Link to="/post/add">Add New</Link></li>
                        <li><Link to="/post/category">Categories</Link></li>
                        <li><Link to="/post/tags">Tags</Link></li>
                    </ul>
                </li>
                <li className='has-children'>
                    <div className='flex items-center text-base py-2 space-x-3  '>
                        <Icon icon="material-symbols:flag" />
                        <div className='text-sm mt-1'>Pages</div>
                    </div>
                    <ul className="submenu">
                        <li><Link to="/pages/all">All Pages</Link></li>
                        <li><Link to="/pages/add">Add New</Link></li>
                    </ul>
                </li>
                <li className='has-children'>
                    <div className='flex items-center text-base py-2 space-x-3  '>
                        <Icon icon="mdi:user" />
                        <div className='text-sm mt-1'>Users</div>
                    </div>
                    <ul className="submenu">
                        <li><Link to="/user/all">All user</Link></li>
                        <li><Link to="/user/add">Add New</Link></li>
                        <li><Link to="/user/profile">Profiles</Link></li>
                    </ul>
                </li>
                <li className='has-children'>
                    <div className='flex items-center text-base py-2 space-x-3  '>
                        <Icon icon="material-symbols:mail-outline" />
                        <div className='text-sm mt-1'>Mailbox</div>
                    </div>
                    <ul className="submenu">
                        <li><Link to="/mailbox/inbox">Inbox</Link></li>
                        <li><Link to="/mailbox/compose">Compose</Link></li>
                        <li><Link to="/mailbox/read">Read</Link></li>
                    </ul>
                </li>
                <li className='has-children'>
                    <div className='flex items-center text-base py-2 space-x-3  '>
                        <Icon icon="ic:baseline-contact-mail" />
                        <div className='text-sm mt-1'>Contact</div>
                    </div>
                    <ul className="submenu">
                        <li><Link to="/contact/form">Contact Form</Link></li>
                        <li><Link to="/contact/messenger">Messenger</Link></li>
                        <li><Link to="/contact/whatsapp">Whatsapp</Link></li>
                        <li><Link to="/contact/instagram">Instagram</Link></li>
                    </ul>
                </li>
                <li className='has-children'>
                    <div className='flex items-center text-base py-2 space-x-3  '>
                        <Icon icon="mdi:gear" />
                        <div className='text-sm mt-1'>Settings</div>
                    </div>
                    <ul className="submenu">
                        <li><Link to="/settings/general">General</Link></li>
                        <li><Link to="/settings/reading">Reading</Link></li>
                        <li><Link to="/settings/writing">Writing</Link></li>
                        <li><Link to="/settings/permalink">Permalink</Link></li>
                        <li><Link to="/settings/privecy">Privecy</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default AdminNavs;