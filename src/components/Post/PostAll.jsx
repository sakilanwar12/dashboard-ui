import { Link } from "react-router-dom";


const PostAll = () => {
    return (
        <>
            <div className="flex items-center space-x-5">
                <h4 className="font-medium text-black text-xl">Posts</h4>
                <Link to="/post/add" className="border border-info text-opacity-80  text-info border-opacity-20 py-1 px-2 ">Add New</Link>
            </div>
            <div className="flex justify-between mt-5">
                <ul className="flex space-x-5">
                    <li><Link to="/post/all">All <span>(6)</span></Link></li>
                    <li><Link to="/post/published">Published <span>(5)</span></Link></li>
                </ul>

                <form action="#" className="flex space-x-2">
                    <input type="text" className="w-[240px] py-1 border-0 focus:outline-none px-2" />
                    <input type="submit" value="Search Posts" className="btn text-info text-sm text-opacity-70 rounded-md " />
                </form>
            </div>
            {/* filters & generate reports */}

            <form action="#" className="mt-2">
                <div className="flex justify-between items-center">
                    <div className="filters-area flex items-center space-x-5">
                        {/* group 1 */}
                        <div className="filter-group">
                            <select>
                                <option value="bulk">Bult Actions</option>
                                <option value="edit">Edit</option>
                                <option value="trash">Move to trash</option>
                            </select>
                            <input type="submit" value="Apply"  className=" bg-secondary py-2 text-sm px-5 ml-2  text-info hover:text-secondary hover:bg-info" />
                        </div>
                        {/* group 2 */}
                        <div className="filter-group">
                            <select>
                                <option value="bulk">April 2020</option>
                                <option value="edit">January 2023</option>
                            </select>
                        </div>
                        <div className="filter-group">
                            <select>
                                <option value="cat" selected>All categories</option>
                                <option value="cat">App Development</option>
                                <option value="cat">Web Development</option>
                                <option value="cat">Ios Development</option>
                            </select>
                        </div>
                        <div className="fiter-group">
                            <input type="submit" value="filter" className=" bg-secondary py-2 px-5 text-sm  text-info hover:text-secondary hover:bg-info"/>
                        </div>

                    </div>
                    <div className="posts_count">
                        <span>6 items</span>
                    </div>
                </div>
            </form>
        </>
    );
};

export default PostAll;