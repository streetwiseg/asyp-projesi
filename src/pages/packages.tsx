import React from "react";
// src/pages/packages.tsx

import PackageCard from "@/components/packagecard"; // ✅ doğru yol
 // Gelişmiş kart bileşeni

const Packages = () => {
  const packages = [
    {
      title: "Başlangıç Paketi",
      price: "₺990",
      features: [
        "🔒 10 sözleşmeye kadar depolama",
        "✍️ Manuel imza takibi",
        "📊 Temel düzeyde sözleşme raporlaması",
        "💼 Küçük işletmeler için ideal kullanım",
      ],
    },
    {
      title: "Profesyonel Paket",
      price: "₺2.990",
      features: [
        "📁 50 sözleşme saklama kapasitesi",
        "⏰ Otomatik hatırlatıcılar ve bildirimler",
        "🧠 Yapay zeka destekli sözleşme analizi",
        "📈 Gelişmiş ve özelleştirilebilir raporlama",
        "🤝 Büyümekte olan işletmeler için tavsiye edilir",
      ],
      featured: true,
    },
    {
      title: "Kurumsal Paket",
      price: "₺9.990",
      features: [
        "♾️ Sınırsız sözleşme yönetimi",
        "👥 Çoklu kullanıcı ve departman desteği",
        "📋 Detaylı, filtrelenebilir rapor ekranları",
        "🤖 AI destekli sözleşme atama ve yükümlülük takibi",
        "🔐 Yetkilendirme ve erişim seviyesi özelleştirme",
        "🏢 Büyük ölçekli işletmeler için gelişmiş altyapı",
      ],
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4 fw-bold">Paketlerimiz</h1>
      <p className="text-center text-muted mb-5">
        Farklı ihtiyaçlara özel olarak hazırladığımız kurumsal paket seçeneklerimizle tanışın.
      </p>

      <div className="row g-4">
        {packages.map((pkg, index) => (
          <div key={index} className="col-md-6 col-lg-4 d-flex">
            <PackageCard
              title={pkg.title}
              price={pkg.price}
              features={pkg.features}
              featured={pkg.featured}
              onSelect={() => alert(`"${pkg.title}" seçildi`)}
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <p className="mb-3">
          Eğer ihtiyacınız daha farklıysa size özel kurumsal çözümler de sunuyoruz.
        </p>
        <a href="/contact" className="btn btn-outline-secondary px-4">
          Bize Ulaşın
        </a>
      </div>
    </div>
  );
};

export default Packages;
