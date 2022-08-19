// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination, Scrollbar } from "swiper";

// const banners = [
//   {
//     id: 1,
//     src: "https://theme.hstatic.net/1000340570/1000803520/14/slideshow_4.jpg?v=840",
//     alt: "Home",
//   },
//   {
//     id: 2,
//     src: "https://theme.hstatic.net/1000340570/1000803520/14/slideshow_3.jpg?v=840",
//     alt: "About Us",
//   },
//   {
//     id: 3,
//     src: "https://theme.hstatic.net/1000340570/1000803520/14/slideshow_1.jpg?v=840",
//     alt: "Contact Us",
//   },
// ];

// const SwiperSlider = () => {
//   return (
//     <div className="container">
//       <Swiper
//         modules={[Pagination, Scrollbar]}
//         spaceBetween={50}
//         slidesPerView={1}
//         pagination={{ clickable: true }}
//         scrollbar={{ draggable: true }}
//       >
//         {banners.map((banner) => (
//           <SwiperSlide key={banner.id}>
//             <image
//               src={banner.src}
//               alt={banner.alt}
//               layout="fill"
//               objectFit="cover"
//             ></image>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default SwiperSlider;
