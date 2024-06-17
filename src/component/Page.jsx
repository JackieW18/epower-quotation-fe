function Page({ children }) {
    return (
        <div className="bg-white mx-auto flex flex-col w-[21cm] h-[29.7cm] rounded shadow-lg shadow-spread-2 px-[1.5cm] pt-[1.5cm] pb-[1cm]">
            {children}
        </div>
    )
}

export default Page;