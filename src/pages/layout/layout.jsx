import React, { useState } from "react";
import { Button, Flex } from "antd";
import { Link, Outlet } from "react-router";

import logo from "../../assets/logo-box.svg";

import tl from "../../assets/Icon.png";
import wh from "../../assets/mingcute_whatsapp-fill.png";
import wk from "../../assets/Icon2.png";

import icon from "../../assets/Icon-box.png";

import { useTranslation } from "react-i18next";

const Layout = () => {
  let [menu, setMenu] = useState(false);

  function openMenu() {
    setMenu(menu ? false : true);
  }

  const { t, i18n } = useTranslation();
  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <div className="bg-[#19378f0c]">
      <header className="bg-white px-[10%] flex items-center justify-between gap-5 text-[12px] py-3 shadow-2xl shadow-[#19378F1A]">
        <img className="lg:w-1/10 w-5/10" src={logo} alt="" />
        <div className="hidden lg:block">
          <Button type="primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            {t("Header.1")}
          </Button>
        </div>

        <div className="hidden lg:flex items-center gap-2 border border-[#CED8EB] rounded px-5 text-[#7992B2]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            className="w-full h-full py-2.5 rounded outline-none placeholder:text-[#7992B2]"
            type="text"
            placeholder={t("Header.2")}
          />
        </div>

        <div className="hidden lg:flex items-center gap-2.5">
          <div className="bg-[#F0F4FA] flex items-center justify-center p-2 rounded-xl">
            <img className="w-[15px]" src={tl} alt="" />
          </div>
          <div className="bg-[#F0F4FA] flex items-center justify-center p-2 rounded-xl">
            <img className="w-[15px]" src={wh} alt="" />
          </div>
          <div className="bg-[#F0F4FA] flex items-center justify-center p-2 rounded-xl">
            <img className="w-[15px]" src={wk} alt="" />
          </div>
        </div>

        <p className="hidden lg:block font-semibold text-[#4D5F7D]">
          {t("Header.3")}
        </p>
        <p className="hidden lg:block font-semibold text-[#4D5F7D]">
          {t("Header.4")}
        </p>

        <button className="hidden lg:flex items-center gap-2 border border-[#CED8EB] rounded px-5 py-2.5">
          {t("Header.5")} <img className="w-2/10" src={icon} alt="" />
        </button>
    <button onClick={openMenu} className=" cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-[#7992B2] w-[24px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <div className="hidden lg:flex  lg:flex-row flex-col gap-1.5">
          <button
            className="border border-[#CED8EB] rounded px-1.5 text-[#7992B2]"
            onClick={() => TranslateClick("ru")}
          >
            RU
          </button>
          <button
            className="border border-[#CED8EB] rounded px-1.5 text-[#7992B2]"
            onClick={() => TranslateClick("en")}
          >
            EN
          </button>
        </div>

    
      </header>

      {menu && (
        <div className="absolute z-10 rounded-bl-2xl top-14  right-0 p-4 underline text-[#7992B2] font-semibold space-y-2.5 bg-white">
          <Link to={"/"}>
            <h1 onClick={openMenu}>{t("Header.6")}</h1>
          </Link>
          <Link to={"categories"}>
            <h1 onClick={openMenu}>{t("Header.7")}</h1>
          </Link>
          <Link to={"program"}>
            <h1 onClick={openMenu}>{t("Header.9")}</h1>
          </Link>
        </div>
      )}
      <main>
        <Outlet />
      </main>

      <footer className="lg:px-[10%] px-[5%] py-5">
        <article className="lg:flex items-start justify-between py-5 border-b border-[#CED8EB] space-y-5">
          <div className="lg:flex space-y-5 items-start gap-10">
            <div>
              <p className="pb-2.5 text-[14px] text-[#4D5F7D]">
                {t("Home.116")}
              </p>
              <p className="text-[16px] font-semibold text-[#070E18]">
                {t("Home.117")}
              </p>
              <p className="text-[16px] font-semibold text-[#070E18]">
                {t("Home.118")}
              </p>
            </div>

            <div>
              <p className="pb-2.5 text-[14px] text-[#4D5F7D]">
                {t("Home.119")}
              </p>
              <p className="text-[16px] font-semibold text-[#070E18]">
                {t("Home.120")}
              </p>
              <p className="text-[16px] font-semibold text-[#070E18]">
                {t("Home.121")}
              </p>
            </div>

            <div>
              <p className="pb-2.5 text-[14px] text-[#4D5F7D]">
                {t("Home.122")}
              </p>
              <p className="text-[16px] font-semibold text-[#070E18]">
                {t("Home.123")}
              </p>
              <p className="text-[16px] font-semibold text-[#070E18]">
                {t("Home.124")}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 ">
            <div className="bg-white flex items-center justify-center p-2 rounded">
              <img className="w-[15px]" src={tl} alt="" />
            </div>
            <div className="bg-white flex items-center justify-center p-2 rounded">
              <img className="w-[15px]" src={wh} alt="" />
            </div>
            <div className="bg-white flex items-center justify-center p-2 rounded">
              <img className="w-[15px]" src={wk} alt="" />
            </div>
          </div>
        </article>

        <article className="text-[14px] lg:text-[12px] text-[#4D5F7D] py-5 lg:flex space-y-2 gap-5">
          <p>{t("Home.125")}</p>
          <p>{t("Home.126")}</p>
          <p>{t("Home.127")}</p>
          <p>{t("Home.128")}</p>
        </article>
      </footer>
    </div>
  );
};

export default Layout;
