import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <div>
                <nav class="top-0 sticky p-10">
                    <div class="flex justify-between">
                        <h1 class="text-white text-6xl">Web<span class="text-blue-800 font-bold">Technology</span></h1>
                        <div class="pt-3">
                            <ul class="text-white text-lg flex gap-10">
                                <Link to="/web1"><li class="text-white hover:text-blue-800 cursor-pointer scroll-smooth text-2xl">Web 1</li></Link>
                                <Link to="/web2"><li class="text-white hover:text-blue-800 cursor-pointer scroll-smooth text-2xl">Web 2</li></Link>
                                <Link to="/web3"><li class="text-white hover:text-blue-800 cursor-pointer scroll-smooth text-2xl">Web 3</li></Link>
                                <Link to="/tech"><li class="text-white hover:text-blue-800 cursor-pointer scroll-smooth text-2xl">Technical</li></Link>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        </div>
    )
}

export default Nav;