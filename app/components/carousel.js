'use client';
import { useEffect } from "react";
import Image from "next/image";

export default function Carousel() {

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <div 
      id="carouselExample" 
      className="carousel slide"
      style={{
        border: '5px solid #500409',
        borderRadius: '10px',
        overflow: 'hidden'
      }}
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Image 
            src="/images/sliders/slider-01.png" 
            className="d-block w-100 carousel-image" 
            alt="..." 
            width={1920} 
            height={960} 
          />
        </div>
        <div className="carousel-item">
          <Image 
            src="/images/sliders/slider-02.png" 
            className="d-block w-100 carousel-image" 
            alt="..." 
            width={1920} 
            height={960} 
          />
        </div>
        <div className="carousel-item">
          <Image 
            src="/images/sliders/slider-03.png" 
            className="d-block w-100 carousel-image" 
            alt="..." 
            width={1920} 
            height={960} 
          />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>

      <style jsx global>{`
        .carousel-image {
          height: 400px; /* ปรับตามที่ต้องการ หรือใช้ media query ด้านล่าง */
          object-fit: cover;
        }

        @media (max-width: 768px) {
          .carousel-image {
            height: 250px; /* สำหรับหน้าจอแนวตั้งหรือจอเล็ก */
          }
        }
      `}</style>
    </div>
  );
}
