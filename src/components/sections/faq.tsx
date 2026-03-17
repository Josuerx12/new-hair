import { Section } from "../landing/section";
import { faqs } from "@/content/home";
import { FaqItem } from "../faq-item";

const Faq = () => {
  return (
    <Section
      id="faq"
      title="Perguntas frequentes"
      contentClassName="grid gap-4"
    >
      {faqs.map((item) => (
        <FaqItem
          key={item.question}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </Section>
  );
};

export default Faq;
