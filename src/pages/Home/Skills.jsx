import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { FaHtml5, FaReact, FaPython, FaGitAlt } from 'react-icons/fa';
import { MdCss } from 'react-icons/md';
import {
  SiCplusplus,
  SiTailwindcss,
  SiDjango,
  SiMysql,
  SiPostman,
} from 'react-icons/si';
import { RiJavascriptFill } from 'react-icons/ri';
import { TbSql } from 'react-icons/tb';
import { BiLogoPostgresql } from 'react-icons/bi';

const Skills = () => {
  return (
    <>
      <p className="flex items-center">
        <FaAngleLeft />
        Skills
        <FaAngleRight />
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center py-8 px-4">
        <div
          className="md:w-1/2"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="text-center md:text-left">
            <p className="text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel unde
              molestias voluptate aspernatur corrupti atque mollitia perferendis
              commodi sit optio.
            </p>
            <ul>
              <li>Web Development</li>
              <li>Web Development</li>
              <li>Web Development</li>
              <li>Web Development</li>
            </ul>
          </div>
        </div>
        <div className="md:w-1/2 md:pl-8">
          <div
            className="flex gap-8 text-5xl "
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <FaHtml5 className="bg-orange-700 rounded-full p-2 text-white" />
            <MdCss className="bg-blue-500 rounded-full p-2 text-white" />
            <SiTailwindcss className="bg-gray-100 rounded-full p-2 text-sky-500" />
            <RiJavascriptFill className="bg-gray-100 rounded-full p-2 text-yellow-600" />
            <FaReact className="bg-gray-100 rounded-full p-2 text-sky-400" />
          </div>
          <div
            className="flex gap-8 text-5xl my-6"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <SiCplusplus className="bg-gray-100 rounded-full p-2 text-sky-900" />
            <FaPython className="bg-green-400 rounded-full p-2" />
            <SiDjango className="bg-green-900 rounded-full p-2 text-white" />
            <img
              src="https://i.ibb.co/2Sqms5q/Django-REST.png"
              alt="REST Framework"
              className="w-12 bg-gray-100 rounded-full p-2"
            />
            <TbSql className="bg-sky-700 rounded-full p-2 text-white" />
          </div>
          <div
            className="flex gap-8 text-5xl"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <SiMysql className="bg-gray-100 rounded-full p-2 text-sky-900" />
            <BiLogoPostgresql className="bg-gray-100 rounded-full p-2 text-sky-900" />
            <FaGitAlt className="bg-gray-100 rounded-full p-2 text-orange-700" />
            <SiPostman className="bg-gray-100 rounded-full p-2 text-orange-700" />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-8 my-6">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-full md:w-1/3 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="w-full md:w-1/3 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="w-full md:w-1/3 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
    </>
  );
};

export default Skills;