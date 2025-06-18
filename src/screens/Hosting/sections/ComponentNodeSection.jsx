import { CheckCircle, CheckIcon } from "lucide-react";
import { Card, CardContent } from "../../../components/UI/Card";

export const ComponentNodeSection = () => {
  // Benefits data for mapping
  const benefits = [
    "تأكيد ثقة العملاء المحليين بنشاطك التجاري، عبر استخدام اسم النطاق الوطني المعروف لدى أغلبهم.",
    "تمكين محركات البحث من تحديد الموقع الجغرافي لعملك التجاري بسهولة.",
  ];

  return (
    <section className="w-full max-w-[1199px] mx-auto py-16 [direction:rtl]">
      <h2 className="text-[32px] font-bold text-black text-start mb-8 [font-family:'Cairo',Helvetica]">
        ما الذي يدفعك لتسجيل اسم نطاق؟
      </h2>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <p className="text-xl text-black [font-family:'Cairo',Helvetica] mb-8">
            بصفته اسم النطاق الدولي الرسمي المخصص لدولة ليبيا، يمثل امتداد sa.
            مكان تواجد عملك المحلي، مما يؤكد هوية عملك التجاري، ويدعم نشاط
            الأعمال التجارية الوطنية ويساعدك في الوصول إلى جمهورك المستهدف
            جغرافيا من خلال:
          </p>

          <Card className="border-0 shadow-none">
            <CardContent className="p-0 space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <p className="text-base font-light text-black [font-family:'Cairo',Helvetica]">
                    {benefit}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="flex-1 relative">
          <div className="relative h-full">
            {/* Main illustration container */}
            <div className="relative h-80 w-full">
              {/* Background paths */}
              <img
                className="w-full max-w-[529px] h-[246px] absolute top-[74px]"
                alt="Path"
                src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/path-14100.svg"
              />
              <img
                className="w-full max-w-[529px] h-[305px] absolute top-0"
                alt="Path"
                src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/path-14101.svg"
              />

              {/* Domain icons */}
              <div className="absolute w-[243px] h-[161px] top-[21px] left-[170px]">
                <div className="relative w-[243px] h-[161px]">
                  {/* First domain icon */}
                  <div className="absolute w-[99px] h-[77px] top-0 left-0">
                    <div className="relative w-[99px] h-[77px]">
                      <img
                        className="absolute w-[99px] h-11 top-[34px]"
                        alt="Path"
                        src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/path-14242.svg"
                      />
                      <div className="absolute w-[99px] h-[66px] top-0">
                        <div className="relative w-[99px] h-[66px]">
                          <img
                            className="absolute w-[99px] h-[39px] top-[26px]"
                            alt="Path"
                            src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/path-14225.svg"
                          />
                          <img
                            className="absolute w-[49px] h-[38px] top-[27px] left-[49px]"
                            alt="Path"
                            src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/path-14226.svg"
                          />
                          <img
                            className="absolute w-[99px] h-[57px] top-0"
                            alt="Group"
                            src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/group-1812.png"
                          />
                          <img
                            className="absolute w-[78px] h-[45px] top-1.5 left-2.5"
                            alt="Group"
                            src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/group-1813.png"
                          />
                          <img
                            className="absolute w-[99px] h-[29px] top-[29px]"
                            alt="Group"
                            src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/group-1814.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Second domain icon */}
                  <div className="absolute w-[99px] h-[77px] top-[83px] left-[145px]">
                    <div className="relative w-[99px] h-[77px]">
                      <img
                        className="absolute w-[99px] h-11 top-[34px]"
                        alt="Path"
                        src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/path-14242.svg"
                      />
                      <div className="absolute w-[99px] h-[66px] top-0">
                        <div className="relative w-[99px] h-[66px]">
                          <img
                            className="absolute w-[99px] h-[39px] top-[26px]"
                            alt="Path"
                            src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/path-14243.svg"
                          />
                          <img
                            className="absolute w-[49px] h-[38px] top-[27px] left-[49px]"
                            alt="Path"
                            src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/path-14244.svg"
                          />
                          <img
                            className="absolute w-[99px] h-[57px] top-0"
                            alt="Group"
                            src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/group-1833.png"
                          />
                          <img
                            className="absolute w-[78px] h-[45px] top-1.5 left-2.5"
                            alt="Group"
                            src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/group-1834.png"
                          />
                          <img
                            className="absolute w-[99px] h-[29px] top-[29px]"
                            alt="Group"
                            src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/group-1835.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Group image at bottom left */}
              <img
                className="absolute w-[187px] h-[143px] top-[163px] left-0"
                alt="Group"
                src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/group-3492.png"
              />

              {/* Third domain icon */}
              <div className="absolute w-[99px] h-28 top-[3px] left-72">
                <div className="relative w-[99px] h-28">
                  <div className="absolute w-[99px] h-[85px] top-[27px]">
                    <div className="relative h-[85px]">
                      <img
                        className="absolute w-24 h-14 top-[29px] left-px"
                        alt="Path"
                        src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/path-14230.svg"
                      />
                      <div className="absolute w-[99px] h-[77px] top-0">
                        <div className="relative h-[77px]">
                          <img
                            className="absolute w-[99px] h-11 top-[34px]"
                            alt="Path"
                            src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/path-14242.svg"
                          />
                          <div className="absolute w-[99px] h-[66px] top-0">
                            <div className="relative w-[99px] h-[66px]">
                              <img
                                className="absolute w-[99px] h-[39px] top-[26px]"
                                alt="Path"
                                src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/path-14225.svg"
                              />
                              <img
                                className="absolute w-[49px] h-[38px] top-[27px] left-[49px]"
                                alt="Path"
                                src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/path-14233.svg"
                              />
                              <img
                                className="absolute w-[99px] h-[57px] top-0"
                                alt="Group"
                                src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/group-1821.png"
                              />
                              <img
                                className="absolute w-[78px] h-[45px] top-1.5 left-2.5"
                                alt="Group"
                                src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/group-1822.png"
                              />
                              <img
                                className="absolute w-[99px] h-[29px] top-[29px]"
                                alt="Group"
                                src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/group-1823.png"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute w-[99px] h-[66px] top-3.5">
                    <div className="relative w-[99px] h-[66px]">
                      <img
                        className="absolute w-[99px] h-[39px] top-[26px]"
                        alt="Path"
                        src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/path-14503.svg"
                      />
                      <img
                        className="absolute w-[49px] h-[38px] top-[27px] left-[49px]"
                        alt="Path"
                        src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/path-14504.svg"
                      />
                      <img
                        className="absolute w-[99px] h-[57px] top-0"
                        alt="Group"
                        src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/group-1915.png"
                      />
                      <img
                        className="absolute w-[78px] h-[45px] top-1.5 left-2.5"
                        alt="Group"
                        src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/group-1916.png"
                      />
                      <img
                        className="absolute w-[99px] h-[29px] top-[29px]"
                        alt="Group"
                        src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/group-1917.png"
                      />
                    </div>
                  </div>

                  <div className="absolute w-[99px] h-[66px] top-0">
                    <div className="relative w-[99px] h-[66px]">
                      <img
                        className="absolute w-[99px] h-[39px] top-[26px]"
                        alt="Path"
                        src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/path-14243.svg"
                      />
                      <img
                        className="absolute w-[49px] h-[38px] top-[27px] left-[49px]"
                        alt="Path"
                        src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/path-14509.svg"
                      />
                      <img
                        className="absolute w-[99px] h-[57px] top-0"
                        alt="Group"
                        src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/group-1920.png"
                      />
                      <img
                        className="absolute w-[99px] h-[29px] top-[29px]"
                        alt="Group"
                        src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/group-1921.png"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Top GG image */}
              <img
                className="absolute w-[141px] h-24 bottom-[243px] left-[263px] object-cover"
                alt="Gg"
                src="https://c.animaapp.com/mc0m4hp3VjWYPs/img/gg-1-2.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
