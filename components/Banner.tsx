function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl">Blog - Jean Desauw</h1>
        <h2 className="mt-5 md:mt-2">
          Bienvenue sur{' '}
          <span className="underline decoration-4 decoration-[#f7ab0a]">
            le blog préféré
          </span>{' '}
          de tous les développeurs.
        </h2>
      </div>

      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        Dernières features de Next.js 13 | Typescript | Tailwind CSS | Sanity
        Studio v.3
      </p>
    </div>
  )
}

export default Banner
