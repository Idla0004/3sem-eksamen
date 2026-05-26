import ContactForm from "@/app/components/contact/ContactForm";
import Headline from "@/app/components/Headline";
import Header from "@/app/components/Header";
import { Suspense } from "react";
import Loading from "@/app/loading";
export default function Contact() {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <div className="sticky-container">
          <Header />
        </div>
        <Headline text="contact us" />
        <ContactForm />
      </Suspense>
    </main>
  );
}
