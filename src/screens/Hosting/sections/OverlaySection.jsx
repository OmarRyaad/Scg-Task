import { CardContent } from "../../../components/UI/Card";

export const OverlaySection = () => {
  return (
    <section className="relative w-full h-[552px]">
      <div className="relative h-full w-full">
        <div className="relative w-full h-full overflow-hidden">
          <div className="relative h-full">
            <img
              className="absolute w-[407px] h-[552px] top-0 right-0"
              alt="Decorative background element"
              src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/group-2530.png"
            />

            <img
              className="absolute w-[407px] h-[552px] top-0 left-0"
              alt="Decorative background element"
              src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/group-2318.png"
            />
          </div>
        </div>

        <CardContent className="absolute top-[62px] left-1/2 -translate-x-1/2 w-[501px] h-[211px] border-none shadow-none">
          <CardContent className="p-0">
            <div className="flex flex-col items-center">
              <h2 className="text-[#2b1f51] text-[40px] text-center [direction:rtl] [font-family:'Cairo',Helvetica] font-semibold tracking-[0] leading-[normal] whitespace-nowrap">
                احصائيات sa.
              </h2>

              <p className="mt-2 font-light text-[#2b1f51] text-xs text-center leading-[normal] whitespace-nowrap [direction:rtl] [font-family:'Cairo',Helvetica] tracking-[0]">
                الق نضرة على الأرقام:
              </p>

              <div className="mt-5 relative w-[493px] h-[140px]">
                <div className="top-0 left-0 bg-[linear-gradient(180deg,rgba(232,242,252,1)_47%,rgba(255,255,255,1)_83%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-bold text-transparent text-[200px] text-center leading-[normal] whitespace-nowrap absolute [font-family:'Cairo',Helvetica] tracking-[0]">
                  1.800
                </div>

                <div className="absolute top-[117px] left-1/2 -translate-x-1/2 font-semibold text-black text-xl text-center leading-[normal] whitespace-nowrap [direction:rtl] [font-family:'Cairo',Helvetica] tracking-[0]">
                  نفتخر بتسجيلنا لأكثر من 1,800 اسم نطاق!
                </div>
              </div>
            </div>
          </CardContent>
        </CardContent>
      </div>
    </section>
  );
};
