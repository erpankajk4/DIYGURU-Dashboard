"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Tab from "@/components/tabFilteration/Tab";
import TabContent from "@/components/tabFilteration/TabContent";
import { IoPersonCircleOutline } from "react-icons/io5";
import { CiLogout, CiSettings } from "react-icons/ci";
import { dashboard } from "@/data/dashboard";
import { IoIosCloseCircleOutline } from "react-icons/io";

function Dashboard() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");
  const submenu = searchParams.get("submenu");

  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeTab, setActiveTab] = useState(tab || "Dashboard");
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(submenu);

  useEffect(() => {
    if (
      tab &&
      tab !== activeTab &&
      dashboard.tabs.some((t) => t.label === tab)
    ) {
      setActiveTab(tab);
      setActiveSubmenu(submenu);
    }
  }, [tab, submenu, activeTab]);

  const handleTabClick = (tabLabel: string) => {
    const selectedTab = dashboard.tabs.find(t => t.label === tabLabel);
    if (selectedTab?.submenu && selectedTab.submenu.length > 0) {
      setActiveTab(tabLabel);
      setActiveSubmenu(selectedTab.submenu[0].label);
      router.push(`?tab=${encodeURIComponent(tabLabel)}&submenu=${encodeURIComponent(selectedTab.submenu[0].label)}`);
    } else {
      setActiveTab(tabLabel);
      setActiveSubmenu(null);
      router.push(`?tab=${encodeURIComponent(tabLabel)}`);
    }
  };

  const handleSubmenuClick = (tabLabel: string, submenuLabel: string) => {
    setActiveTab(tabLabel);
    setActiveSubmenu(submenuLabel);
    router.push(`?tab=${encodeURIComponent(tabLabel)}&submenu=${encodeURIComponent(submenuLabel)}`);
  };

  return (
    <section className="relative grid grid-cols-12">
      {/* Mobile menu overlay */}
      {mobileMenu && (
        <div 
          className="w-full h-full bg-black opacity-50 fixed top-0 left-0 z-10"  
          onClick={() => setMobileMenu(false)}
        ></div>
      )}

      <aside
        className={`col-span-2 min-h-screen border-r-2 border-foreground/15 z-30 max-lg:col-span-3 ${
          mobileMenu
            ? "max-sm:fixed max-sm:bg-white max-sm:top-0 max-sm:left-0"
            : "max-sm:hidden"
        }`}
      >
        {mobileMenu && (
          <IoIosCloseCircleOutline 
            className="text-5xl text-white font-bold fixed top-4 right-4 z-20"
            onClick={() => setMobileMenu(false)}
          />
        )}
        {/* Logo */}
        <div className="flex items-center gap-2 bg-foreground p-5">
          <div className="rounded-lg bg-white px-2 py-1">
            <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={100}
              className="h-7 w-7 object-contain"
            />
          </div>
          <span className="text-2xl font-bold text-white">DIYguru.org</span>
        </div>
        {/* Tabs */}
        <Tab
          tabs={dashboard?.tabs}
          activeTab={activeTab}
          setActiveTab={handleTabClick}
          activeSubmenu={activeSubmenu}
          onSubmenuClick={handleSubmenuClick}
        />
        {/* Preference section */}
        <h6 className="m-5 mb-3 mt-16 text-sm">Preference</h6>
        <ul className="flex flex-col space-y-2 px-5 pb-2">
          <li className="flex cursor-pointer items-center gap-2 px-5 py-1.5">
            <IoPersonCircleOutline className="text-2xl" /> Profile
          </li>
          <li className="flex cursor-pointer items-center gap-2 px-5 py-1.5">
            <CiSettings className="text-2xl" /> Settings
          </li>
          <li className="flex cursor-pointer items-center gap-2 px-5 py-1.5">
            <CiLogout className="text-2xl" /> Log Out
          </li>
        </ul>
      </aside>
      {/* Tab Content */}
      <main className="col-span-10 max-h-screen overflow-y-scroll p-5 sm:p-10 max-sm:col-span-12 max-lg:col-span-9">
        <TabContent
          activeTab={dashboard?.tabs.find(tab => tab.label === activeTab)}
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
          activeSubmenu={activeSubmenu}
        />
      </main>
    </section>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Dashboard />
    </Suspense>
  );
}