import Button from "../components/ui/Button";

export default function Beranda() {
    return (
        <div className="container mx-auto">
            <section className="py-20 flex flex-col-reverse md:flex-row items-center gap-10">
                      
            
                      <div className="md:w-1/2 flex flex-col gap-6 text-center md:text-left">
                        <img
                        src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png"
                        alt="Invofest Logo"
                        className="w-[400px] md:w-[500px]"
        />
                        <p className="text-gray-600">
                          Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital. Dengan mengusung tema “Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow ”.
                        </p>
            
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                          <Button label="Daftar Sekarang" variant="primary" />
                          <Button label="Lihat Event" variant="outline" />
                        </div>
                      </div>
            
                      
                      <div className="md:w-1/2 flex justify-center">
                        <img
                          src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
                          alt="Maskot Invofest"
                          className="w-72 md:w-96"
                        />
                      </div>
                    </section>
        </div>
    );
}