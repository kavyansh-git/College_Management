import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const SidebarButton = ({ icon, screen, label, target, iconWidth }) => {

    const isActive = (screen === label);
    
    return (
        <Link to={target}>
            <div className={`w-full h-1/7 rounded-lg text-white text-center text-lg flex items-center justify-center transition-colors duration-300
                    ${isActive ? 'bg-red-800 text-black font-semibold' : 'hover:bg-black hover:text-white hover:font-semibold'}`}>
                <div className="w-1/5 h-full rounded-lg flex items-center justify-center">
                    <Icon icon={icon} width={iconWidth}/>
                </div>
                <div className="w-4/5 h-full pl-1 flex items-center justify-start">
                    {label}
                </div>
            </div>
        </Link>
    )
};

export default SidebarButton;