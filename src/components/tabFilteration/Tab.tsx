import { motion } from "framer-motion";
import React from "react";
import { FaCaretRight } from "react-icons/fa";
import Link from "next/link";

interface TabProps {
  tabs: {
    id: string | any;
    label: string;
    icon: JSX.Element;
    submenu?: { id: string; label: string }[];
  }[];
  activeTab: string;
  activeSubmenu: string | null;
  setActiveTab: (tabId: string) => void;
  onSubmenuClick: (tabLabel: string, submenuLabel: string) => void;
}

const Tab: React.FC<TabProps> = ({ tabs, activeTab, activeSubmenu, setActiveTab, onSubmenuClick }) => {
  return (
    <div>
      <h6 className="text-sm p-5 pb-3">Main Menu</h6>
      <ul className="flex flex-col space-y-2 mx-5 pb-2 border-b-2 border-foreground/15 ">
        {tabs.map((tab) => (
          <React.Fragment key={tab.id}>
            <li
              onClick={() => setActiveTab(tab.label)}
              className={`${
                activeTab === tab.label
                  ? "text-white mb-0"
                  : "text-foreground hover:text-foreground/60"
              } relative flex flex-nowrap items-center gap-2 cursor-pointer rounded-full px-5 py-1.5 text-sm font-medium transition focus-visible:outline-2`}
            >
              {activeTab === tab.label && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 z-10 gap-x-2 rounded-full bg-foreground shadow-lg"
                  transition={{ type: "spring", bounce: 0.5, duration: 0.6 }}
                />
              )}
              <span className="z-20 text-2xl">{tab.icon}</span>
              <span className="z-20">{tab.label}</span>
            </li>
            {activeTab === tab.label && tab.submenu && (
              <ul className="pl-3 pr-1 py-1.5 bg-purple-200 pt-6 mt-[-20px!important] rounded-2xl ">
                {tab.submenu.map((subItem) => (
                  <li
                    key={subItem.id}
                    onClick={() => onSubmenuClick(tab.label, subItem.label)}
                    className={`${
                      activeSubmenu === subItem.label
                        ? "text-purple-700"
                        : "text-zinc-800 hover:text-purple-700"
                    } text-sm cursor-pointer py-1 px-3 rounded-full transition-colors duration-200 ease-in-out flex my-1 items-center`}
                  >
                    <FaCaretRight className="mr-2" />
                    {subItem.label}
                  </li>
                ))}
              </ul>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Tab;