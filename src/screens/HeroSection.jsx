import { Button } from "../components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative z-[9999] w-full min-h-screen bg-[url(https://c.animaapp.com/mc1s1pc84dIubF/img/group-4113.svg)] bg-no-repeat bg-center bg-[length:3800%_130%]">
      <div className="flex justify-center px-4 sm:px-6">
        <div className="relative w-full max-w-[620px] py-12 sm:py-20 flex flex-col items-center justify-center text-center">
          <img
            className="absolute w-[180px] sm:w-[220px] md:w-[251px] h-auto top-[100px] sm:top-[110px] left-1/2 -translate-x-1/2"
            alt="Group"
            src="https://c.animaapp.com/mc1s1pc84dIubF/img/group-3565.svg"
          />

          <div className="flex flex-col items-center space-y-4">
            <h1 className="font-semibold text-white text-2xl sm:text-3xl md:text-[40px] leading-snug whitespace-nowrap [direction:rtl] font-cairo">
              الاستضافات المشتركة
            </h1>

            <p className="font-light text-white text-sm sm:text-base leading-relaxed [direction:rtl] font-cairo max-w-[90vw] sm:max-w-[620px]">
              كلام و وصف للاستضافات المشتركة كلام و وصف للاستضافات المشتركة كلام
              و وصف للاستضافات&nbsp;&nbsp;كلام و&nbsp;&nbsp; المشتركة كلام و وصف
              للاستضافات المشتركة
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-6 sm:mt-8">
            <Button
              variant="default"
              className="h-[38px] sm:h-[42px] w-[120px] sm:w-[140px] rounded-md bg-white text-[#092346] font-semibold text-sm font-cairo"
            >
              انشاء حساب
            </Button>
            <Button
              variant="outline"
              className="h-[38px] sm:h-[42px] w-[120px] sm:w-[140px] rounded-md border-white text-white font-semibold text-sm font-cairo"
            >
              عرض الاسعار
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
