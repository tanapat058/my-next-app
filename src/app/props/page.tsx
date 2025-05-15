import FooTer from "@/components/Footer";
import MenuBar from "@/components/MenuBar";

export default function PropsPage(){
    return (
            <div className="flex flex-col min-h-screen ">
            <MenuBar page={"Props"}/>
            <main className="flex-grow section1-box">
            
            </main>
        <FooTer/>
    </div>
    )
}