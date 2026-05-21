import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (

        
        <div className="min-h-screen w-full grid grid-cols-2 items-center">

            {/*kiri */ }
           <div className="bg-pink-100 min-h-screen flex flex-col items-center justify-center p-8">
             <img
              src="https://www.invofest-harkatnegeri.com/assets/text-image.png"
              alt=""
              className="w-96"
            />

            <p>Invofest (Informatic Vocational festival)</p>
           </div>

            {/*kanan */ }
           <div className="p-6">
            <Outlet />
           </div>
        </div>
    );
}