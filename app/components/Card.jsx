
export function CtaCard() {
  return (
    <div class="max-w-md border-2 mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div class="md:flex">
    <div class="md:shrink-0  grayscale ">
      <img className="h-48 w-full object-cover/ md:h-full md:w-full"
       src="/vercel.svg" alt="Modern building architecture"/>
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-700 font-semibold">Company retreats</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
      <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
    </div>
  </div>
</div>
  )
}
