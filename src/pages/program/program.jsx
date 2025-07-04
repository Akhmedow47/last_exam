import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "antd";

import img from "./images/img.png";

import img1 from "./images/Frame 2165.png";
import img2 from "./images/iconamoon_category-thin.png";
import img3 from "./images/Icon(1).png";
import img4 from "./images/Icon(2).png";
import img5 from "./images/Icon5.png";
import img6 from "./images/Icon.png";

import img7 from "./images/Frame 2207.png";
import img8 from "./images/Frame 2133.png";

import img9 from "../../assets/Img-box (1).png";
import img10 from "../../assets/Img-box (2).png";

import img11 from "./images/Photo.png";
import img12 from "./images/Photo (1).png";
import img13 from "./images/Photo (2).png";
import img14 from "./images/Photo (3).png";
import img15 from "./images/Photo (4).png";
import img16 from "./images/Photo (5).png";

const Program = () => {
  let uchitel = [
    { img: img11, name: "Анна Сергеева" },
    { img: img12, name: "Алёна Фордж" },
    { img: img13, name: "Елена Саболевская" },
    { img: img14, name: "Татьяна Лесныx" },
    { img: img15, name: "Петр Петрович" },
    { img: img16, name: "Владислава Панковская" },
  ];

  let { t, i18n } = useTranslation();

  let [openModalSavol, setopenModalSavol] = useState(null);

  let savolJavob = [
    { question: t("pro.59"), answer: t("pro.113") },
    { question: t("pro.61"), answer: t("pro.113") },
    { question: t("pro.63"), answer: t("pro.113") },
    { question: t("pro.74"), answer: t("pro.113") },
    { question: t("pro.76"), answer: t("pro.113") },
    { question: t("pro.78"), answer: t("pro.113") },
  ];

  let toggleIndex = (index) => {
    setopenModalSavol(openModalSavol === index ? null : index);
  };
  return (
    <div className="px-[4%] lg:px-[8%] lg:pt-0 pt-10">
      <div className="hidden lg:flex gap-2.5 items-center py-4 text-[#7992B2]">
        <p className="flex items-center gap-2">
          {t("pro.1")}
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
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </p>
        <p className="flex items-center gap-2">
          {t("pro.2")}
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
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </p>
        <p className="flex items-center gap-2 text-[#4D5F7D]">
          {t("pro.3")}
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
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </p>
      </div>

      <section className="lg:flex justify-between">
        <article className="lg:w-[30%] relative">
          <img className="w-full" src={img} alt="" />

          <div className="p-5 rounded-2xl bg-white relative -mt-8">
            <p className="text-[20px] font-semibold pb-5">{t("pro.4")}</p>

            <div className="py-2.5 flex lg:flex-row flex-col gap-2.5">
              <Button variant="solid" color="blue">
                {t("pro.5")}
              </Button>

              <Button variant="outline" color="blue">
                {t("pro.6")}
              </Button>
            </div>

            <div className="lg:flex justify-between  bg-[#F5FAFF] p-5 rounded-2xl mt-20">
              <p className="text-[#4D5F7D] text-base lg:text-[12px] w-3/5 lg:w-2/5">{t("pro.7")}</p>

              <div>
                <p className="text-[#0080FF] text-[24px] font-semibold">
                  126 : 16 : 38
                </p>
                <div className="flex items-center gap-5 text-[#4D5F7D] text-[13px]">
                  <span>{t("pro.8")}</span>
                  <span>{t("pro.9")}</span>
                  <span>{t("pro.10")}</span>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="lg:w-[65%]">
          <p className="text-[#070E18] font-semibold text-[24px] lg:text-3xl py-2.5">
            {t("pro.11")}
          </p>

          <p className="text-[#7992B2] font-semibold text-[14px] lg:text-[14px] flex items-center gap-2">
            {t("pro.12")}
          </p>

          <section className="py-10">
            <p className="text-[#070E18] font-semibold text-[24px] lg:text-3xl py-2.5">
              {t("pro.13")}
            </p>

            <div className="grid lg:grid-cols-2 gap-5">
              <article className="bg-white p-4 rounded-2xl space-y-5 shadow">
                <div className="flex">
                  <div className="text-[#0080FF] text-[14px] flex items-center gap-2 bg-[#F5FAFF] rounded-2xl px-2.5 py-1 ">
                    <img className="w-2/10" src={img6} alt="" />
                    {t("pro.14")}
                  </div>
                </div>
                <div className="flex items-end gap-2">
                  <p className="text-[20px] text-[#070E18] font-semibold">
                    24 000 ₽
                  </p>
                  <p className="text-[14px] text-[#7992B2] font-normal">
                    45 000 ₽
                  </p>
                </div>
              </article>

              <article className="bg-white p-4 rounded-2xl space-y-5 shadow">
                <div className="flex">
                  <div className="text-[#0080FF] text-[14px] flex items-center gap-2 bg-[#F5FAFF] rounded-2xl px-2.5 py-1 ">
                    <img className="w-2/10" src={img1} alt="" />
                    {t("pro.15")}
                  </div>
                </div>
                <div className="flex items-end gap-2">
                  <p className="text-[20px] text-[#070E18] font-semibold">
                    {t("pro.16")}
                  </p>
                </div>
              </article>

              <article className="bg-white p-4 rounded-2xl space-y-5 shadow">
                <div className="flex">
                  <div className="text-[#0080FF] text-[14px] flex items-center gap-2 bg-[#F5FAFF] rounded-2xl px-2.5 py-1 ">
                    <img className="w-2/10" src={img2} alt="" />
                    {t("pro.17")}
                  </div>
                </div>
                <div className="flex items-end gap-2">
                  <p className="text-[20px] text-[#070E18] font-semibold">
                    {t("pro.18")}
                  </p>
                </div>
              </article>

              <article className="bg-white p-4 rounded-2xl space-y-5 shadow">
                <div className="flex">
                  <div className="text-[#0080FF] text-[14px] flex items-center gap-2 bg-[#F5FAFF] rounded-2xl px-2.5 py-1 ">
                    <img className="w-2/10" src={img3} alt="" />
                    {t("pro.19")}
                  </div>
                </div>
                <div className="flex items-end gap-2">
                  <p className="text-[20px] text-[#070E18] font-semibold">
                    {t("pro.20")}
                  </p>
                </div>
              </article>

              <article className="bg-white p-4 rounded-2xl space-y-5 shadow">
                <div className="flex">
                  <div className="text-[#0080FF] text-[14px] flex items-center gap-2 bg-[#F5FAFF] rounded-2xl px-2.5 py-1 ">
                    <img className="w-2/10" src={img5} alt="" />
                    {t("pro.21")}
                  </div>
                </div>
                <div className="flex items-end gap-2">
                  <p className="text-[20px] text-[#070E18] font-semibold">
                    {t("pro.22")}
                  </p>
                </div>
              </article>

              <article className="bg-white p-4 rounded-2xl space-y-5 shadow">
                <div className="flex">
                  <div className="text-[#0080FF] text-[14px] flex items-center gap-2 bg-[#F5FAFF] rounded-2xl px-2.5 py-1 ">
                    <img className="w-2/10" src={img4} alt="" />
                    {t("pro.23")}
                  </div>
                </div>
                <div className="flex items-end gap-2">
                  <p className="text-[20px] text-[#070E18] font-semibold">
                    {t("pro.24")}
                  </p>
                </div>
              </article>
            </div>
          </section>

          <section>
            <p className="text-[#070E18] font-semibold text-[24px] lg:text-3xl py-2.5">
              {t("pro.25")}
            </p>

            <div className="grid grid-cols-1 gap-5 py-10">
              <div className="flex lg:flex-row flex-col items-start gap-5 bg-white p-5 rounded-2xl shadow-xl">
                <p className="bg-[#0080FF] text-white px-5 rounded-2xl">2</p>

                <div>
                  <p className="text-[20px] font-semibold text-[#070E18]">
                    {t("pro.26")}
                  </p>
                  <p className="text-[14px] font-normal text-[#4D5F7D]">
                    {t("pro.27")}
                  </p>
                </div>
              </div>
              <div className="flex lg:flex-row flex-col items-start gap-5 bg-white p-5 rounded-2xl shadow-xl">
                <p className="bg-[#0080FF] text-white px-5 rounded-2xl">2</p>

                <div>
                  <p className="text-[20px] font-semibold text-[#070E18]">
                    {t("pro.26")}
                  </p>
                  <p className="text-[14px] font-normal text-[#4D5F7D]">
                    {t("pro.27")}
                  </p>
                </div>
              </div>
              <div className="flex lg:flex-row flex-col items-start gap-5 bg-white p-5 rounded-2xl shadow-xl">
                <p className="bg-[#0080FF] text-white px-5 rounded-2xl">2</p>

                <div>
                  <p className="text-[20px] font-semibold text-[#070E18]">
                    {t("pro.26")}
                  </p>
                  <p className="text-[14px] font-normal text-[#4D5F7D]">
                    {t("pro.27")}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-10">
            <p className="text-[#070E18] font-semibold text-3xl py-2.5">
              {t("pro.28")}
            </p>

            <article>
              <p className="text-[#4D5F7D]  text-[14px]  py-2.5 w-2/4 lg:w-2/9">
                {t("pro.29")}
              </p>

              <div className="flex lg:flex-row flex-col gap-5 lg:items-end justify-between">
                <div className="lg:w-3/10 text-center rounded-2xl bg-[#E3EAF7] h-[22vh] lg:h-[25vh] flex flex-col justify-between p-5">
                  <p className="text-[25px] font-semibold text-[#070E18]">
                    {t("pro.31")}
                  </p>
                  <div>
                    <p className="text-[18px] font-semibold text-[#0080FF]">
                      {t("pro.34")}
                    </p>
                    <p className="text-[18px] font-semibold text-[#070E18]">
                      {t("pro.35")}
                    </p>
                  </div>
                </div>

                <div className="lg:w-3/10 text-white text-center rounded-2xl bg-[#0080FF] h-[22vh] lg:h-[50vh] flex flex-col justify-between p-5">
                  <p className="text-[25px] font-semibold ">{t("pro.32")}</p>
                  <div>
                    <p className="text-[18px] font-semibold text-[]">
                      {t("pro.35")}
                    </p>
                    <p className="text-[18px] font-semibold text-[]">
                      {t("pro.36")}
                    </p>
                  </div>
                </div>

                <div className="lg:w-3/10 text-center rounded-2xl bg-[#E3EAF7] h-[22vh] lg:h-[75vh] flex flex-col justify-between p-5">
                  <p className="text-[25px] font-semibold text-[#070E18]">
                    {t("pro.33")}
                  </p>
                  <div>
                    <p className="text-[18px] font-semibold text-[#0080FF]">
                      {t("pro.38")}
                    </p>
                    <p className="text-[18px] font-semibold text-[#070E18]">
                      {t("pro.39")}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </section>

          <section>
            <p className="text-[#070E18] font-semibold text-3xl py-1">
              {t("pro.48")}
              <span className="text-[#070E18] font-semibold text-3xl px-2.5 rounded-2xl mx-2 bg-[#83C1FF]">
                {t("pro.49")}
              </span>
            </p>

            <article className="py-10 grid lg:grid-cols-2 gap-5">
              <div className="space-y-5 bg-white p-5 rounded-2xl shadow-xl">
                <img src={img7} alt="" />

                <p className="text-[20px] font-semibold text-[#070E18]">
                  {t("pro.40")}
                </p>
                <p className="text-[14px] font-normal text-[#4D5F7D]">
                  {t("pro.41")}
                </p>
              </div>

              <div className="space-y-5 bg-white p-5 rounded-2xl shadow-xl">
                <img src={img7} alt="" />

                <p className="text-[20px] font-semibold text-[#070E18]">
                  {t("pro.42")}
                </p>
                <p className="text-[14px] font-normal text-[#4D5F7D]">
                  {t("pro.43")}
                </p>
              </div>

              <div className="space-y-5 bg-white p-5 rounded-2xl shadow-xl">
                <img src={img7} alt="" />

                <p className="text-[20px] font-semibold text-[#070E18]">
                  {t("pro.44")}
                </p>
                <p className="text-[14px] font-normal text-[#4D5F7D]">
                  {t("pro.45")}
                </p>
              </div>

              <div className="space-y-5 bg-white p-5 rounded-2xl shadow-xl">
                <img src={img7} alt="" />

                <p className="text-[20px] font-semibold text-[#070E18]">
                  {t("pro.46")}
                </p>
                <p className="text-[14px] font-normal text-[#4D5F7D]">
                  {t("pro.47")}
                </p>
              </div>

              <div className="space-y-5 bg-white p-5 rounded-2xl shadow-xl">
                <img src={img7} alt="" />

                <p className="text-[20px] font-semibold text-[#070E18]">
                  {t("pro.50")}
                </p>
                <p className="text-[14px] font-normal text-[#4D5F7D]">
                  {t("pro.51")}
                </p>
              </div>

              <div className="space-y-5 bg-white p-5 rounded-2xl shadow-xl">
                <img src={img7} alt="" />

                <p className="text-[20px] font-semibold text-[#070E18]">
                  {t("pro.52")}
                </p>
                <p className="text-[14px] font-normal text-[#4D5F7D]">
                  {t("pro.53")}
                </p>
              </div>
            </article>
          </section>

          <section className="bg-white rounded-2xl p-5">
            <div className="flex lg:flex-row flex-col justify-between lg:items-center">
              <p className="text-[#070E18] font-semibold text-[24px] lg:text-3xl py-1">
                {t("pro.55")}
              </p>

              <div className="flex gap-5 lg:py-0 py-5">
                <p className="text-5xl font-semibold text-[#3284FF] flex flex-col items-center">
                  15{" "}
                  <span className="text-[14px] text-[#4D5F7D] font-normal">
                    {t("pro.56")}
                  </span>
                </p>
                <p className="text-5xl font-semibold text-[#3284FF] flex flex-col items-center">
                  127{" "}
                  <span className="text-[14px] text-[#4D5F7D] font-normal">
                    {t("pro.57")}
                  </span>
                </p>
              </div>
            </div>

            <div className="py-5 space-y-2.5">
              {savolJavob.map((item, index) => (
                <div key={index}>
                  <button
                    onClick={() => toggleIndex(index)}
                    className="w-full text-left text-[14px] py-2 border-b border-[#E3EAF7]  flex items-center justify-between hover:text-blue-500"
                  >
                    <div className="flex flex-col items-start gap-2">
                      <div className="text-[#0080FF] text-[14px] flex items-center gap-2 bg-[#F5FAFF] rounded-2xl px-2.5 py-1 ">
                        <span className="">
                          {index + 1}
                          {t("pro.60")}
                        </span>
                      </div>
                      <p className="text-xl font-semibold">{item.question}</p>
                    </div>

                    <span
                      className={`transition-transform duration-300 ${
                        openModalSavol === index ? "rotate-180" : ""
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 w-[15px]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </button>

                  {openModalSavol === index && (
                    <div className="text-[13px] text-gray-600 mt-2">
                      {t("pro.64")}

                      <div className="flex flex-wrap py-5 gap-5">
                        <p className="  border border-[#F0F4FA] px-2.5 rounded-2xl flex items-center gap-2 p-1 text-[#425978]">
                          <img src={img8} alt="" />
                          {t("pro.66")}
                        </p>

                        <p className="  border border-[#F0F4FA] px-2.5 rounded-2xl flex items-center gap-2 p-1 text-[#425978]">
                          <img src={img8} alt="" />
                          {t("pro.67")}
                        </p>

                        <p className="  border border-[#F0F4FA] px-2.5 rounded-2xl flex items-center gap-2 p-1 text-[#425978]">
                          <img src={img8} alt="" />
                          {t("pro.68")}
                        </p>

                        <p className="  border border-[#F0F4FA] px-2.5 rounded-2xl flex items-center gap-2 p-1 text-[#425978]">
                          <img src={img8} alt="" />
                          {t("pro.69")}
                        </p>

                        <p className="  border border-[#F0F4FA] px-2.5 rounded-2xl flex items-center gap-2 p-1 text-[#425978]">
                          <img src={img8} alt="" />
                          {t("pro.70")}
                        </p>

                        <p className="  border border-[#F0F4FA] px-2.5 rounded-2xl flex items-center gap-2 p-1 text-[#425978]">
                          <img src={img8} alt="" />
                          {t("pro.71")}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="pt-10">
            <p className="text-[#070E18] font-semibold text-3xl py-1">
              {t("pro.79")}
            </p>

            <div className="grid lg:grid-cols-2 gap-8 py-10 ">
              {uchitel.map((e, i) => (
                <div key={i + 1} className="bg-white p-2.5 rounded-2xl flex gap-2.5 pb-7">
                  <div className="w-5/10 relative">
                    <img src={e.img} alt="" />
                    <p className="absolute text-[12px] text-[#7992B2] -mt-[17px] w-3/5 h-full">{t("pro.80")}</p>
                  </div>

                  <div className="flex flex-col justify-between">
                    <p className="text-[#070E18] text-[18px] font-semibold">
                      {e.name}
                    </p>
                    <div>
                      <p className="text-[#4D5F7D] text-[14px]">
                        {t("pro.82")}
                      </p>
                      <p className="text-[#4D5F7D] text-[14px]">
                        {t("pro.83")}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-[#0063E5] lg:flex justify-around  rounded-2xl my-10">
            <div className="text-white flex flex-col items-start justify-between p-6">
              <p className="text-[25px] font-semibold lg:w-2/3 ">
                {t("cat.3")}
              </p>
              <button className=" border rounded-3xl px-4 py-1.5 flex items-center gap-2.5 my-5">
                {t("cat.4")}
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
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </div>

            <img className="w-4/10 lg:block hidden" src={img9} alt="" />
            <img
              className="w-8/10 block lg:hidden relative ml-[72px] rounded-br-2xl"
              src={img10}
              alt=""
            />
          </section>
        </article>
      </section>
    </div>
  );
};

export default Program;
