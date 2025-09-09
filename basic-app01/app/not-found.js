import React from 'react'

const notfound = () => {
    return (
        <div className=" h-[80vh] w-[100%] flex justify-center items-center text-center flex-col ">
            <div className="mb-8">
                <div className="w-24 h-24 mx-auto mb-6 bg-gray-100  rounded-full flex items-center justify-center">
                    <svg
                        className="w-12 h-12 text-gray-400 "
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                    </svg>
                </div>
            </div>
            <div className=" text-3xl">404 || Notfound</div>
        </div>
    )
}

export default notfound