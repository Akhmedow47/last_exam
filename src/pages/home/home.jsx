import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Input, Collapse, Modal, Slider } from "antd";
import axios from "axios";
import "../../App.css";

import img1 from "../../assets/чел 1.png";
import img2 from "../../assets/Romb (2).png";
import img3 from "../../assets/Romb (3).png";

import img4 from "../../assets/Rectangle 120.png";

import img5 from "../../assets/Icon1.png";
import img6 from "../../assets/Icon(1).png";
import img7 from "../../assets/humbleicons_user.png";
import img8 from "../../assets/Vector (1).png";

import img9 from "../../assets/Img-box.png";
import img10 from "../../assets/Logo.png";

import img11 from "../../assets/Icon(3).png";
import img12 from "../../assets/Icon(4).png";
import img13 from "../../assets/Icon(5).png";

import img14 from "../../assets/image 1.png";
import img15 from "../../assets/куб 1.png";

import img16 from "../../assets/Video-frame.png";
import img17 from "../../assets/Video-frame (1).png";
import img18 from "../../assets/Video-frame (2).png";
import img19 from "../../assets/Video-frame (3).png";

import img20 from "../../assets/Group 12.png";
import img201 from "../../assets/Group 12 (1).png";
import img21 from "../../assets/Icon-41.png";
import { Link } from "react-router";

const Home = () => {
  let { t, i18n } = useTranslation();

  let [openModalSavol, setopenModalSavol] = useState(null);

  let savolJavob = [
    { question: t("Home.107"), answer: t("Home.113") },
    { question: t("Home.108"), answer: t("Home.113") },
    { question: t("Home.109"), answer: t("Home.113") },
    { question: t("Home.110"), answer: t("Home.113") },
    { question: t("Home.111"), answer: t("Home.113") },
    { question: t("Home.112"), answer: t("Home.113") },
  ];

  let toggleIndex = (index) => {
    setopenModalSavol(openModalSavol === index ? null : index);
  };

  let api = "http://localhost:3000/data";
  let [data, setData] = useState([]);

  async function get() {
    try {
      let { data } = await axios.get(api);
      setData(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    get();
  }, []);

  async function delUser(id) {
    try {
      await axios.delete(`${api}/${id}`);
      get();
    } catch (error) {
      console.error(error);
    }
  }

  const [addModal, setaddModal] = useState(false);
  let [addName, setaddName] = useState("");
  let [addSena, setaddSena] = useState("");
  let [addImg, setaddImg] = useState("");
  let [addStatus, setaddStatus] = useState(true);

  async function addUser() {
    let newUser = {
      name: addName,
      sena: addSena,
      img: addImg,
      status: addStatus == "active",
    };
    try {
      await fetch(api, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newUser),
      });
      get();
      setaddModal(false);
    } catch (error) {
      console.error(error);
    }
  }

  const [editModal, seteditModal] = useState(false);
  let [editName, seteditName] = useState("");
  let [editSena, seteditSena] = useState("");
  let [editImg, seteditImg] = useState("");
  let [editStatus, seteditStatus] = useState(true);
  let [idx, setidx] = useState(null);

  function openeditModal(e) {
    seteditModal(true);
    seteditName(e.name);
    seteditSena(e.sena);
    seteditImg(e.img);
    seteditStatus(e.status ? "active" : "inactive");
    setidx(e.id);
  }

  async function editUser() {
    let newUser = {
      name: editName,
      sena: editSena,
      img: editImg,
      status: editStatus == "active",
    };
    try {
      await fetch(`${api}/${idx}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newUser),
      });
      get();
      seteditModal(false);
    } catch (error) {
      console.error(error);
    }
  }
  let [search, setsearch] = useState("");
  let [status, setstatus] = useState("");

  async function changeStatus(e) {
    try {
      await axios.put(`${api}/${e.id}`, { ...e, status: !e.status });
      get();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="px-[5%] lg:px-[8%]">
      <section className="bg-[#3284FF] relative text-white flex lg:flex-row flex-col items-center justify-between p-5 rounded-2xl my-[5%] py-10">
        <p className="absolute right-2.5 top-2.5 lg:hidden block">
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
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </p>
        <p className="text-[20px] lg:text-start text-center lg:text-[24px] font-semibold lg:w-2/5 w-2/4 ">
          {t("Home.1")}
        </p>

        <div className="text-center space-y-4 lg:py-0 py-10">
          <p className="text-[12px] lg:text-base ">{t("Home.2")}</p>

          <article className="flex gap-5">
            <div className="flex flex-col items-center justify-center">
              <div className="flex gap-1">
                <p className="border border-[#83C1FF] lg:px-4 lg:py-1.5 px-2 rounded ">
                  9
                </p>
                <p className="border border-[#83C1FF] lg:px-4 lg:py-1.5 px-2 rounded ">
                  8
                </p>
              </div>
              <p className="text-[11px] text-[#CCE8FF]">{t("Home.3")}</p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="flex gap-1">
                <p className="border border-[#83C1FF] lg:px-4 lg:py-1.5 px-2 rounded ">
                  1
                </p>
                <p className="border border-[#83C1FF] lg:px-4 lg:py-1.5 px-2 rounded ">
                  8
                </p>
              </div>
              <p className="text-[11px] text-[#CCE8FF]">{t("Home.4")}</p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="flex gap-1">
                <p className="border border-[#83C1FF] lg:px-4 lg:py-1.5 px-2 rounded ">
                  4
                </p>
                <p className="border border-[#83C1FF] lg:px-4 lg:py-1.5 px-2 rounded ">
                  5
                </p>
              </div>
              <p className="text-[11px] text-[#CCE8FF]">{t("Home.5")}</p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="flex gap-1">
                <p className="border border-[#83C1FF] lg:px-4 lg:py-1.5 px-2 rounded ">
                  1
                </p>
                <p className="border border-[#83C1FF] lg:px-4 lg:py-1.5 px-2 rounded ">
                  1
                </p>
              </div>
              <p className="text-[11px] text-[#CCE8FF]">{t("Home.6")}</p>
            </div>
          </article>
        </div>

        <button className="font-bold text-black bg-white rounded-3xl px-6 py-2.5 text-[12px] ">
          {t("Home.7")}
        </button>
      </section>

      <section className="lg:py-[5%] flex justify-between py-16">
        <article className="bg-white lg:w-3/5 p-4 lg:p-10 rounded-tr-2xl rounded-b-2xl relative">
          <div className="flex items-center gap-5 absolute -top-10 left-0">
            <p className="rounded-t-xl bg-white p-2.5">{t("Home.8")}</p>
            <p>{t("Home.9")}</p>
            <p>{t("Home.10")}</p>
          </div>

          <div className="mb-10">
            <p className="text-[#7992B2] font-semibold text-[15px] lg:text-xl">
              {t("Home.11")}
            </p>
            <p className="text-[#070E18] font-semibold text-[24px] lg:text-4xl py-5">
              {t("Home.12")}
            </p>
            <Button className="lg:w-auto w-full" type="primary">
              {t("Home.26")}
            </Button>
          </div>

          <div className="flex flex-wrap gap-2.5 pt-12 lg:text-[12px] text-[16px]">
            <p className=" text-[#070E18] bg-[#F0F4FA] border border-[#E3EAF7] px-2.5 rounded-2xl ">
              {t("Home.13")}
            </p>
            <p className="text-[#070E18] bg-[#F0F4FA] border border-[#E3EAF7] px-2.5 rounded-2xl ">
              {t("Home.14")}
            </p>
            <p className="text-[#070E18] bg-[#F0F4FA] border border-[#E3EAF7] px-2.5 rounded-2xl ">
              {t("Home.15")}
            </p>
            <p className="text-[#070E18] bg-[#F0F4FA] border border-[#E3EAF7] px-2.5 rounded-2xl ">
              {t("Home.16")}
            </p>
            <p className="text-[#070E18] bg-[#F0F4FA] border border-[#E3EAF7] px-2.5 rounded-2xl ">
              {t("Home.17")}
            </p>
            <p className="text-[#070E18] bg-[#F0F4FA] border border-[#E3EAF7] px-2.5 rounded-2xl ">
              {t("Home.18")}
            </p>
            <p className="text-[#070E18] bg-[#F0F4FA] border border-[#E3EAF7] px-2.5 rounded-2xl ">
              {t("Home.19")}
            </p>
            <p className="text-[#070E18] bg-[#F0F4FA] border border-[#E3EAF7] px-2.5 rounded-2xl ">
              {t("Home.20")}
            </p>
            <p className="text-[#070E18] bg-[#F0F4FA] border border-[#E3EAF7] px-2.5 rounded-2xl ">
              {t("Home.21")}
            </p>
            <p className="text-[#070E18] bg-[#F0F4FA] border border-[#E3EAF7] px-2.5 rounded-2xl ">
              {t("Home.22")}
            </p>
            <p className="text-[#070E18] bg-[#F0F4FA] border border-[#E3EAF7] px-2.5 rounded-2xl ">
              {t("Home.23")}
            </p>
            <p className="text-[#070E18] bg-[#F0F4FA] border border-[#E3EAF7] px-2.5 rounded-2xl ">
              {t("Home.24")}
            </p>
            <p className="text-[#070E18] bg-[#F0F4FA] border border-[#E3EAF7] px-2.5 rounded-2xl ">
              {t("Home.25")}
            </p>
          </div>
        </article>

        <article className="bg-[#3284FF] w-[38%] p-10 rounded-t-2xl rounded-b-2xl relative lg:block hidden">
          <p className="rounded-tl-xl rounded-br-2xl bg-white p-2.5 text-[#0063E5] text-[30px] font-bold absolute top-0 left-0">
            {t("Home.27")}
          </p>
          <img className="w-8/10 absolute bottom-0" src={img1} alt="" />
          <img className="absolute top-5 right-5" src={img3} alt="" />
          <img className="absolute bottom-5 left-5" src={img2} alt="" />
        </article>
      </section>
      {/*  */}
      <section className="">
        <article className="flex justify-between py-8 ">
          <div className="lg:flex items-center gap-5">
            <p className="text-[#070E18] font-semibold text-4xl ">
              {t("Home.28")}
            </p>
            <p className="text-[#4D5F7D]">{t("Home.29")}</p>
          </div>

          <div className="lg:flex items-center gap-5 hidden">
            <select className="text-[#0080FF]">
              <option value="">{t("Home.30")}</option>
            </select>
            <select className="text-[#4D5F7D]">
              <option value="">{t("Home.31")}</option>
            </select>

            <select
              value={status}
              onChange={(e) => setstatus(e.target.value)}
              className="border border-gray-200 p-1 rounded hover:border-blue-400 outline-none"
            >
              <option value="">All</option>
              <option value="true">Active</option>
              <option value="false">Inactive</option>
            </select>
            <Input
              value={search}
              onChange={(e) => setsearch(e.target.value)}
              placeholder="Search..."
            />
            <Button
              onClick={() => setaddModal(true)}
              color="blue"
              variant="solid"
            >
              Add New Product
            </Button>
          </div>
        </article>

        <div className="flex items-start gap-5">
          <article className="bg-white rounded-2xl w-2/8 p-5 lg:block hidden">
            <div className="py-2">
              <p className="text-[#070E18] text-[14px] font-semibold">
                {t("Home.32")}
              </p>

              <div className="text-[#4D5F7D] text-[12px] flex flex-col py-5">
                <div>
                  <input type="checkbox" /> {t("Home.33")}
                </div>
                <div>
                  <input type="checkbox" /> {t("Home.34")}
                </div>
                <div>
                  <input type="checkbox" /> {t("Home.34")}
                </div>
              </div>
            </div>

            <div className="py-3">
              <p className="text-[#070E18] text-[14px] font-semibold">
                {t("Home.36")}
              </p>

              <div>
                <Slider range defaultValue={[20, 50]} />
                <div className="flex items-center gap-2">
                  <Input placeholder={t("Home.37")} />
                  <Input placeholder={t("Home.38")} />
                </div>
              </div>
            </div>

            <div className="py-3">
              <p className="text-[#070E18] text-[14px] font-semibold">
                {t("Home.43")}
              </p>

              <div className="text-[#4D5F7D] text-[12px] flex flex-col gap-2 py-2.5">
                <div>
                  <input type="radio" /> {t("Home.44")}
                </div>
                <div>
                  <input type="radio" /> {t("Home.45")}
                </div>
                <div>
                  <input type="radio" /> {t("Home.46")}
                </div>
              </div>
            </div>

            <div className="py-3">
              <p className="text-[#070E18] text-[14px] font-semibold">
                {t("Home.47")}
              </p>

              <div className="text-[#4D5F7D] text-[12px] flex flex-col gap-2 py-2.5">
                <div>
                  <input type="checkbox" /> {t("Home.48")}
                </div>
                <div>
                  <input type="checkbox" /> {t("Home.49")}
                </div>
              </div>
            </div>

            <div className="py-3">
              <p className="text-[#070E18] text-[14px] font-semibold">
                {t("Home.50")}
              </p>

              <div className="text-[#4D5F7D] text-[12px] flex flex-col py-5">
                <div>
                  <Slider range defaultValue={[20, 50]} />
                  <div className="flex items-center ">
                    <Input placeholder={t("Home.37")} />
                    <Input placeholder={t("Home.38")} />
                  </div>
                </div>
              </div>
            </div>

            <div className="py-3">
              <p className="text-[#070E18] text-[14px] font-semibold">
                {t("Home.51")}
              </p>

              <div className="text-[#4D5F7D] text-[12px] flex flex-col py-5">
                <div>
                  <div className="flex items-center ">
                    <Input type="date" placeholder={t("Home.37")} />
                    <Input type="date" placeholder={t("Home.38")} />
                  </div>
                </div>
              </div>
            </div>

            <div className="py-5 flex items-center gap-2 text-[12px] text-[#4D5F7D]">
              <input type="checkbox" /> <p>У меня иностранное гражданство</p>
            </div>

            <div className="flex flex-col gap-2.5">
              <Button type="primary">{t("Home.52")}</Button>
              <Button type="primary">{t("Home.53")}</Button>
            </div>
          </article>

          <Modal
            title="Add Cart"
            closable={{ "aria-label": "Custom Close Button" }}
            open={addModal}
            onOk={() => addUser()}
            onCancel={() => setaddModal(false)}
          >
            <div className="flex flex-col gap-2.5">
              <Input
                value={addName}
                onChange={(e) => setaddName(e.target.value)}
                placeholder="Name"
              />
              <Input
                value={addSena}
                onChange={(e) => setaddSena(e.target.value)}
                placeholder="Sena"
              />
              <Input
                value={addImg}
                onChange={(e) => setaddImg(e.target.value)}
                placeholder="Img Url"
              />
              <select
                value={addStatus}
                onChange={(e) => setaddStatus(e.target.value)}
                className="border border-gray-200 p-1 rounded hover:border-blue-400 outline-none"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </Modal>

          <Modal
            title="Edit Cart"
            closable={{ "aria-label": "Custom Close Button" }}
            open={editModal}
            onOk={() => editUser()}
            onCancel={() => seteditModal(false)}
          >
            <div className="flex flex-col gap-2.5">
              <Input
                value={editName}
                onChange={(e) => seteditName(e.target.value)}
                placeholder="Name"
              />
              <Input
                value={editSena}
                onChange={(e) => seteditSena(e.target.value)}
                placeholder="Sena"
              />
              <Input
                value={editImg}
                onChange={(e) => seteditImg(e.target.value)}
                placeholder="Img Url"
              />
              <select
                value={editStatus}
                onChange={(e) => seteditStatus(e.target.value)}
                className="border border-gray-200 p-1 rounded hover:border-blue-400 outline-none"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </Modal>

          <div>
            <article className="lg:flex flex-wrap gap-5 space-y-4">
              {data
                .filter((el) =>
                  el.name.toLowerCase().includes(search.toLowerCase())
                )
                .filter((el) => el.status.toString().includes(status))
                .map((e) => (
                  <div
                    key={e.id}
                    className="bg-white lg:w-3/10 p-2.5 rounded-2xl relative flex flex-col justify-between"
                  >
                    <div className="relative">
                      <p
                        className={`absolute z-5 top-1 left-1 bg-white px-5 rounded-2xl font-semibold ${
                          e.status ? "text-[#3284FF]" : "text-red-500"
                        }`}
                      >
                        {e.status ? "Active" : "Inactive"}
                      </p>
                      <img className="rounded" src={e.img} alt="" />
                      <p
                        className={`text-xl  font-semibold absolute -mt-6 bg-white px-2 rounded-tr-2xl ${
                          e.status ? "text-[#3284FF]" : "text-red-500"
                        }`}
                      >
                        {e.sena}
                      </p>
                      <p className="py-3 text-[#070E18] text-[14px] font-semibold">
                        {e.name}
                      </p>
                    </div>

                    <div>
                      <p className="text-[11px] text-[#7992B2]">
                        {t("Home.54")}
                      </p>
                      <p className="text-[#4D5F7D] text-[14px] font-semibold">
                        {t("Home.55")}
                      </p>

                      <p className="text-[11px] text-[#7992B2] pt-3">
                        {t("Home.56")}
                      </p>
                      <p className="text-[#4D5F7D] text-[14px] font-semibold">
                        {t("Home.57")}
                      </p>

                      <div className="flex items-center justify-between gap-2.5">
                        <Link to={`/info/${e.id}`}>
                          <Button
                            variant="solid"
                            color="blue"
                            className="bg-blue-500 px-4 rounded text-white my-2.5"
                          >
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
                                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                              />
                            </svg>
                          </Button>
                        </Link>

                        <Button
                          variant="solid"
                          color="blue"
                          onClick={() => delUser(e.id)}
                          className="bg-blue-500 px-4 rounded text-white my-2.5"
                        >
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
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </Button>

                        <Button
                          variant="solid"
                          color="blue"
                          onClick={() => openeditModal(e)}
                          className="bg-blue-500 px-4 rounded text-white my-2.5"
                        >
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
                              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                            />
                          </svg>
                        </Button>

                        <input
                          className="w-5 h-5"
                          type="checkbox"
                          checked={e.status}
                          onChange={() => changeStatus(e)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
            </article>
            <Button className="w-[95%] my-10 " color="blue" variant="outlined">
              {t("Home.58")}
            </Button>
          </div>
        </div>
      </section>

      <section>
        <p className="text-[30px] text-[#070E18] font-semibold ">
          {t("Home.59")}
        </p>
        <article className="py-5 lg:flex gap-5 space-y-5">
          <div className="bg-[#0080FF] lg:w-1/3 rounded-2xl pt-5 px-5 ">
            <p className="text-[25px] text-white font-semibold w-3/4 ">
              {t("Home.60")}
            </p>
            <img className="w-4/5 m-auto" src={img4} alt="" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 lg:w-2/3 gap-5">
            <div className="bg-white rounded-2xl flex flex-col justify-between p-5 shadow-2xl">
              <div className="flex items-center gap-2.5">
                <img src={img5} alt="" />
                <p className="text-[#0080FF] text-2xl  lg:text-[45px]">№1</p>
              </div>
              <p className="pt-10">{t("Home.61")}</p>
            </div>

            <div className="bg-white rounded-2xl flex flex-col justify-between p-5 shadow-2xl">
              <div className="flex items-center gap-2.5">
                <img src={img6} alt="" />
                <p className="text-[#0080FF] text-2xl  lg:text-[45px]">35+</p>
              </div>
              <p className="pt-10">{t("Home.62")}</p>
            </div>

            <div className="bg-white rounded-2xl flex flex-col justify-between p-5 shadow-2xl">
              <div className="flex items-center gap-2.5">
                <img src={img7} alt="" />
                <p className="text-[#0080FF] text-2xl  lg:text-[45px]">
                  1 000+
                </p>
              </div>
              <p className="pt-10">{t("Home.63")}</p>
            </div>

            <div className="bg-white rounded-2xl flex flex-col justify-between p-5 shadow-2xl">
              <div className="flex items-center gap-2.5">
                <img src={img8} alt="" />
                <p className="text-[#0080FF] text-2xl  lg:text-[45px]">
                  Online
                </p>
              </div>
              <p className="pt-10">{t("Home.64")}</p>
            </div>
          </div>
        </article>
      </section>

      <section className="py-10">
        <p className="text-[30px] text-[#070E18] font-semibold pb-10">
          {t("Home.65")}
        </p>

        <div className="bg-[#0080FF] my-10 rounded-2xl px-2.5">
          <div className=" lg:flex items-center">
            <div className="lg:w-2/4 h-[20vh] relative">
              <img
                className="absolute -bottom-10 lg:-bottom-36  w-9/10"
                src={img9}
                alt=""
              />
            </div>

            <div className="lg:w-2/5 py-10 text-white space-y-5">
              <p className="text-[32px] font-semibold">{t("Home.66")}</p>
              <p className="text-[12px]">{t("Home.67")}</p>
              <p className="text-[12px]">{t("Home.68")}</p>

              <div className="flex px-2.5 lg:flex-row flex-col gap-3">
                <Button color="" variant="solid">
                  {t("Home.69")}
                </Button>
                <button className="border border-white rounded py-0.5 px-5">
                  {t("Home.70")}
                </button>
              </div>
            </div>
          </div>

          <div className=" text-white flex items-center justify-end gap-10 pb-6 pr-10">
            <p>1 - 2</p>
            <button className="flex items-center px-2.5 py-1.5 rounded-2xl bg-[#0063E5] text-white gap-5">
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
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>

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
            </button>
          </div>
        </div>
      </section>

      <section className="flex lg:flex-row flex-col justify-between space-y-5">
        <article className="lg:w-7/10 flex lg:flex-row flex-col lg:items-center justify-between flex-wrap gap-5 space-y-5">
          <div className="lg:w-1/4">
            <p className="font-semibold text-[30px] w-2/6 leading-[30px]">
              {t("Home.71")}
            </p>{" "}
          </div>

          <p className="text-[80px] text-[#0080FF] leading-[30px]">№1</p>

          <div className="lg:w-2/7">
            <p className="text-[#4D5F7D] text-[15px]">{t("Home.73")}</p>
            <p className="text-[#0080FF] text-[15px]">{t("Home.74")}</p>
          </div>

          <div className="lg:w-[48%] p-5 text-white text-[12px] bg-[#0080FF] h-[18vh] lg:h-[30vh] rounded-2xl flex justify-between flex-col items-start">
            <p className="w-3/4">{t("Home.75")}</p>
            <button className="font-bold  border rounded-3xl px-6 py-1.5 flex items-center gap-5 ">
              {t("Home.76")}
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
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
          <div className="lg:w-[48%] p-5 text-white text-[12px] bg-[#0080FF] h-[18vh] lg:h-[30vh] rounded-2xl flex justify-between flex-col items-start">
            <p className="w-3/4">{t("Home.75")}</p>
            <button className="font-bold  border rounded-3xl px-6 py-1.5 flex items-center gap-5 ">
              {t("Home.76")}
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
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </article>

        <div className="lg:w-[28%] bg-white rounded-2xl p-5 ">
          <p className="font-bold text-center text-xl ">{t("Home.72")}</p>

          <form className="flex flex-col gap-3 py-2.5">
            <Input placeholder={t("Home.77")} />
            <Input placeholder={t("Home.78")} />
            <Input placeholder={t("Home.79")} />
            <Button color="blue" variant="solid">
              {t("Home.80")}
            </Button>
          </form>

          <p className="text-[#A5AFB8] text-[10px] text-center">
            {t("Home.81")}{" "}
            <span className="text-[#0080FF]">{t("Home.82")}</span>
          </p>
        </div>
      </section>

      <section className="bg-white rounded-2xl my-10 p-5 lg:p-10 lg:flex space-y-5">
        <div className="lg:w-2/5 ">
          <p className="font-semibold text-3xl">{t("Home.83")}</p>
          <img className="lg:w-4/5 mx-auto mt-20" src={img10} alt="" />
        </div>

        <article className="lg:w-7/10 grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className=" p-5 text-black lg:h-[25vh] bg-[#F0F4FA] rounded-2xl flex justify-between flex-col items-start">
            <p className="font-semibold text-[16px]">{t("Home.84")}</p>
            <p className="text-[11px] text-[#4D5F7D] w-">{t("Home.85")}</p>
          </div>

          <div className=" p-5 text-black lg:h-[25vh] bg-[#F0F4FA] rounded-2xl flex justify-between flex-col items-start">
            <p className="font-semibold text-[16px]">{t("Home.86")}</p>
            <p className="text-[11px] text-[#4D5F7D] w-">{t("Home.87")}</p>
          </div>

          <div className=" p-5 text-black lg:h-[25vh] bg-[#F0F4FA] rounded-2xl flex justify-between flex-col items-start">
            <p className="font-semibold text-[16px]">{t("Home.88")}</p>
            <p className="text-[11px] text-[#4D5F7D] w-">{t("Home.89")}</p>
          </div>

          <div className=" p-5 text-black lg:h-[25vh] bg-[#F0F4FA] rounded-2xl flex justify-between flex-col items-start">
            <p className="font-semibold text-[16px]">{t("Home.90")}</p>
            <p className="text-[11px] text-[#4D5F7D] w-">{t("Home.91")}</p>
          </div>
          <div className=" p-5 text-black lg:h-[25vh] bg-[#F0F4FA] rounded-2xl flex justify-between flex-col items-start">
            <p className="font-semibold text-[16px]">{t("Home.92")}</p>
            <p className="text-[11px] text-[#4D5F7D] w-">{t("Home.93")}</p>
          </div>
          <div className=" p-5 text-black lg:h-[25vh] bg-[#F0F4FA] rounded-2xl flex justify-between flex-col items-start">
            <p className="font-semibold text-[16px]">{t("Home.94")}</p>
            <p className="text-[11px] text-[#4D5F7D] w-">{t("Home.95")}</p>
          </div>
        </article>
      </section>

      <section className="flex lg:flex-row flex-col-reverse gap-5 py-10">
        <div className="lg:w-3/5 grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="shadow-xl p-5 text-black h-[25vh] bg-[#FFFFFF] rounded-2xl flex justify-between flex-col items-start">
            <p className="font-semibold text-3xl ">{t("Home.96")}</p>
            <Button variant="solid" color="blue">
              {t("Home.100")}
            </Button>
          </div>

          <div className="shadow-xl p-5 text-black h-[25vh] bg-[#FFFFFF] rounded-2xl flex justify-between flex-col items-start">
            <img className="lg:w-2/10" src={img11} alt="" />
            <p className="text-[15px] lg:text-[12px] text-[#4D5F7D]">
              {t("Home.97")}
            </p>
          </div>

          <div className="shadow-xl p-5 text-black h-[25vh] bg-[#FFFFFF] rounded-2xl flex justify-between flex-col items-start">
            <img className="lg:w-2/10" src={img12} alt="" />
            <p className="text-[15px] lg:text-[12px] text-[#4D5F7D]">
              {t("Home.98")}
            </p>
          </div>

          <div className="shadow-xl p-5 text-black h-[25vh] bg-[#FFFFFF] rounded-2xl flex justify-between flex-col items-start">
            <img className="lg:w-2/10" src={img13} alt="" />
            <p className="text-[15px] lg:text-[12px] text-[#4D5F7D]">
              {t("Home.99")}
            </p>
          </div>
        </div>

        <img className="lg:w-2/5" src={img14} alt="" />
      </section>

      <section className="my-10 p-5 flex flex-col lg:flex-row justify-evenly rounded-2xl bg-[#FFFFFF] relative lg:pb-5 pb-72">
        <div className="lg:w-2/4 relative flex justify-center ">
          <p className="font-semibold text-2xl lg:text-[35px] lg:w-2/3 ">
            {t("Home.101")}
          </p>
        </div>
        <p className="text-[#0080FF] text-[18px] font-semibold absolute z-5 w-1/10 leading-4 top-[65%] lg:top-36 right-[50%] -rotate-12">
          {t("Home.104")}
        </p>
        <img
          className="absolute w-2/3 lg:w-1/5 -bottom-0 left-[20%] lg:left-[22%] "
          src={img15}
          alt=""
        />

        <img
          className="lg:block hidden absolute w-1/20 left-5 bottom-5"
          src={img2}
          alt=""
        />
        <img
          className="lg:block hidden absolute w-1/20  right-5 top-5 "
          src={img3}
          alt=""
        />

        <div className="lg:w-[30%] bg-white rounded-2xl py-5 lg:p-5 ">
          <p className="font-bold  text-[18px] text-[#4D5F7D] ">
            {t("Home.102")}
          </p>

          <form className="flex flex-col gap-3 py-2.5">
            <Input placeholder={t("Home.77")} />
            <Input placeholder={t("Home.78")} />
            <Input placeholder={t("Home.79")} />
            <Button color="blue" variant="solid">
              {t("Home.103")}
            </Button>
          </form>
          <p className="text-[#A5AFB8] text-[10px] ">
            {t("Home.81")}{" "}
            <span className="text-[#0080FF]">{t("Home.82")}</span>
          </p>
        </div>
      </section>

      <section className="py-5 h-[100vh]">
        <p className="font-semibold text-[35px] w-2/3 ">{t("Home.105")}</p>

        <div className="flex gap-5 overflow-x-scroll scrollbar-hidden py-10 absolute">
          <img
            className="basis-auto grow-0 shrink-0 w-9/10 lg:w-2/10"
            src={img16}
            alt=""
          />
          <img
            className="basis-auto grow-0 shrink-0 w-9/10 lg:w-2/10"
            src={img17}
            alt=""
          />
          <img
            className="basis-auto grow-0 shrink-0 w-9/10 lg:w-2/10"
            src={img18}
            alt=""
          />
          <img
            className="basis-auto grow-0 shrink-0 w-9/10 lg:w-2/10"
            src={img19}
            alt=""
          />
          <img
            className="basis-auto grow-0 shrink-0 w-9/10 lg:w-2/10"
            src={img16}
            alt=""
          />
          <img
            className="basis-auto grow-0 shrink-0 w-9/10 lg:w-2/10"
            src={img17}
            alt=""
          />
          <img
            className="basis-auto grow-0 shrink-0 w-9/10 lg:w-2/10"
            src={img18}
            alt=""
          />
          <img
            className="basis-auto grow-0 shrink-0 w-9/10 lg:w-2/10"
            src={img19}
            alt=""
          />
          <img
            className="basis-auto grow-0 shrink-0 w-9/10 lg:w-2/10"
            src={img16}
            alt=""
          />
        </div>
      </section>

      <section className="py-5 lg:flex items-start gap-5 pb-10 space-y-5">
        <article className="lg:w-2/4 bg-white rounded-2xl p-5">
          <p className="font-semibold text-[25px] ">{t("Home.106")}</p>

          <div className="py-5 space-y-2.5">
            {savolJavob.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left text-[14px] py-2 border-b border-[#E3EAF7] font-semibold flex items-center justify-between hover:text-blue-500"
                >
                  {item.question}
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
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </article>

        <article className="lg:w-2/4 bg-white rounded-2xl p-5 relative lg:pb-5 pb-42">
          <p className="font-semibold text-[25px] lg:w-2/4">{t("Home.114")}</p>
          <p className="font-semibold text-[#7992B2] pb-10 text-[12px] lg:w-2/4">
            {t("Home.115")}
          </p>

          <img
            className="absolute lg:top-0 right-0 w-2/4 hidden  lg:block"
            src={img20}
            alt=""
          />
          <img
            className="absolute bottom-0 right-0 w-2/4 lg:hidden block"
            src={img201}
            alt=""
          />

          <form className="flex flex-col gap-3 py-2.5 lg:w-2/4">
            <Input placeholder={t("Home.77")} />
            <div className="flex items-center gap-1 border border-gray-300 py-1 px-2 rounded">
              <img src={img21} alt="" />
              <input
                className=" outline-none "
                placeholder={` +7 999 999 99 99`}
              />
            </div>
            <Button color="blue" variant="solid">
              {t("Home.103")}
            </Button>
          </form>

          <p className="text-[#A5AFB8] text-[10px] w-2/4 ">
            {t("Home.81")}
            <span className="text-[#0080FF]">{t("Home.82")}</span>
          </p>
        </article>
      </section>
    </div>
  );
};

export default Home;
