import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineManageAccounts } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";
import { LiaInfoSolid } from "react-icons/lia";
import { LuMailPlus } from "react-icons/lu";
import HoverTooltip from "./HoverTooltip";

import TFlogo from "../assets/TF.jpg";

const Sidebar = () => {
  const liStyle =
    "flex text-center justify-center p-4 text-neutral-500 hover:rounded-full border-[2px] border-transparent hover:border-orange-300 hover:border-[2px] hover:text-orange-400 transition-all duration-300 text-2xl";

  return (
    <>
      <nav className="h-screen fixed z-50 bg-white flex flex-col justify-between items-center border-r-[1px] border-r-neutral-500">
        <img src={TFlogo} className="w-24 h-24" />
        <ul>
          <li>
            <HoverTooltip text="Inicio">
              <a href="#" data-tip="Inicio" className={liStyle}>
                <AiOutlineHome />
              </a>
            </HoverTooltip>
          </li>
          <li>
            <HoverTooltip text="Servicios">
              <a href="#2" className={liStyle}>
                <MdOutlineManageAccounts />
              </a>
            </HoverTooltip>
          </li>
          <li>
            <HoverTooltip text="Clientes">
              <a href="#" className={liStyle}>
                <IoPeopleOutline />
              </a>
            </HoverTooltip>
          </li>
          <hr className="border-t my-1 border-neutral-400 w-full" />
          <li>
            <HoverTooltip text="Información">
              <a href="#" className={liStyle}>
                <LiaInfoSolid />
              </a>
            </HoverTooltip>
          </li>
        </ul>
        <HoverTooltip text="Contacto">
          <a href="#" className={liStyle}>
            <LuMailPlus className="text-2xl" />
          </a>
        </HoverTooltip>
      </nav>
    </>
  );
};

export default Sidebar;
