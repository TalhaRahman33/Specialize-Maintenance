const LightingAr = () => {
  return (
    <section className="py-20 bg-gray-50" dir="rtl">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="text-right">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            تصميم الإضاءة <br /> والتنفيذ
          </h1>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            نقدم خدمات تصميم وتنفيذ الإضاءة باحترافية عالية لتحويل المساحات
            إلى بيئات أنيقة وفعّالة. حلولنا المتخصصة تعزز الأجواء الجمالية
            وتضمن الأداء العملي وتوفير الطاقة.
          </p>

          <a
            href="https://spacializes.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              relative inline-flex items-center justify-center
              px-10 py-4
              rounded-full
              font-semibold text-sm tracking-widest
              text-white
              bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600
              shadow-lg shadow-yellow-500/30
              overflow-hidden
              transition-all duration-300
              hover:shadow-yellow-500/60
              hover:-translate-y-1
              group
            "
          >
            {/* Shimmer effect */}
            <span
              className="
                absolute inset-0
                bg-gradient-to-r from-transparent via-white/40 to-transparent
                translate-x-[-100%]
                group-hover:translate-x-[100%]
                transition-transform duration-700
              "
            ></span>

            {/* Text */}
            <span className="relative z-10">
              اكتشف المزيد
            </span>
          </a>
        </div>

        {/* Image */}
        <div className="relative">
          <img
            src="/images/light.avif"
            alt="تصميم وتنفيذ الإضاءة"
            className="w-full h-full object-cover rounded-2xl shadow-xl"
          />

          {/* Decorative blur */}
          <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-yellow-400/30 rounded-full blur-3xl"></div>
        </div>

      </div>
    </section>
  );
};

export default LightingAr;
