import { Link } from "react-router-dom"

function Home() {

    return (
        <div className="mx-auto container flex flex-col h-[100vh]">
            <h2 className="text-center w-full">Epower Quotation System</h2>

            <div className="flex-1 flex flex-row gap-4 justify-center">

                <Link to="/quotation">
                    <button className="w-[300px] h-[300px]">
                        New Quotation
                    </button>
                </Link>

                <Link className="w-[300px] h-[300px]" to="/">
                    <button className="w-[300px] h-[300px]">
                        Quotations Management
                    </button>
                </Link>

                <Link className="w-[300px] h-[300px]" to="/admin-settings">
                    <button className="w-[300px] h-[300px]">
                        Admin Settings
                    </button>
                </Link>

            </div>

        </div>
    )
}

export default Home