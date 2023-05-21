import React from 'react'

export default function Pertanyann() {
  return (
    <section className="h-screen py-9">
    <h3 className="text-lg font-semibold px-10 text-primary text-center">
      PERTANYAAN-PERTANYAAN TENTANG PEMBUATAN WEBSITE</h3>
    <div class="max-w-lg mx-auto p-8 flex flex-col gap-3">
        <details class="open:bg-white border p-4 dark:open:bg-slate-900 open:ring-1 open:ring-black/5
         dark:open:ring-white/10 open:shadow-lg rounded-lg" open>
          <summary class="text-sm leading-6  text-slate-900 dark:text-white font-semibold select-none">
            Apa yang perlu dipersiapkan?
          </summary>
          <div class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
            <p>yang perlu anda persiapkan hanya ide dan kami akan mewujudkan ide tersebut</p>
          </div>
        </details>
        <details class="open:bg-white border p-4 dark:open:bg-slate-900 open:ring-1 open:ring-black/5
         dark:open:ring-white/10 open:shadow-lg rounded-lg" open>
          <summary class="text-sm leading-6  text-slate-900 dark:text-white font-semibold select-none">
            Apa yang akan saya dapatkan?
          </summary>
          <div class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
            <p>yang perlu anda persiapkan hanya ide dan kami akan mewujudkan ide tersebut</p>
          </div>
        </details>
    </div>
    </section>
  )
}
