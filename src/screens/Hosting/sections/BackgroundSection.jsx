export const BackgroundSection = () => {
  return (
    <section className="relative w-full h-auto bg-[url('https://c.animaapp.com/mc0m4hp3VjWYPs/img/clip-path-group-2.png')] bg-cover bg-center py-10 md:py-16">
      <div className="container mx-auto flex flex-col items-center justify-between h-full px-4">
        {/* Logo and Graphic Row */}
        <div className="flex justify-between items-center w-full">
          <img
            className="w-[80px] h-auto md:w-[108px] object-cover"
            alt="Sa logo"
            src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/sa1-1-1.png"
          />

          {/* Middle Graphic */}
          <div className="relative w-[120px] h-[110px] md:w-[186px] md:h-[168px]">
            <div className="absolute w-full h-full top-0 left-0">
              <div className="absolute w-[150px] h-[123px] top-[20%] left-[50%] -translate-x-1/2">
                <img
                  className="absolute w-[150px] h-[92px] top-[31px] left-0"
                  alt="Path"
                  src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/path-16694.svg"
                />
                <img
                  className="absolute w-[150px] h-[52px] top-[71px] left-0"
                  alt="Path"
                  src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/path-16695.svg"
                />
                <img
                  className="absolute w-7 h-[77px] top-0 left-[51px]"
                  alt="Group"
                  src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/group-3514.png"
                />
              </div>
              <img
                className="absolute w-[25px] h-[25px] top-0 left-[25px]"
                alt="Path"
                src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/path-16700.svg"
              />
              <img
                className="absolute w-[33px] h-1 top-[67px] left-0"
                alt="Path"
                src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/path-16703.svg"
              />
              <img
                className="absolute w-[25px] h-[25px] top-0 right-[25px]"
                alt="Path"
                src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/path-16702.svg"
              />
              <img
                className="absolute w-[33px] h-1 top-[67px] right-[0px]"
                alt="Path"
                src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/path-16703.svg"
              />
              <img
                className="absolute w-1 h-[34px] top-0 left-[50%] -translate-x-1/2"
                alt="Path"
                src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/path-16699.svg"
              />
            </div>
          </div>

          <img
            className="w-[80px] h-auto md:w-[108px] object-cover"
            alt="Sa logo"
            src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/sa1-1-1.png"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-center mt-6 md:mt-auto text-center">
          <h2 className="font-['Cairo',Helvetica] mt-6 font-semibold text-[#2b1f51] text-lg md:text-2xl tracking-tight leading-normal [direction:rtl]">
            احصل على اسم نطاق sa. من المسجل رقم #1
          </h2>
          <p className="font-['Cairo',Helvetica] font-normal text-[#2b1f5180] text-sm md:text-base mt-4 leading-relaxed [direction:rtl]">
            الآلاف من أسماء نطاق sa. تم تسجيلها بالفعل
            <br />
            سارع بالتسجيل واحجز اسم نطاقك الفريد sa. الآن مع عدة امتدادات متنوعة
            متوفرة
          </p>
        </div>
      </div>
    </section>
  );
};
