import { Button } from "react-bootstrap";
import FeatureCard from "@/components/FeatureCard";
import { CheckCircle2, Rocket, ShieldCheck, BarChart3, Briefcase, Globe } from "lucide-react";
import HeroImage from "@/assets/images/hero-banner.jpg";

const Home = () => {
  return (
    <div className="min-vh-100 bg-white text-dark">

      {/* HERO SECTION */}
      <section className="position-relative text-white text-center overflow-hidden">
        <img
          src={HeroImage}
          alt="ASYP Hero Banner"
          className="w-100"
          style={{ maxHeight: "600px", objectFit: "cover", filter: "brightness(0.6)" }}
        />
        <div className="position-absolute top-50 start-50 translate-middle w-100 px-3">
          <h1 className="display-4 fw-bold">Akıllı Sözleşme Yönetimini Yeniden Tanımlayın</h1>
          <p className="lead my-4">Yapay zeka destekli, güvenli ve hızlı sözleşme yönetimiyle şirketinizi geleceğe taşıyın.</p>
          <Button variant="light" size="lg">Ücretsiz Demo Talep Et</Button>
        </div>
      </section>

      {/* PLATFORM TANITIM */}
      <section className="py-5 px-3 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">ASYP Nedir?</h2>
          <p className="text-center mb-5 fs-5 text-muted">
            ASYP; sözleşme oluşturma, analiz, onaylama, takip, yükümlülük ve ödeme süreçlerini uçtan uca yöneten, yapay zeka destekli bir akıllı sözleşme yönetim platformudur.
            Tüm kurumsal süreçlerinizi merkezi bir sistemde güvenle yönetin.
          </p>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {features.map((feature, index) => (
              <div key={index} className="col">
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ÇÖZÜM ODAKLI BÖLÜM */}
      <section className="py-5 px-3">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Ne Tür Sorunları Çözüyoruz?</h2>
          <p className="mb-5 text-muted fs-5">
            ASYP, manuel süreçlerde yaşanan gecikmeleri, hataları ve bilgi güvenliği risklerini ortadan kaldırır. Tüm sözleşme süreciniz artık otomatik, doğru ve izlenebilir.
          </p>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <FeatureCard
              icon={BarChart3}
              title="Süreç Takibi"
              description="Tüm sözleşme aşamalarını analiz edin ve aksiyonları zamanında yönetin."
            />
            <FeatureCard
              icon={Briefcase}
              title="Kurumsal Uyum"
              description="Tüm şirket içi birimlerin ve ekiplerin rol bazlı erişim ile uyumlu çalışmasını sağlayın."
            />
            <FeatureCard
              icon={Globe}
              title="Uzaktan İş Akışı"
              description="Farklı şehirlerdeki ofisleriniz veya çalışanlarınızla uzaktan süreçleri yönetin."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark text-white py-5 text-center px-3">
        <h2 className="h3 fw-bold mb-4">Şirketiniz için Dijital Dönüşüme Bugün Başlayın</h2>
        <p className="lead mb-4 mx-auto" style={{ maxWidth: "720px" }}>
          Süreçleri sadeleştirin, güvenli hale getirin ve zaman kazanın. ASYP ile artık her sözleşme süreci tek panelden kontrol altında.
        </p>
        <Button variant="light" size="lg">Bize Ulaşın</Button>
      </section>
    </div>
  );
};

export default Home;

// Özellikler
const features = [
  {
    icon: Rocket,
    title: "Otomatik Süreçler",
    description: "Sözleşme oluşturma, onay, takip gibi işlemleri insan hatasına gerek kalmadan yürütün.",
  },
  {
    icon: CheckCircle2,
    title: "Doğruluk ve Hız",
    description: "Karar alma sürecini hızlandıran analizler, anlık bildirimler ve görev atamaları.",
  },
  {
    icon: ShieldCheck,
    title: "Güvenlik Odaklı",
    description: "AES-256 şifreleme ve kullanıcı bazlı yetkilendirme ile maksimum veri güvenliği.",
  },
];
