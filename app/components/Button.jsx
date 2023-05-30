
export const Button = (content) => {
  return (
    <button className="bg-secondary p-3 px-4 shadow-md md:mt-3/
    rounded-full transition-all duration-900 ease-in 
    hover:shadow-2xl
    font-semibold text-primary">{content}</button>
  )
}
export const SmallButton = (content) => {
  return (
    <button className="bg-secondary p-3 px-4 rounded-none shadow-lg md:mt-3/
    hover:rounded-full transition-all duration-900 ease-in
    font-semibold text-primary">{content}</button>
  )
}
export const ButtonPrimary = (content) => {
  return (
    <button className="bg-primary p-3 px-4 rounded-none shadow-lg md:mt-3/
    hover:rounded-full transition-all duration-900 ease-in
    font-semibold text-white">{content}</button>
  )
}
