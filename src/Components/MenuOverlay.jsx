import React from 'react';

function MenuOverlay({ menuList, handleScroll }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex flex-col items-center justify-center">
            {menuList.map((item) => (
                <h2
                    key={item.id}
                    className="text-white text-2xl cursor-pointer my-4"
                    onClick={() => {
                        handleScroll(item.section);
                    }}
                >
                    {item.title}
                </h2>
            ))}
        </div>
    );
}

export default MenuOverlay;
