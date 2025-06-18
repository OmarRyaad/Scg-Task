import { BackgroundSection } from "./sections/BackgroundSection";
import { CardWrapperSection } from "./sections/CardWrapperSection";
import { ComponentNodeSection } from "./sections/ComponentNodeSection";
import { ContentSection } from "./sections/ContentSection";
import { FeatureListSection } from "./sections/FeatureListSection";
import { MainContentSection } from "./sections/MainContentSection";
import { OverlaySection } from "./sections/OverlaySection";
import { Card, CardContent } from "../../components/UI/Card";
import { RangesIcon } from "../../icons";
import { HeroSection } from "../HeroSection";

export const Hosting = () => {
  const backgroundImages = [
    {
      alt: "Clip path group",
      src: "https://c.animaapp.com/mc0m4hp3VjWYPs/img/clip-path-group.png",
      className: "absolute w-[1440px] h-[969px] top-[54px] left-[35px]",
    },
    {
      alt: "Vector",
      src: "https://c.animaapp.com/mc0m4hp3VjWYPs/img/vector.svg",
      className: "absolute w-[1503px] h-[970px] top-0 left-0",
    },
  ];

  return (
    <div
      className="bg-[#fcfcfc] flex flex-row justify-center w-full sa-container"
      data-model-id="9:63375"
    >
      <div className="bg-[#fcfcfc] w-full max-w-[1440px] relative">
        <div className="relative w-full">
          <div className="relative w-full">
            <div className="relative">
              <div className="relative">
                <div className="relative">
                  <div className="relative w-[1503px] h-[1023px]">
                    {backgroundImages.map((img, index) => (
                      <img
                        key={`bg-img-${index}`}
                        className={`${img.className} z-[0]`}
                        alt={img.alt}
                        src={img.src}
                      />
                    ))}
                    <div className="absolute top-[3%] left-1/2 transform -translate-x-1/2 text-center text-white z-[1]">
                      <div className="flex pb-2 justify-center items-center">
                        <h1 className="text-4xl font-semibold leading-none flex items-baseline gap-2 font-['Cairo']">
                          <span className="font-sans text-4xl">sa</span>
                          <span>نطاقات</span>
                        </h1>
                      </div>
                      <div className="w-[620px]">
                        <p className="font-cairo font-light text-base leading-[23px] text-center text-gray-400">
                          كلام و وصف للاستضافات المشتركة كلام و وصف للاستضافات
                          المشتركة كلام و وصف للاستضافات كلام و المشتركة كلام و
                          وصف للاستضافات المشتركة
                        </p>
                      </div>
                      <div className="flex justify-center items-center gap-4 mt-6">
                        <button
                          className="font-['Cairo'] font-semibold text-sm text-[#092346] bg-white rounded-md px-4 py-2 hover:bg-gray-200 transition"
                          aria-label="إنشاء حساب"
                        >
                          إنشاء حساب
                        </button>
                        <button
                          className="font-['Cairo'] font-semibold text-sm text-white bg-transparent border border-white rounded-md px-4 py-2 hover:bg-white hover:text-[#092346] transition"
                          aria-label="عرض الأسعار"
                        >
                          عرض الأسعار
                        </button>
                      </div>
                    </div>
                    <div className="absolute top-[390px] left-[80px] z-[0]">
                      <RangesIcon />
                    </div>
                  </div>
                </div>
                <div className="relative w-[1340px] h-[520px] mx-auto mt-[53px]"></div>
                <div className="absolute w-[207px] h-[266px] top-[260px] left-[355px]">
                  <div className="relative h-[266px]">
                    <div className="absolute w-44 h-[138px] top-32 left-[15px]">
                      <div className="relative h-[138px]">
                        <img
                          className="absolute w-44 h-[78px] top-[60px] left-0"
                          alt="Path"
                          src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/path-17361-2.svg"
                        />
                        <div className="absolute w-44 h-[117px] top-0 left-0">
                          <div className="h-[117px]">
                            <div className="relative w-44 h-[117px]">
                              <img
                                className="absolute w-44 h-[70px] top-[47px] left-0"
                                alt="Path"
                                src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/path-17362-2.svg"
                              />
                              <img
                                className="absolute w-[88px] h-[69px] top-[49px] left-0"
                                alt="Path"
                                src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/path-17363-2.svg"
                              />
                              <img
                                className="absolute w-[81px] h-[58px] top-1 left-[88px]"
                                alt="Path"
                                src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/path-17365-2.svg"
                              />
                              <img
                                className="absolute w-44 h-[102px] top-0 left-0"
                                alt="Group"
                                src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/group-3614-2.png"
                              />
                              <img
                                className="absolute w-44 h-[52px] top-[52px] left-0"
                                alt="Group"
                                src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/group-3615-2.png"
                              />
                              <img
                                className="absolute w-[171px] h-[98px] top-0.5 left-[3px]"
                                alt="Group"
                                src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/group-3616-2.png"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="absolute w-[111px] h-[212px] top-0 left-12"
                      alt="Group"
                      src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/group-8.png"
                    />
                    <img
                      className="absolute w-[207px] h-[175px] top-[75px] left-0 object-cover"
                      alt="Gg"
                      src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/gg-1-2.png"
                    />
                  </div>
                </div>
                <div className="absolute w-[207px] h-[266px] top-[260px] left-[953px]">
                  <div className="relative h-[266px]">
                    <div className="absolute w-44 h-[138px] top-32 left-[15px]">
                      <div className="relative h-[138px]">
                        <img
                          className="absolute w-44 h-[78px] top-[60px] left-0"
                          alt="Path"
                          src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/path-17361-2.svg"
                        />
                        <div className="absolute w-44 h-[117px] top-0 left-0">
                          <div className="h-[117px]">
                            <div className="relative w-44 h-[117px]">
                              <img
                                className="absolute w-44 h-[70px] top-[47px] left-0"
                                alt="Path"
                                src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/path-17362-2.svg"
                              />
                              <img
                                className="absolute w-[88px] h-[69px] top-[49px] left-0"
                                alt="Path"
                                src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/path-17363-2.svg"
                              />
                              <img
                                className="absolute w-[81px] h-[58px] top-1 left-[88px]"
                                alt="Path"
                                src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/path-17365-2.svg"
                              />
                              <img
                                className="absolute w-44 h-[102px] top-0 left-0"
                                alt="Group"
                                src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/group-3614-2-1.png"
                              />
                              <img
                                className="absolute w-44 h-[52px] top-[52px] left-0"
                                alt="Group"
                                src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/group-3615-2-1.png"
                              />
                              <img
                                className="absolute w-[171px] h-[98px] top-0.5 left-[3px]"
                                alt="Group"
                                src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/group-3616-2-1.png"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="absolute w-[111px] h-[212px] top-0 left-12"
                      alt="Group"
                      src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/group-8-1.png"
                    />
                    <img
                      className="absolute w-[207px] h-[175px] top-[75px] left-0 object-cover"
                      alt="Gg"
                      src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/gg-1-2.png"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute w-[251px] h-[582px] top-[200px] left-[630px]">
                <div className="relative h-[582px]">
                  <div className="absolute w-[251px] h-[318px] top-[264px] left-0">
                    <div className="h-[318px]">
                      <div className="relative w-[251px] h-[318px]">
                        <div className="absolute w-[242px] h-[206px] top-[106px] left-[3px] opacity-[0.54] bg-[url(https://c.animaapp.com/mc0m4hp3VjWYPs/img/group-3540.png)] bg-[100%_100%]" />
                        <div className="absolute w-[251px] h-[250px] top-[67px] left-0">
                          <div className="h-[250px]">
                            <div className="relative w-[251px] h-[250px]">
                              <img
                                className="absolute w-[251px] h-[178px] top-[73px] left-0"
                                alt="Path"
                                src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/path-16687.svg"
                              />
                              <img
                                className="absolute w-[251px] h-[145px] top-0 left-0"
                                alt="Group"
                                src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/group-3542.png"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="absolute w-[241px] h-[149px] top-[57px] left-[5px]">
                          <div className="h-[149px]">
                            <div className="w-[241px] h-[149px]">
                              <div className="relative h-[149px]">
                                <img
                                  className="absolute w-[241px] h-20 top-[70px] left-0"
                                  alt="Path"
                                  src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/path-16689.svg"
                                />
                                <img
                                  className="absolute w-[241px] h-[140px] top-0 left-0"
                                  alt="Group"
                                  src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/group-3545.png"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute w-[251px] h-[189px] top-0 left-0">
                          <div className="h-[189px]">
                            <div className="w-[251px] h-[189px]">
                              <div className="relative h-[189px]">
                                <img
                                  className="absolute w-[251px] h-[118px] top-[72px] left-0"
                                  alt="Path"
                                  src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/path-16691.svg"
                                />
                                <img
                                  className="absolute w-[251px] h-[145px] top-0 left-0"
                                  alt="Group"
                                  src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/group-3549.png"
                                />
                                <img
                                  className="absolute w-[173px] h-[100px] top-[22px] left-[39px]"
                                  alt="Group"
                                  src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/group-3550.png"
                                />
                                <div className="absolute w-[173px] h-[100px] top-[22px] left-[39px] bg-[url(https://c.animaapp.com/mc0m4hp3VjWYPs/img/clip-path-group-1.png)] bg-[100%_100%]" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[129px] h-[386px] top-0 left-[61px]">
                    <div className="h-[386px]">
                      <div className="relative w-[129px] h-[386px]">
                        <div className="absolute w-[124px] h-[102px] top-[210px] left-0.5">
                          <img
                            className="absolute w-[121px] h-[97px] top-[3px] left-px"
                            alt="Rectangle"
                            src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/rectangle.png"
                          />
                        </div>
                        <img
                          className="absolute w-[129px] h-[386px] top-0 left-0"
                          alt="Path"
                          src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/path-15023.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-[31px] h-7 right-[839px]"></div>
        </div>
        <div className="relative w-full min-h-[600px]">
          <div className="relative -mt-[540px]">
            <BackgroundSection />
          </div>

          <div className="relative w-full max-w-[1170px] mx-auto z-10">
            <div className="flex justify-center  mt-[10px] mb-[60px]">
              <Card className="w-full max-w-[400px]">
                <CardContent className="relative flex items-center justify-end px-4 sm:px-6 h-[111px] sm:h-[120px] bg-white rounded-[10px_10px_5px_5px] shadow-[0px_0px_20px_1px_#0000000f]">
                  {/* Text Content (left-aligned in LTR, visually right in RTL) */}
                  <div className="flex flex-col items-end space-y-2 mr-[20px]">
                    <div className="text-[#2b1f51] text-xl sm:text-2xl font-['Cairo',_Helvetica] font-semibold leading-normal whitespace-nowrap">
                      .Sa
                    </div>
                    <div className="text-black text-sm sm:text-base font-['Cairo',_Helvetica] font-light leading-normal whitespace-nowrap [direction:rtl]">
                      20 دولار فقط
                    </div>
                  </div>
                  {/* Image */}
                  <img
                    className="w-[61px] h-[61px] sm:w-[70px] sm:h-[70px] object-cover"
                    alt="Sa circle XS"
                    src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/sa-circle-01-xs-1-1.png"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="relative w-full max-w-[1170px] mb-[70px] mx-auto z-10">
            <MainContentSection />
          </div>
        </div>

        <CardWrapperSection />

        <ComponentNodeSection />
        <div className="relative w-full mt-[10px]">
          <OverlaySection />
          <FeatureListSection />
        </div>
        <ContentSection />
      </div>
    </div>
  );
};
