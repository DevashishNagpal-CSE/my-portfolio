import React, { useState } from 'react';
import { HiBars3BottomRight, HiOutlineXMark } from "react-icons/hi2";
import MenuOverlay from './MenuOverlay';

function Header() {
    const [toggle, setToggle] = useState(false);

    const handleScroll = (section) => {
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const menuList = [
        { id: 1, title: 'HOME', section: 'home' },
        { id: 2, title: 'ABOUT', section: 'about' },
        { id: 3, title: 'PROJECTS', section: 'projects' },
        { id: 4, title: 'CONTACT', section: 'contact' }
    ];

    return (
        <div className='flex items-center justify-between px-4 md:px-10 border-black sticky top-0 bg-transparent z-50 shadow-lg'>
            <div className="flex-1">
                <h2 className='text-[24px] font-bold text-white'>
                    DEVASHISH <span className='text-red-500'>NAGPAL</span>
                </h2>
            </div>
            <div className='hidden md:flex gap-4'>
                {menuList.map((item) => (
                    <div key={item.id}>
                        <h2
                            className='text-white hover:border-[1px] border-red-500 rounded-full
                            text-[15px] px-3 py-1 cursor-pointer'
                            onClick={() => handleScroll(item.section)}
                        >
                            {item.title}
                        </h2>
                    </div>
                ))}
            </div>
            <div className='md:hidden'>
                {!toggle ? (
                    <HiBars3BottomRight onClick={() => setToggle(!toggle)} className='text-white text-[22px] cursor-pointer' />
                ) : (
                    <HiOutlineXMark onClick={() => setToggle(!toggle)} className='text-white text-[22px] cursor-pointer' />
                )}
                {toggle ? <MenuOverlay menuList={menuList} handleScroll={handleScroll} /> : null}
            </div>
        </div>
    );
}

export default Header;
