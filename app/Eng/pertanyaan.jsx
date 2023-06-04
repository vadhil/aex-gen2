"use client"
import { motion } from 'framer-motion';

export default function Pertanyaan() {
  const CardVariantsLeft = {
    offscreen: {
      x: -300,
      rotate: 0
    },
    onscreen: {
      x: 0,
      rotate: 0,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <section className="py-9">
      <motion.div
        className="container mx-auto bg-warning"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <div className="flex justify-center">
          <motion.h3
            variants={CardVariantsLeft}
            className="sub-title-primary"
          >
            WEBSITE Q&A
          </motion.h3>
        </div>
        <div className="flex justify-center">
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className="sub-title-primary"
          >
            QUESTIONS ABOUT WEBSITE DEVELOPMENT
          </motion.h3>
        </div>
        <div className="max-w-4xl mx-auto p-8 flex flex-col gap-3">
          <motion.details
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className="open:bg-white border p-4 open:ring-1 open:ring-black/5 open:shadow-lg rounded-lg"
            open
          >
            <summary className="md:text-lg text-md text-slate-700 font-semibold select-none">
              Why do I need a website?
            </summary>
            <div className="mt-3 text-sm md:text-md text-slate-600">
              <p>Having a website has many advantages, not only expanding the reach of your business but also making your business look more professional.</p>
            </div>
          </motion.details>
          <motion.details
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className="open:bg-white border p-4 open:ring-1 open:ring-black/5 open:shadow-lg rounded-lg"
            close
          >
            <summary className="md:text-lg text-md text-slate-700 font-semibold select-none">
              What do I need to prepare?
            </summary>
            <div className="mt-3 text-sm md:text-md text-slate-600">
              <p>All you need to prepare is the idea, and we will bring that idea to life.</p>
            </div>
          </motion.details>
          <motion.details
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className="open:bg-white border p-4 open:ring-1 open:ring-black/5 open:shadow-lg rounded-lg"
            close
          >
            <summary className="md:text-lg text-md text-slate-600 font-semibold select-none">
              What will I get?
            </summary>
            <div className="mt-3 text-sm text-slate-600">
              <p>You will get a published website with all the features included in the package you choose.</p>
            </div>
          </motion.details>
          <motion.details
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className="open:bg-white border p-4 open:ring-1 open:ring-black/5 open:shadow-lg rounded-lg"
            close
          >
            <summary className="md:text-lg text-md text-slate-600 font-semibold select-none">
              Are there any additional costs?
            </summary>
            <div className="mt-3 text-sm text-slate-600">
              <p>No. There are no additional costs for website development. The only cost you might incur is for renewing your domain, which is approximately +-Rp.16k (for .xyz, .info domains) or +-Rp.150k (for .com domains) per year.</p>
            </div>
          </motion.details>
        </div>
      </motion.div>
    </section>
  );
}
