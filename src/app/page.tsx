"use client";
import FooTer from "@/components/Footer";
import MenuBar from "@/components/MenuBar";
import ImageProfile from "@/components/imageprofile";
import { useState } from "react";

export default function IndexPage() {
  const [isLightOn, setIsLighton] = useState(false);

  return (
     <div className="flex flex-col min-h-screen">
    
      
        
        <MenuBar page="หน้าหลัก" />
        <main className="flex-grow section1-box">
        
      

      <div className="section1-box" >
        <h1 >Thanapat Sakoonchotpipat</h1>
        <h2>เรียนโค้ดทั้งวันหัวจะระเบิดเเล้วววว!!!!</h2>
        <p>AONGLEE BPL GANG</p>

        <p className="section1-box">
          เรื่องเรียนผมเป็นรอง เเต่คารมผมเป็นต่อ
          <br />
        </p>

        <ImageProfile
          src="https://scontent.fbkk7-3.fna.fbcdn.net/v/t39.30808-6/483693880_2556194418054026_6640069310527153493_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=vbNBTrepKHkQ7kNvwFO_CdE&_nc_oc=AdlBOmiPu7FSjcPpbPzcqd0K9a7hv5EDgH0W3UyaKYPwifqE1u1uMonoqQL8w2V-AU8&_nc_zt=23&_nc_ht=scontent.fbkk7-3.fna&_nc_gid=W23dlHV-5L91h9XN5D3cFQ&oh=00_AfJpase_pz8nKhaY46Ss3sm-oODoeyAOrZ_LRzCQJP4m7w&oe=682BC63E"
        ></ImageProfile>
        <div className="flex gap-4 justify-center mt-4 pd-4">
          <a
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
            href="https://www.facebook.com/share/196CDNhfuU/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>

          <a
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
            href="https://www.instagram.com/axng_lee?igsh=bWNudHFsN0DczNlN6"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>

          <a
            className="bg-gray-800 hover:bg-black text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
            href="https://github.com/tanapat058"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>

          <a
            className="bg-red-700 hover:bg-black text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
            href="https://www.youtube.com/@AONGLEE_BPL"
            target="_blank"
            rel="noopener noreferrer"
          >
            Youtube
          </a>

        </div>
      </div>
      

      <div className="section3-box">
        <div className="section2-box-a rounded-lg ">
          <h1>งานอดิเรก</h1>
          <p>ไถโทรศัพท์ไปมา</p>
          <p>ดูการ์ตูน อนิเมะ</p>
          <p>ด่าเพื่อนไปวันๆ</p>
        </div>
        <div className="section2-box-b rounded-lg ">
          <h1>ชีวิตประจำวัน</h1>
          <p>นอนไทม์โซนเมกา</p>
          <p>เล่นเกมส์</p>
          <p>ดูNetflix</p>
        </div>
      </div>
    </main>
        <FooTer />
        </div>
        
        
        
        
      
    
  );
}
