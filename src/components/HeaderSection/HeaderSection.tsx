export function HeaderSection() {
  return (
    <div className="flex flex-col w-full justify-center items-center py-16 px-4">
      <div className="border-b-4 border-custom-700 dark:border-custom-500">
        <h1 className="font-black text-center text-slate-600 dark:text-slate-300">
          Color Theme Picker
        </h1>
        <p className="text-lg sm:text-xl text-center font-semibold text-slate-500 dark:text-slate-400 py-4">
          Play around with different colors or just enter your favorite one.
        </p>
      </div>
      {/* <div className="w-[400px] h-[400px] bg-white flex justify-center items-center">
        <div className="w-[400px] h-[400px] rainbow-circle rounded-full" />
      </div> */}
    </div>
  )
}
