
import ContactInfo from "@/app/components/contact/contact-info";
import ContactForm from "@/app/components/contact/form";
import Location from "@/app/components/contact/office-location";
import HeroSub from "@/app/components/shared/hero-sub";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact | Food-pro",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];
  return (
    <>
      <HeroSub
        title="Contact Us"
        description="Have questions, feedback, or need assistance with your order? Our team is here to help you with all your food and delivery needs."
        breadcrumbLinks={breadcrumbLinks}
    />
      <ContactInfo />
      <ContactForm />
      <Location />
    </>
  );
};

export default page;
