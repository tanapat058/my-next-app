import Link from "next/link";

type MenubarProps ={
  page : string;
}
export default function MenuBar(props:MenubarProps) {
  return (
    <div>
    <div className="flex justify-around p-4 text-3xl font-bold"  style={{ backgroundColor: "#5409DA" }}>

      <Link className="menu-item bold" href="/">
        หน้าหลัก
      </Link>
      <Link className="menu-item bold" href="/state">
        เรียนรู้ State
      </Link>
      <Link className="menu-item bold" href="/props">
        เรียนรู้ Props
      </Link>
      <Link className="menu-item bold" href="/use-effect">
        เรียนรู้ Use_Effect
      </Link>
</div>
    
    <div className="p-4 bg-blue-500">
        <p className="text-2xl font-bold text-center">ตอนนี้ถึงตรงนี้เเล้วนะ {props.page}</p>
      
      

    
    </div>
    </div>

  );
}
