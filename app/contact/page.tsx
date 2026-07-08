import type { Metadata } from "next";
import { Contact } from "@/components/Contact";

const description =
  "Get in touch with Alok Sharma — for engineering work, collaboration, or a conversation about building software.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Friend Who Codes",
    description,
    url: "/contact",
  },
};

export default function ContactPage() {
  return <Contact />;
}
