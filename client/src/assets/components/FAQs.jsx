import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import faqImage from "/images/faqs.png";
import "./FAQs.scss";

const faqs = [
  {
    question: "What is your return policy?",
    answer: "Our return policy is 30 days with a receipt.",
  },
  {
    question: "How do I track my order?",
    answer:
      "You can track your order using the tracking number provided in the shipping confirmation email.",
  },
  {
    question: "Do you offer gift cards?",
    answer: "Yes, we offer gift cards in various denominations.",
  },
  {
    question: "What are your store hours?",
    answer: "Our store is open from 9 AM to 9 PM, Monday through Saturday.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can contact customer support via email at support@example.com or by calling 1-800-123-4567.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we offer international shipping. Shipping costs will be calculated at checkout.",
  },
  {
    question: "Can I change or cancel my order?",
    answer:
      "Orders can be changed or canceled within 24 hours of placement. Please contact customer support for assistance.",
  },
  {
    question: "How do I return an item?",
    answer:
      "To return an item, please use the return form included in your package or contact customer support for a return authorization.",
  },
  {
    question: "What should I do if I receive a damaged item?",
    answer:
      "Please contact customer support immediately if you receive a damaged item. We will arrange a replacement or refund as needed.",
  },
  {
    question: "Do you offer any discounts or promotions?",
    answer:
      "Yes, we offer various discounts and promotions throughout the year. Sign up for our newsletter to stay updated.",
  },
];

const FAQs = () => {
  return (
    <>
      <h1 className="text-primary text-4xl mb-2 font-bold text-center">
        Frequently Asked Questions
      </h1>
      <div className="faq-section">
        <div className="faq-container">
          <div className="faqs-content">
            {faqs.map((faq, index) => (
              <Accordion key={index}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                >
                  <Typography>{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
          <div className="faq-image">
            <img src={faqImage} alt="FAQs" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQs;
