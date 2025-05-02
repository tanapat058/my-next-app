'use client'
import FlooTer from "@/components/FlooTer";
import MenuBar from "@/components/MenuBar";
import {useState} from "react";

export default function IndexPage() {
  const[isLightOn,setIsLighton] = useState(false)


  return(
   <div>

    <div>
      <MenuBar></MenuBar>
    </div>

  <div className="section1-box">
    <h1 className="section1-name tagesschrift-regular">Thanapat</h1>
    <p className="section1-meta-data tagesschrift-regular">
      AONGLEE</p>
  
    <p className="text krub-regular">เรื่องเรียนผมเป็นรอง เเต่คารมผมเป็นต่อ<br /></p>
  </div>
  <div className="section2-box">
    <a className="section2-contact-link-facebook cal-sans-regular" href>Facebook</a>
    <a className="section2-contact-link-ig cal-sans-regular" href>Instagram</a>
    <a className="section2-contact-link-line cal-sans-regular" href>Github</a>
  </div>
  <div className="section3-box">
    <div className="section2-box-a">
      <h1>งานอดิเรก</h1>
      <p>ไถโทรศัพท์ไปมา</p>
      <p>ดูการ์ตูน อนิเมะ</p>
    </div>
    <div className="section2-box-b">
      <h1>ชีวิตประจำวัน</h1>
      <p>นอนไทม์โซนเมกา</p>
      <p>เล่นเกมส์</p>
      <p>ดูNetflix</p>
      </div>
      
    
    
      </div>
      <div className="flex justify-around bg-amber-200 p-4 text-3xl">
        <h1 className="text-center">จัดทำโดย นาย ธนภัทร สกุลโชติพิภัทร์</h1>
      </div>
  </div>


)
}