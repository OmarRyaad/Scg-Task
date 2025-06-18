import { Card, CardContent } from "/components/UI/Card";

export const ServiceSection = () => {
  // Service cards data
  const serviceCards = [
    {
      id: 1,
      title: "الحماية من عمليات الاختراق والبرامج الخبيثة",
      description:
        "قم بحماية موقعك من البرامج الضارة ومنع محاولات الاختراق وهجمات استغلال الثغرات Zero-Day وهجمات تخمين كلمة المرور Brute Force.",
      icon: (
        <div className="w-[43px] h-[76px] overflow-hidden">
          <div className="h-[76px]">
            <div className="relative w-[43px] h-[76px]">
              <div className="absolute w-1 h-3 top-[35px] left-[18px]">
                <img
                  className="absolute w-1 h-1.5 top-1.5 left-0"
                  alt="Group"
                  src="https://c.animaapp.com/mc1s1pc84dIubF/img/group-5.png"
                />
                <img
                  className="absolute w-px h-px top-0 left-0.5"
                  alt="Group"
                  src="https://c.animaapp.com/mc1s1pc84dIubF/img/group-6.png"
                />
              </div>
              <img
                className="absolute w-[43px] h-[54px] top-[22px] left-0"
                alt="Group"
                src="https://c.animaapp.com/mc1s1pc84dIubF/img/group-2.png"
              />
              <img
                className="absolute w-[38px] h-[54px] top-[22px] left-[5px]"
                alt="Group"
                src="https://c.animaapp.com/mc1s1pc84dIubF/img/group-3.png"
              />
              <div className="absolute w-8 h-[37px] top-8 left-[5px]">
                <div className="absolute w-1.5 h-[9px] top-0 left-0 bg-[url(https://c.animaapp.com/mc1s1pc84dIubF/img/vector-3.svg)] bg-[100%_100%]">
                  <img
                    className="absolute w-1.5 h-[9px] top-0 left-0"
                    alt="Vector"
                    src="https://c.animaapp.com/mc1s1pc84dIubF/img/vector-8.svg"
                  />
                </div>
                <img
                  className="absolute w-1.5 h-[9px] top-[7px] left-[7px]"
                  alt="Group"
                  src="https://c.animaapp.com/mc1s1pc84dIubF/img/group-7.png"
                />
                <img
                  className="absolute w-1.5 h-[9px] top-3.5 left-[13px]"
                  alt="Group"
                  src="https://c.animaapp.com/mc1s1pc84dIubF/img/group-8.png"
                />
                <img
                  className="absolute w-1.5 h-[9px] top-[21px] left-5"
                  alt="Group"
                  src="https://c.animaapp.com/mc1s1pc84dIubF/img/group-9.png"
                />
                <img
                  className="absolute w-1.5 h-[9px] top-7 left-[26px]"
                  alt="Group"
                  src="https://c.animaapp.com/mc1s1pc84dIubF/img/group-10.png"
                />
              </div>
              <img
                className="absolute w-[3px] h-1.5 top-[41px] left-[18px]"
                alt="Group"
                src="https://c.animaapp.com/mc1s1pc84dIubF/img/group-4.png"
              />
              <img
                className="absolute w-5 h-[46px] top-0 left-5"
                alt="Vector"
                src="https://c.animaapp.com/mc1s1pc84dIubF/img/vector-6.svg"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "التخفيف من هجمات DDoS",
      description:
        "يمكن أن تتسبب هجمات حجب الخدمة الموزعة (DDoS) في التوقف التام لعملك. نحن نحظر هجمات DDoS للطبقات 3 و 4 و 7 ومع تأمين معدل نقل البيانات bandwidth أثناء الهجمات.",
      icon: (
        <div className="w-[60px] h-[75px] overflow-hidden">
          <div className="relative h-[75px]">
            <div className="absolute w-[30px] h-6 top-7 left-0">
              <div className="relative h-6">
                <img
                  className="absolute w-[27px] h-[15px] top-0 left-1"
                  alt="Group"
                  src="https://c.animaapp.com/mc1s1pc84dIubF/img/group.png"
                />
                <img
                  className="absolute w-7 h-[23px] top-px left-0"
                  alt="Group"
                  src="https://c.animaapp.com/mc1s1pc84dIubF/img/group-1.png"
                />
              </div>
            </div>
            <img
              className="absolute w-[52px] h-[75px] top-0 left-2"
              alt="Vector"
              src="https://c.animaapp.com/mc1s1pc84dIubF/img/vector.svg"
            />
            <img
              className="absolute w-[42px] h-16 top-1.5 left-3"
              alt="Vector"
              src="https://c.animaapp.com/mc1s1pc84dIubF/img/vector-2.svg"
            />
            <img
              className="absolute w-[15px] h-[23px] top-[46px] left-[21px]"
              alt="Vector"
              src="https://c.animaapp.com/mc1s1pc84dIubF/img/vector-1.svg"
            />
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "تحسين أداء الموقع عبر CDN",
      description:
        "تعمل شبكة توصيل المحتوى (CDN) الخاصة بنا على تحسين سرعة تحميل الصفحة وتقليل أحمال الخادم بنسبة 80٪ في المتوسط ��لتحسين أداء موقعك.",
      icon: (
        <div className="w-[72px] h-[73px] bg-[url(https://c.animaapp.com/mc1s1pc84dIubF/img/clip-path-group-1.png)] bg-[100%_100%]" />
      ),
    },
  ];

  return (
    <section className="w-full max-w-[1170px] mx-auto py-16">
      <h2 className="text-[40px] text-[#2b1f51] font-semibold text-center mb-16 [direction:rtl] [font-family:'Cairo',Helvetica]">
        انطلق أسرع وسارع في نمو عملك
      </h2>

      <div className="flex flex-wrap justify-center gap-7">
        {serviceCards.map((card) => (
          <Card
            key={card.id}
            className="w-[370px] rounded-[10px_10px_5px_5px] shadow-[0px_0px_15px_#00000012] bg-white"
          >
            <CardContent className="p-0 relative h-[300px]">
              <div className="absolute top-[35px] right-10">{card.icon}</div>

              <div className="absolute top-[143px] right-10 left-10 text-right">
                <h3 className="[font-family:'Cairo',Helvetica] font-semibold text-black text-base [direction:rtl]">
                  {card.title}
                </h3>
              </div>

              <div className="absolute top-[181px] right-10 left-10 [font-family:'Cairo',Helvetica] font-light text-black text-[13px] [direction:rtl]">
                {card.description}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
