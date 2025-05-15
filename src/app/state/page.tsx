"use client";
import FooTer from "@/components/Footer";
import MenuBar from "@/components/MenuBar";
import { useState } from "react";

export default function StatePage() {
  const [isLightOn, setIsLightOn] = useState(false);
  const [animal, setAnimal] = useState("");
   const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col min-h-screen">
      {/* เมนูด้านบน */}
      <MenuBar page={"เรียนรู้ state"} />

      {/* เนื้อหากลาง */}
      <main className="flex-grow section1-box">
        <div className="p-4">
          <h1 className="text-center text-4xl">Switch ไฟ</h1>
          <p className="text-center text-xl">เรียนรู้การ toggle state</p>
          <div className="flex justify-center mt-4">
            <button
              className="bg-red-600 p-4 rounded-2xl text-3xl"
              onClick={() => setIsLightOn((prev) => !prev)}
            >
              เปิด / ปิด ไฟ
            </button>
          </div>
          <div className="flex justify-center mt-4">
             <div className="p-4 rounded-xl bg-black shadow-md">
    
            {isLightOn ? (
              <img
                src="https://www.w3schools.com/js/pic_bulbon.gif"
                alt="ไฟเปิด"
              />
            ) : (
              <img
                src="https://www.w3schools.com/js/pic_bulboff.gif"
                alt="ไฟปิด"
              />
            )}
          </div>
        </div>
        </div>

        <div className="p-4">
          <h2 className="text-center text-3xl font-bold">เพิ่ม / ลด เลข</h2>
            <h2 className="text-5xl font-bold text-center mt-5">{count}</h2>

        <div className="flex justify-center gap-4 mt-5 flex-wrap">
          <button
            className="p-4 font-bold text-2xl bg-green-600 text-white rounded-xl hover:bg-green-500"
            onClick={() => setCount(count + 1)}
          >
            เพิ่ม +1
          </button>
          <button
            className="p-4 font-bold text-2xl bg-red-600 text-white rounded-xl hover:bg-red-500"
            onClick={() => setCount(count - 1)}
          >
            ลด -1
          </button>
        </div>
          <p className="text-center text-3xl">เรียนรู้การเปลียน State</p>

          <h2 className="text-5xl font-bold text-center mt-5">{animal}</h2>
          <div className="flex justify-center gap-4 mt-5 flex-wrap">
            {["แมว", "หมา", "จิงโจ้", "หมูเด้ง"].map((item) => (
              <button
                key={item}
                className="p-4 font-bold text-2xl bg-yellow-600 rounded-xl"
                onClick={() => setAnimal(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </main>

      {/* Footer ชิดล่างหน้าจอเสมอ */}
      <FooTer />
    </div>
  );
}
