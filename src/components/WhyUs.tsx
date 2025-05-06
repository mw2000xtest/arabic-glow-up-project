
import React from 'react';
import { Award, CheckCircle, Clock, Users } from 'lucide-react';

const WhyUs = () => {
  const reasons = [
    {
      icon: <Award className="h-10 w-10 text-ishraq-gold" />,
      title: "فريق طبي مؤهل",
      description: "نقدم خدمات طبية بأعلى معايير الجودة باستخدام أحدث التقنيات والمعدات الطبية."
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-ishraq-gold" />,
      title: "خطة علاجية فردية لكل مريض",
      description: "نقدم رعاية شخصية مصممة خصيصاً لتلبية احتياجات كل مريض على حدة."
    },
    {
      icon: <Users className="h-10 w-10 text-ishraq-gold" />,
      title: "إشراف طبي مستمر",
      description: "يضم فريقنا نخبة من الأطباء والمتخصصين ذوي الخبرة والكفاءة العالية في مختلف المجالات."
    },
    {
      icon: <Clock className="h-10 w-10 text-ishraq-gold" />,
      title: "مرونة في المواعيد",
      description: "نوفر خدماتنا على مدار الساعة طوال أيام الأسبوع لضمان الاستجابة السريعة لاحتياجاتكم."
    }
  ];

  const additionalReasons = [
    {
      title: "خصوصية وسرية تامة",
      description: "نضمن الخصوصية التامة لعملائنا والحفاظ على سرية المعلومات"
    },
    {
      title: "خدمات متوفرة على مدار الأسبوع",
      description: "خدماتنا متاحة طوال أيام الأسبوع لتلبية احتياجاتكم"
    },
    {
      title: "تغطية شاملة داخل مدينة جدة",
      description: "نغطي جميع مناطق مدينة جدة بخدماتنا المتميزة"
    }
  ];

  return (
    <section id="why-us" className="py-16 bg-ishraq text-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-ishraq-gold mb-6 text-right">
          لماذا تختار إشـــراق للرعاية المنزلية ؟
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start justify-end gap-4">
                  <div className="text-right">
                    <h3 className="font-bold text-xl mb-1">{reason.title}</h3>
                  </div>
                  <div className="mt-1">{reason.icon}</div>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <ul className="space-y-4">
              {additionalReasons.map((reason, index) => (
                <li key={index} className="flex items-start justify-end gap-4">
                  <div className="text-right">
                    <h3 className="font-bold text-xl mb-1">{reason.title}</h3>
                  </div>
                  <div className="mt-1">
                    <span className="text-ishraq-gold text-2xl">●</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="text-center py-10">
          <h3 className="text-3xl md:text-4xl font-bold text-ishraq-gold">
            إشراق... الرعاية الطبية المنزلية كما يجب أن تكون
          </h3>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
