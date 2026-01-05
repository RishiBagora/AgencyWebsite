// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import siteConfig from "../../config/siteConfig";

// /* ---------------- ANIMATION ---------------- */
// const fadeUp = {
//   hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
//   visible: {
//     opacity: 1,
//     y: 0,
//     filter: "blur(0px)",
//     transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
//   },
// };

// export default function ContactForm() {
//   const [form, setForm] = useState({
//     fullName: "",
//     phone: "",
//     email: "",
//     service: "",
//     budget: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   /* ---------------- HANDLERS ---------------- */
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const validate = () => {
//     if (form.fullName.trim().length < 2) {
//       return "Please enter your full name.";
//     }
//     if (!/^[6-9]\d{9}$/.test(form.phone)) {
//       return "Please enter a valid 10-digit Indian phone number.";
//     }
//     if (
//       form.email &&
//       !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
//     ) {
//       return "Please enter a valid email address.";
//     }
//     return "";
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationError = validate();
//     if (validationError) {
//       setError(validationError);
//       return;
//     }

//     setError("");
//     setLoading(true);

//     const message = `
// Hello 👋, I’d like to discuss a project.

// Name: ${form.fullName}
// Phone: ${form.phone}
// Email: ${form.email || "Not provided"}
// Service Interested In: ${form.service || "Not sure yet"}
// Budget Range: ${form.budget || "Not decided"}
// Message: ${form.message || "—"}
//     `.trim();

//     const encodedMessage = encodeURIComponent(message);
//     const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodedMessage}`;

//     window.open(whatsappUrl, "_blank");
//     setLoading(false);
//   };

//   /* ---------------- UI ---------------- */
//   return (
//     <section id="contact-form" className="bg-white px-6 py-16 md:py-20">
//       <motion.div
//         variants={fadeUp}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="mx-auto max-w-xl"
//       >
//         <h2 className="mb-6 text-2xl font-semibold text-gray-900">
//           Share Your Project Details
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           {/* Full Name */}
//           <div>
//             <label className="mb-1 block text-sm font-medium text-gray-700">
//               Full Name *
//             </label>
//             <input
//               type="text"
//               name="fullName"
//               value={form.fullName}
//               onChange={handleChange}
//               placeholder="Your full name"
//               className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-orange-500"
//             />
//           </div>

//           {/* Phone */}
//           <div>
//             <label className="mb-1 block text-sm font-medium text-gray-700">
//               Phone Number *
//             </label>
//             <input
//               type="tel"
//               name="phone"
//               value={form.phone}
//               onChange={handleChange}
//               placeholder="10-digit phone number"
//               className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-orange-500"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="mb-1 block text-sm font-medium text-gray-700">
//               Email Address (optional)
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="Your email address"
//               className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-orange-500"
//             />
//           </div>

//           {/* Service */}
//           <div>
//             <label className="mb-1 block text-sm font-medium text-gray-700">
//               Service Interested In
//             </label>
//             <select
//               name="service"
//               value={form.service}
//               onChange={handleChange}
//               className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-orange-500"
//             >
//               <option value="">Select a service</option>
//               <option>Website Development</option>
//               <option>E-Commerce Website</option>
//               <option>UI / UX Design</option>
//               <option>Website Redesign</option>
//               <option>SEO & Optimization</option>
//               <option>Not Sure Yet</option>
//             </select>
//           </div>

//           {/* Budget */}
//           <div>
//             <label className="mb-1 block text-sm font-medium text-gray-700">
//               Estimated Budget
//             </label>
//             <select
//               name="budget"
//               value={form.budget}
//               onChange={handleChange}
//               className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-orange-500"
//             >
//               <option value="">Select budget range</option>
//               <option>Below ₹20,000</option>
//               <option>₹20,000 – ₹40,000</option>
//               <option>₹40,000 – ₹70,000</option>
//               <option>₹70,000 – ₹1,00,000</option>
//               <option>Above ₹1,00,000</option>
//               <option>Not decided yet</option>
//             </select>
//           </div>

//           {/* Message */}
//           <div>
//             <label className="mb-1 block text-sm font-medium text-gray-700">
//               Project Details
//             </label>
//             <textarea
//               name="message"
//               value={form.message}
//               onChange={handleChange}
//               placeholder="Tell us briefly about your project"
//               rows={4}
//               className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-orange-500"
//             />
//           </div>

//           {/* Error */}
//           {error && <p className="text-sm text-red-600">{error}</p>}

//           {/* Submit */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="flex w-full items-center justify-center gap-2 rounded-lg bg-orange-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-orange-700 disabled:opacity-60"
//           >
//             {loading ? "Redirecting…" : "Send on WhatsApp"}
//           </button>

//           {/* Trust Note */}
//           <p className="text-center text-xs text-gray-500">
//             Your details are safe with us. No spam, no unwanted calls.
//           </p>
//         </form>
//       </motion.div>
//     </section>
//   );
// }



import React, { useState } from "react";
import { motion } from "framer-motion";
import siteConfig from "../../config/siteConfig";

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ContactForm() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });

  

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (form.fullName.trim().length < 2) return "Please enter your name.";
    if (!/^[6-9]\d{9}$/.test(form.phone)) return "Invalid 10-digit Indian phone number.";
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError("");
    setLoading(true);

    // 1. Message Tyari
    const whatsappMessage = `Hello 👋, I'd like to discuss a project.
    
*Name:* ${form.fullName}
*Phone:* ${form.phone}
*Email:* ${form.email || "N/A"}
*Service:* ${form.service || "Not selected"}
*Budget:* ${form.budget || "Not decided"}
*Message:* ${form.message || "No specific details provided."}`.trim();

    // 2. WhatsApp Open karna
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`, "_blank");

    // 3. Sabse Important: Form Clear karna
    setForm({
      fullName: "",
      phone: "",
      email: "",
      service: "",
      budget: "",
      message: "",
    });

    setLoading(false);
  };

  return (
    <section id="contact-form" className="bg-[var(--color-bg)] py-20 md:py-32 px-6">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-3xl bg-white border border-[var(--color-border)] rounded-[2.5rem] p-8 md:p-16 shadow-2xl shadow-orange-500/5"
      >
        <div className="mb-12">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-3 block">
            Project Intake
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-gray-900 leading-tight">
            Tell Us About <br />
            <span className="text-orange-600 italic">Your Vision</span>
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="md:col-span-1">
            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 block ml-1">Full Name *</label>
            <input
              type="text" name="fullName" value={form.fullName} onChange={handleChange}
              placeholder="e.g. Rahul Sharma"
              className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-sm outline-none focus:border-orange-500 focus:bg-white transition-all"
            />
          </div>

          {/* Phone */}
          <div className="md:col-span-1">
            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 block ml-1">Phone Number *</label>
            <input
              type="tel" name="phone" value={form.phone} onChange={handleChange}
              placeholder="10-digit mobile"
              className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-sm outline-none focus:border-orange-500 focus:bg-white transition-all"
            />
          </div>

          {/* Email */}
          <div className="md:col-span-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 block ml-1">Email Address (Optional)</label>
            <input
              type="email" name="email" value={form.email} onChange={handleChange}
              placeholder="rahul@business.com"
              className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-sm outline-none focus:border-orange-500 focus:bg-white transition-all"
            />
          </div>

          {/* Service Dropdown */}
          <div className="md:col-span-1">
            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 block ml-1">Service Interested In</label>
            <select
              name="service" value={form.service} onChange={handleChange}
              className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-sm outline-none focus:border-orange-500 focus:bg-white appearance-none cursor-pointer transition-all"
            >
              <option value="">Select Service</option>
              <option>Website Development</option>
              <option>E-Commerce Store</option>
              <option>UI / UX Design</option>
              <option>SEO & Optimization</option>
            </select>
          </div>

          {/* Budget Dropdown */}
          <div className="md:col-span-1">
            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 block ml-1">Estimated Budget</label>
            <select
              name="budget" value={form.budget} onChange={handleChange}
              className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-sm outline-none focus:border-orange-500 focus:bg-white appearance-none cursor-pointer transition-all"
            >
              <option value="">Select Budget Range</option>
              <option>Below ₹25,000</option>
              <option>₹25,000 – ₹50,000</option>
              <option>₹50,000 – ₹1,00,000</option>
              <option>Above ₹1,00,000</option>
            </select>
          </div>

          {/* Project Details */}
          <div className="md:col-span-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 block ml-1">Brief Your Requirements</label>
            <textarea
              name="message" value={form.message} onChange={handleChange}
              placeholder="Tell us what you're looking for..."
              rows={4}
              className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-sm outline-none focus:border-orange-500 focus:bg-white transition-all resize-none"
            />
          </div>

          {/* Error Message */}
          {error && <motion.p initial={{opacity:0}} animate={{opacity:1}} className="md:col-span-2 text-xs font-bold text-red-500 ml-1">{error}</motion.p>}

          {/* Submit Button */}
          <div className="md:col-span-2 mt-4">
            <button
              type="submit" disabled={loading}
              className="w-full flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-700 text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-orange-600/20 active:scale-[0.98] disabled:opacity-50"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.484 2.247 2.247 3.484 5.232 3.484 8.404 0 6.556-5.332 11.888-11.888 11.888-2.003 0-3.963-.505-5.7-1.465l-6.326 1.689zm6.114-3.541l.351.208c1.611.957 3.469 1.463 5.383 1.463 5.562 0 10.088-4.526 10.088-10.088 0-2.693-1.049-5.225-2.954-7.131-1.905-1.905-4.437-2.954-7.131-2.954-5.562 0-10.088 4.526-10.088 10.088 0 1.892.529 3.737 1.531 5.343l.221.352-1.096 4.002 4.101-1.095zm10.702-7.182c-.313-.156-1.854-.914-2.141-1.018-.287-.104-.497-.156-.706.156-.21.312-.809 1.018-.992 1.226-.183.208-.365.234-.678.078-.313-.156-1.321-.487-2.515-1.551-.929-.828-1.556-1.851-1.738-2.163-.183-.312-.019-.481.137-.636.141-.139.313-.364.469-.546.156-.182.208-.312.313-.52.104-.208.052-.39-.026-.546-.078-.156-.706-1.701-.967-2.327-.254-.609-.512-.527-.706-.537-.183-.01-.39-.011-.599-.011-.208 0-.547.078-.834.39-.287.312-1.096 1.071-1.096 2.612 0 1.541 1.121 3.03 1.277 3.238.156.208 2.206 3.368 5.344 4.724.747.322 1.328.514 1.782.658.75.238 1.433.205 1.973.125.601-.088 1.854-.757 2.115-1.455.261-.698.261-1.299.183-1.425-.078-.126-.287-.208-.6-.364z"/></svg>
              <span>{loading ? "Preparing WhatsApp..." : "Send Request via WhatsApp"}</span>
            </button>
          </div>

          <p className="md:col-span-2 text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-4">
            We usually respond within 24 hours.
          </p>
        </form>
      </motion.div>
    </section>
  );
}