"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { Award, Diamond, Palette, Scissors, Sparkles, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="medium"
        sizing="mediumLargeSizeMediumTitles"
        background="floatingGradient"
        cardStyle="soft-shadow"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Главная",
          id: "#hero",
        },
        {
          name: "Услуги",
          id: "#pricing",
        },
        {
          name: "Отзывы",
          id: "#testimonials",
        },
        {
          name: "Контакты",
          id: "#contact",
        },
      ]}
      button={{
        text: "Записаться онлайн",
        href: "#contact",
      }}
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=zr36xd"
      logoAlt="Glamour Logo"
      brandName="Glamour"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-static-grid",
      }}
      title="Ваш Идеал Красоты в Салоне Glamour"
      description="Преобразитесь с нами в самом сердце Алматы. Откройте для себя мир роскошных услуг и индивидуального подхода."
      buttons={[
        {
          text: "Записаться онлайн",
          href: "#contact",
        },
      ]}
      carouselItems={[
        {
          id: "hero-item-1",
          imageSrc: "http://img.b2bpic.net/free-photo/arrangement-with-beautiful-flowers-stones_23-2149307873.jpg",
          imageAlt: "Интерьер салона красоты Glamour",
        },
        {
          id: "hero-item-2",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-pampering-face-client-salon_23-2147736961.jpg",
          imageAlt: "Мастер делает стрижку клиенту",
        },
        {
          id: "hero-item-3",
          imageSrc: "http://img.b2bpic.net/free-photo/male-female-friends-getting-manicure-together_23-2150285925.jpg",
          imageAlt: "Маникюр в процессе",
        },
        {
          id: "hero-item-4",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-getting-her-hair-dyed-beauty-salon_23-2149167372.jpg",
          imageAlt: "Окрашивание волос",
        },
        {
          id: "hero-item-5",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-hand-using-gua-sha-treatment_23-2149406824.jpg",
          imageAlt: "Уход за лицом",
        },
        {
          id: "hero-item-6",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-bottles-with-dispensers-liquid-soap_169016-23230.jpg",
          imageAlt: "Премиальные косметические продукты",
        },
      ]}
      autoPlay={true}
      autoPlayInterval={4000}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="О салоне Glamour"
      description={[
        "Салон красоты Glamour в Алматы – это пространство, где каждая деталь создана для вашего комфорта и совершенства.",
        "Мы предлагаем эксклюзивные услуги, используя только лучшие продукты и передовые техники, чтобы подчеркнуть вашу уникальную красоту и обеспечить незабываемый опыт.",
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureHoverPattern
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          icon: Award,
          title: "Профессионализм",
          description: "Наша команда — это высококвалифицированные специалисты, постоянно совершенствующие свои навыки.",
        },
        {
          icon: Users,
          title: "Индивидуальный Подход",
          description: "Мы внимательно прислушиваемся к вашим пожеланиям и предлагаем решения, идеально подходящие именно вам.",
        },
        {
          icon: Diamond,
          title: "Премиум Материалы",
          description: "Используем только проверенные, высококачественные продукты от ведущих мировых брендов.",
        },
      ]}
      title="Наши преимущества"
      description="Что делает Glamour вашим идеальным выбором:"
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "стрижка",
          badge: "Базовая",
          badgeIcon: Scissors,
          price: "5000 тг",
          subtitle: "Стильная стрижка и укладка",
          buttons: [
            {
              text: "Записаться",
              href: "#contact",
            },
          ],
          features: [
            "Консультация стилиста",
            "Мытье головы и уход",
            "Сушка и легкая укладка",
          ],
        },
        {
          id: "маникюр",
          badge: "Классика",
          badgeIcon: Sparkles,
          price: "4000 тг",
          subtitle: "Идеальный маникюр для вас",
          buttons: [
            {
              text: "Записаться",
              href: "#contact",
            },
          ],
          features: [
            "Очищение и подготовка",
            "Формирование ногтей",
            "Покрытие гель-лаком",
          ],
        },
        {
          id: "окрашивание",
          badge: "Премиум",
          badgeIcon: Palette,
          price: "15000 тг",
          subtitle: "Полное преображение цвета",
          buttons: [
            {
              text: "Записаться",
              href: "#contact",
            },
          ],
          features: [
            "Консультация по цвету",
            "Высококачественные красители",
            "Уход после окрашивания",
          ],
        },
      ]}
      title="Наши Услуги и Цены"
      description="Откройте для себя полный спектр услуг Glamour. Высокое качество по честным ценам."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "Анна Петрова",
          role: "Постоянный клиент",
          testimonial: "«Glamour — это мой любимый салон! Мастера всегда на высоте, а атмосфера просто волшебная. Рекомендую всем!»",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-with-blue-eyes-black-dress-with-her-arms-crossed_613910-14298.jpg",
          imageAlt: "Фото Анны Петровой",
        },
        {
          id: "t2",
          name: "Елена Смирнова",
          role: "Бьюти-блогер",
          testimonial: "«Услуги в Glamour всегда превосходят ожидания. Мои волосы и ногти выглядят безупречно после каждого визита.»",
          imageSrc: "http://img.b2bpic.net/free-photo/impressed-girl-admiring-great-music-taste-friend-showing-thumbs-up-smiling-excited-astoni_1258-142061.jpg",
          imageAlt: "Фото Елены Смирновой",
        },
        {
          id: "t3",
          name: "Марина Козлова",
          role: "Предприниматель",
          testimonial: "«Целиком доверяю свою внешность мастерам Glamour. Они создают уникальные образы и всегда угадывают мои желания.»",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-woman-doing-video-selfie-cafe_7502-7210.jpg",
          imageAlt: "Фото Марины Козловой",
        },
        {
          id: "t4",
          name: "Ольга Васильева",
          role: "Дизайнер",
          testimonial: "«Салон Glamour — это место, где можно расслабиться и получить высококлассные услуги. Результат всегда радует!»",
          imageSrc: "http://img.b2bpic.net/free-photo/excited-lovely-girl-with-long-wavy-hairstyle-is-posing-camera-while-turn-around-smiling-photoshoot-cute-caucasian-young-girl-vigorously-posing-waving-hand-side-photo-studio_291650-2405.jpg",
          imageAlt: "Фото Ольги Васильевой",
        },
        {
          id: "t5",
          name: "Наталья Соколова",
          role: "Модель",
          testimonial: "«Благодаря Glamour я всегда готова к фотосессиям. Мастера знают, как подчеркнуть естественную красоту.»",
          imageSrc: "http://img.b2bpic.net/free-photo/young-charismatic-beauty-blogger-teenage-girl-records-video-her-applying-mascara-reviewing-makeup_1258-254506.jpg",
          imageAlt: "Фото Натальи Соколовой",
        },
      ]}
      title="Что говорят наши клиенты"
      description="Доверьте свою красоту профессионалам Glamour и убедитесь в качестве наших услуг."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "BeautyBlog",
        "StyleMag",
        "LuxTrends",
        "EliteBeauty",
        "FashionWeek",
        "GlamourLife",
        "HealthyGlow",
      ]}
      title="Нам доверяют"
      description="Партнеры и вдохновители, которые разделяют наши ценности."
      speed={40}
      showCard={true}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "radial-gradient",
      }}
      text="Готовы к преображению? Свяжитесь с нами сегодня и запишитесь на консультацию или процедуру."
      buttons={[
        {
          text: "Написать в WhatsApp",
          href: "https://wa.me/77001234567",
        },
        {
          text: "Позвонить",
          href: "tel:+77001234567",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=zr36xd"
      logoAlt="Glamour Logo"
      logoText="Glamour"
      columns={[
        {
          title: "Услуги",
          items: [
            {
              label: "Стрижки",
              href: "#pricing",
            },
            {
              label: "Маникюр",
              href: "#pricing",
            },
            {
              label: "Окрашивание",
              href: "#pricing",
            },
            {
              label: "Уход за лицом",
              href: "#",
            },
          ],
        },
        {
          title: "О нас",
          items: [
            {
              label: "Наша история",
              href: "#about",
            },
            {
              label: "Команда",
              href: "#",
            },
            {
              label: "Вакансии",
              href: "#",
            },
          ],
        },
        {
          title: "Контакты",
          items: [
            {
              label: "Наш адрес",
              href: "#contact",
            },
            {
              label: "Телефон",
              href: "tel:+77001234567",
            },
            {
              label: "WhatsApp",
              href: "https://wa.me/77001234567",
            },
          ],
        },
      ]}
      copyrightText="© 2024 Glamour. Все права защищены."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
