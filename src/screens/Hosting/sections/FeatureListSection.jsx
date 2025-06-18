import { Card, CardContent } from "../../../components/UI/Card";

export const FeatureListSection = () => {
  // Feature card data for mapping
  const featureCards = [
    {
      id: 1,
      title: "تحسين أداء الموقع عبر CDN",
      description:
        "تعمل شبكة توصيل المحتوى (CDN) الخاصة بنا على تحسين سرعة تحميل الصفحة وتقليل أحمال الخادم بنسبة 80٪ في المتوسط ​​لتحسين أداء موقعك.",
      imageUrl:
        "https://c.animaapp.com/mc0m4hp3VjWYPs/img/clip-path-group-3.png",
      imageClassName: "w-[65px] h-[75px] absolute top-[35px] right-[35px]",
    },
    {
      id: 2,
      title: "التخفيف من هجمات DDoS",
      description:
        "يمكن أن تتسبب هجمات حجب الخدمة الموزعة (DDoS) في التوقف التام لعملك. نحن نحظر هجمات DDoS للطبقات 3 و 4 و 7 ومع تأمين معدل نقل البيانات bandwidth أثناء الهجمات.",
      imageUrl:
        "https://c.animaapp.com/mc0m4hp3VjWYPs/img/clip-path-group-4.png",
      imageClassName: "w-[74px] h-[75px] absolute top-[35px] right-[46px]",
    },
    {
      id: 3,
      title: "الحماية من عمليات الاختراق والبرامج الخبيثة",
      description:
        "قم بحماية موقعك من البرامج الضارة ومنع محاولات الاختراق وهجمات استغلال الثغرات Zero-Day وهجمات تخمين كلمة المرور Brute Force.",
      imageUrl: "https://c.animaapp.com/mc0m4hp3VjWYPs/img/group-3773.png",
      imageClassName: "w-[57px] h-[77px] absolute top-[34px] right-[37px]",
    },
    {
      id: 4,
      title: "تحسين أداء الموقع عبر CDN",
      description:
        "تعمل شبكة توصيل المحتوى (CDN) الخاصة بنا على تحسين سرعة تحميل الصفحة وتقليل أحمال الخادم بنسبة 80٪ في المتوسط ​​لتحسين أداء موقعك.",
      imageUrl:
        "https://c.animaapp.com/mc0m4hp3VjWYPs/img/clip-path-group-5.png",
      imageClassName: "w-[35px] h-[75px] absolute top-[40px] right-[41px]",
    },
    {
      id: 5,
      title: "التخفيف من هجمات DDoS",
      description:
        "يمكن أن تتسبب هجمات حجب الخدمة الموزعة (DDoS) في التوقف التام لعملك. نحن نحظر هجمات DDoS للطبقات 3 و 4 و 7 ومع تأمين معدل نقل البيانات bandwidth أثناء الهجمات.",
      imageUrl:
        "https://c.animaapp.com/mc0m4hp3VjWYPs/img/clip-path-group-6.png",
      imageClassName: "w-[78px] h-[74px] absolute top-[40px] right-[40px]",
    },
    {
      id: 6,
      title: "الحماية من عمليات الاختراق والبرامج الخبيثة",
      description:
        "قم بحماية موقعك من البرامج الضارة ومنع محاولات الاختراق وهجمات استغلال الثغرات Zero-Day وهجمات تخمين كلمة المرور Brute Force.",
      imageUrl:
        "https://c.animaapp.com/mc0m4hp3VjWYPs/img/clip-path-group-7.png",
      imageClassName: "w-[65px] h-[88px] absolute top-[30px] right-[40px]",
    },
  ];

  // Split cards into two rows
  const firstRowCards = featureCards.slice(0, 3);
  const secondRowCards = featureCards.slice(3, 6);

  return (
    <section className="w-full max-w-[1170px] mx-auto py-16">
      <div className="flex flex-col items-center">
        <h2 className="font-semibold text-[#2b1f51] text-[40px] text-center mb-12 [direction:rtl] [font-family:'Cairo',Helvetica]">
          ما الذي يميز
        </h2>

        {/* First row of cards */}
        <div className="flex flex-wrap justify-center gap-7 mb-7 w-full">
          {firstRowCards.map((card) => (
            <div key={card.id} className="w-full max-w-[370px]">
              <Card className="h-[300px] rounded-[10px_10px_5px_5px] shadow-[0px_0px_15px_#00000012] relative overflow-hidden">
                <CardContent className="p-0 h-full">
                  <div className="relative h-full p-10">
                    <div
                      className={card.imageClassName}
                      style={{
                        backgroundImage: `url(${card.imageUrl})`,
                        backgroundSize: "100% 100%",
                      }}
                    />
                    <h3 className="absolute top-[143px] right-[35px] [font-family:'Cairo',Helvetica] font-semibold text-black text-base tracking-[0] leading-[normal] whitespace-nowrap [direction:rtl]">
                      {card.title}
                    </h3>
                    <p className="w-[290px] absolute top-[171px] right-[40px] font-light text-gray-600 text-[13px] leading-[20px] tracking-normal text-right [font-family:'Cairo',Helvetica] [direction:rtl]">
                      {card.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Second row of cards */}
        <div className="flex flex-wrap justify-center gap-7 w-full">
          {secondRowCards.map((card) => (
            <div key={card.id} className="w-full max-w-[370px]">
              <Card className="h-[300px] rounded-[10px_10px_5px_5px] shadow-[0px_0px_15px_#00000012] relative overflow-hidden">
                <CardContent className="p-0 h-full">
                  <div className="relative h-full p-10">
                    <div
                      className={card.imageClassName}
                      style={{
                        backgroundImage: `url(${card.imageUrl})`,
                        backgroundSize: "100% 100%",
                      }}
                    />
                    <h3 className="absolute top-[143px] right-[35px] [font-family:'Cairo',Helvetica] font-semibold text-black text-base tracking-[0] leading-[normal] whitespace-nowrap [direction:rtl]">
                      {card.title}
                    </h3>
                    <p className="w-[290px] absolute top-[171px] right-[40px] font-light text-gray-600 text-[13px] leading-[20px] tracking-normal text-right [font-family:'Cairo',Helvetica] [direction:rtl]">
                      {card.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
