import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Search } from "../components/Search";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export function Home() {
  const [showButton, setShowButton] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showData, setShowData] = useState([]);
  const data = `https://api.rawg.io/api/games?key=${
    import.meta.env.VITE_API_KEY
  }`;

  useEffect(() => {
    axios.get(data).then((response) => {
      setShowData(response.data.results);
    });
  });

  return (
    <>
      {/* Navbar */}
      <nav className="bg-blue-700">
        <div className="pb-[15px] pt-[15px] mx-auto container px-2 lg:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                onClick={() =>
                  showButton ? setShowButton(false) : setShowButton(true)
                }
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="block h-8 w-auto lg:hidden"
                  src="./src/assets/logo.png"
                  alt="Your Company"
                />
                <img
                  className="hidden h-8 w-auto lg:block"
                  src="./src/assets/logo.png"
                  alt="Your Company"
                />
              </div>

              <div className="hidden lg:ml-6 lg:block">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-blue-500 uppercase text-[18px] border-4 mb-[-1.40rem] border-blue-700 border-b-blue-500 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Loja
                  </a>
                  <a
                    href="#"
                    className="text-white uppercase text-[18px] border-4 hover:mb-[-1.40rem] border border-blue-700 hover:border-b-blue-500 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    biblioteca
                  </a>
                  <a
                    href="#"
                    className="text-white uppercase text-[18px] border-4 hover:mb-[-1.40rem] border border-blue-700 hover:border-b-blue-500 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    comunidade
                  </a>
                  <a
                    href="#"
                    className="text-white uppercase text-[18px] border-4 hover:mb-[-1.40rem] border border-blue-700 hover:border-b-blue-500 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    ajuda
                  </a>
                </div>
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0">
              <button
                type="button"
                className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>

              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                    onClick={() =>
                      showNotification
                        ? setShowNotification(false)
                        : setShowNotification(true)
                    }
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://github.com/savio-2-lopes.png"
                      alt=""
                    />
                  </button>
                </div>
                {showNotification && (
                  <div
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                  >
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      id="user-menu-item-0"
                    >
                      Your Profile
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      id="user-menu-item-1"
                    >
                      Settings
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      id="user-menu-item-2"
                    >
                      Sign out
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {showButton && (
          <div className="lg:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pt-2 pb-3">
              <a
                href="#"
                className="text-blue-500 uppercase text-white block px-3 py-2 rounded-md text-base font-medium"
                aria-current="page"
              >
                Loja
              </a>

              <a
                href="#"
                className="text-white uppercase hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
              >
                biblioteca
              </a>

              <a
                href="#"
                className="text-white uppercase hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
              >
                comunidade
              </a>

              <a
                href="#"
                className="text-white uppercase hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
              >
                ajuda
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Header */}
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {showData.map((element, index) => (
          <SwiperSlide key={index}>
            <div
              className="min-h-[70vh] flex"
              style={{
                background: `linear-gradient(266.12deg, rgba(14, 19, 30, 0) 0%, rgba(14, 19, 30, 0.7) 47.21%, rgba(14, 19, 30, 0.7) 86.62%, rgba(14, 19, 30, 0) 100%), url(${element["background_image"]})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="container mx-auto flex items-center">
                <div className="max-w-[360px]">
                  <img
                    src="./src/assets/2.png"
                    className="w-[240px] h-[90.24px]"
                    alt="Logo Game"
                  />
                  <p className="mt-[32.76px] text-[18px] font-[500] text-white leading-relaxed">
                    Estados Unidos, 1899. O fim da era do velho oeste começou, e
                    as autoridades estão caçando as últimas gangues de fora da
                    lei que restam. Os que não se rendem, nem sucumbem, são
                    mortos.
                  </p>

                  <Link to={element["slug"]}>
                    <button className="mt-[32px] w-[229px] h-[55px] bg-blue-400 hover:opacity-90 uppercase py-4 rounded font-bold text-sm transition-colors disabled:opacity-50">
                      Compre Agora
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Menu */}
      <section className="container mx-auto bg-blue-700 mt-10">
        <div className="pb-[10px] pt-[10px] flex">
          <div className="relative flex h-16 items-center">
            <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                onClick={() =>
                  showMenu ? setShowMenu(false) : setShowMenu(true)
                }
                aria-expanded="false"
              >
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex items-center justify-center lg:items-stretch lg:justify-start">
              <div className="hidden lg:ml-6 lg:block">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-blue-500 uppercase text-[18px] border-4 mb-[-1.40rem] border border-blue-700 border-b-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                    aria-current="page"
                  >
                    Novidades e tendências
                  </a>
                  <a
                    href="#"
                    className="text-white uppercase text-[18px] border-4 hover:mb-[-1.40rem] border border-blue-700 hover:border-b-blue-500 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    categorias
                  </a>
                  <a
                    href="#"
                    className="text-white uppercase text-[18px] border-4 hover:mb-[-1.40rem] border border-blue-700 hover:border-b-blue-500 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    loja de pontos
                  </a>
                  <a
                    href="#"
                    className="text-white uppercase text-[18px] border-4 hover:mb-[-1.40rem] border border-blue-700 hover:border-b-blue-500 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    notícias
                  </a>
                  <a
                    href="#"
                    className="text-white uppercase text-[18px] border-4 hover:mb-[-1.40rem] border border-blue-700 hover:border-b-blue-500 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    laboratório
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {showMenu && (
          <div className="lg:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pt-2 pb-3">
              <a
                href="#"
                className="text-white uppercase hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
              >
                Novidades e tendências
              </a>

              <a
                href="#"
                className="text-white uppercase hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
              >
                categorias
              </a>

              <a
                href="#"
                className="text-white uppercase hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
              >
                loja de pontos
              </a>

              <a
                href="#"
                className="text-white uppercase hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
              >
                notícias
              </a>

              <a
                href="#"
                className="text-white uppercase hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
              >
                laboratório
              </a>
            </div>
          </div>
        )}
      </section>

      {/* Search */}
      <div className="mt-10">
        <Search />
      </div>

      {/* Gallery */}
      <div className="container mx-auto mt-10 mb-10">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          modules={[Pagination]}
          className="mySwiper"
        >
          {showData.map((element, index) => (
            <SwiperSlide key={index}>
              <Link to={element["slug"]}>
                <div
                  className="flex items-end justify-center"
                  style={{
                    background: `linear-gradient(180deg, rgba(12, 12, 12, 0) 51.56%, #0C0C0C 100%), url(${element["background_image"]})`,
                    backgroundRepeat: "no-repeat",
                    width: "280px",
                    height: "450px",
                  }}
                >
                  <img className="mb-10" src="./src/assets/lo.png" alt="" />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Footer />
    </>
  );
}
