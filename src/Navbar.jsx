import React, { useState, useEffect , useRef} from 'react'
import Flyout from './FlyOut'


function Navbar() {
    const [isFlyoutVisible, setIsFlyoutVisible] = useState(false);
    const flyoutRef = useRef(null);
    const handleFlyoutToggle = () => {
        setIsFlyoutVisible(!isFlyoutVisible); 
    };
    const handleClickOutside = (event) => {
        if (flyoutRef.current && !flyoutRef.current.contains(event.target)) {
            setIsFlyoutVisible(false);
        }
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <>
            <nav className="bg-white font-bold">
                <ul className="no-underline flex justify-between px-3 py-2">
                    <li className="cursor-pointer relative" onMouseEnter={handleFlyoutToggle} >
                        Electronics 
                    </li>
                    <li className="cursor-pointer relative" onMouseEnter={handleFlyoutToggle} >
                        Men's Fashion
                    </li>
                    <li className="cursor-pointer relative" onMouseEnter={handleFlyoutToggle} >
                        Women's Fashion 
                    </li>
                    <li className="cursor-pointer relative" onMouseEnter={handleFlyoutToggle} >
                        Kid's Fashion 
                    </li>
                    <li className="cursor-pointer relative" onMouseEnter={handleFlyoutToggle} >
                        Home ad Kitchen
                    </li>
                    <li className="cursor-pointer relative" onMouseEnter={handleFlyoutToggle} >
                        Beauty & Fragrance 
                    </li>
                    <li className="cursor-pointer relative" onMouseEnter={handleFlyoutToggle} >
                        Baby
                    </li>
                </ul>
            </nav>
            {isFlyoutVisible && (
                <div ref={flyoutRef}>
                    <Flyout />
                </div>
            )}
        </>
    )
}

export default Navbar
