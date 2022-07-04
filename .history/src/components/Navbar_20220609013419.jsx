import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyBoardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';

import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../context/ContextProvider';

const NavButton = ({ title, customFunc, icon,
color, dotColor}) => (
  <TooltipComponent content={title}
  positon="BottomCenter"
  >
    <button type="button" onClick={customFunc}>

    </button>
  </TooltipComponent>
)

const Navbar = () => {

  const {activeMenu, setActiveMenu } = useStateContext();

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton title="Menu" customFunc={() =>
         setActiveMenu((prevActiveMenu) => 
         !prevActiveMenu)} color="blue" icon={<AiOutlineMenu/>} />
    </div>
  )
}

export default Navbar