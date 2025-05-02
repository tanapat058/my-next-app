export default function MenuBar() {
  return (
    <div className="flex justify-around bg-blue-500 p-4 text-3xl">
      <a className="menu-item krub-regular" href="index.html">หน้าหลัก</a>
      <a className="menu-item krub-regular" href="about-me.html">เกี่ยวกับฉัน</a>
      <a className="menu-item krub-regular" href="portfolio.html">ผลงาน</a>
    </div>
  );
}
