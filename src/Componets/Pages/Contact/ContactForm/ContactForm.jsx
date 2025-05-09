import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import Contact1 from "../../../images/contact.png";

const ContactForm = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    toast.success("Your message has been sent successfully!");
    setIsSending(false);

    // Uncomment and configure to enable actual email sending
    // emailjs
    //   .sendForm(
    //     "YOUR_SERVICE_ID",
    //     "YOUR_TEMPLATE_ID",
    //     form.current,
    //     "YOUR_PUBLIC_KEY"
    //   )
    //   .then(
    //     () => {
    //       setIsSending(false);
    //       toast.success("Your message has been sent successfully!");
    //     },
    //     (error) => {
    //       setIsSending(false);
    //       toast.error(
    //         "There was an error sending your message. Please try again later."
    //       );
    //     }
    //   );
  };

  return (
    <section>
      <div className="mx-auto px-4 font-ui-sans-serif">
        <div className="text-center mb-20 mt-20">
          <h6 className="text-lg font-semibold text-[#fb923c]">
            LET’S GET TO WORK
          </h6>
          <h2 className="text-3xl font-bold text-[#0f172a]">Contact Us</h2>
        </div>

        <div className="flex gap-4 flex-col lg:flex-row">
          {/* Left Image & Info */}
          <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
            <div className="border border-[#0f172a] shadow-2xl p-8 rounded-lg">
              <img
                src={Contact1}
                alt="Contact"
                className="w-full h-auto mb-4 rounded-md"
              />
              <p className="text-gray-700 mb-4">
                We provide free estimates via email or on-site visits. Our
                estimates are completely free of charge! Simply fill out the
                form or reach out to us at{" "}
                <a
                  href="mailto:Corecodexa@gmail.com"
                  className="text-[#fb923c] font-semibold"
                >
                  Corecodexa@gmail.com
                </a>
                , and provide your contact details and address.
              </p>
              <p className="text-gray-700">
                We look forward to hearing from you!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/2 w-full">
            <div className="border border-[#0f172a] shadow-2xl rounded-lg p-8">
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div className="form-group">
                  <input
                    type="text"
                    name="user_name"
                    id="name"
                    className="w-full p-3 border bg-gray-100 border-gray-300 rounded-md placeholder:text-gray-500"
                    required
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="user_email"
                    id="email"
                    className="w-full p-3 border bg-gray-100 border-gray-300 rounded-md placeholder:text-gray-500"
                    required
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="w-full p-3 border bg-gray-100 border-gray-300 rounded-md placeholder:text-gray-500"
                    cols="30"
                    rows="6"
                    required
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className={`bg-[#0f172a] text-white px-6 py-3 rounded-md hover:bg-[#fb923c] transition duration-300 ${
                      isSending ? "cursor-not-allowed opacity-70" : ""
                    }`}
                    disabled={isSending}
                  >
                    {isSending ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="w-full h-96 mt-20 overflow-hidden rounded-lg shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.1761546402313!2d71.69362310000001!3d29.394402499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b90ea2c287683%3A0x5af317295d38cf87!2sGoheer%20Town%20Gulshan%20E%20Farid%20Colony%2C%20Bahawalpur%2C%2063100!5e0!3m2!1sen!2s!4v1745868849562!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Core Codexa Location"
        ></iframe>
      </div>

      <ToastContainer />
    </section>
  );
};

export default ContactForm;
