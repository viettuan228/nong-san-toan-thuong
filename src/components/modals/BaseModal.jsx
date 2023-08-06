import React from 'react'

function BaseModal(props) {
    const { children, status, closeModal } = props

    return (
        <>
            {status && (
                <div className="modal w-full min-h-screen h-full overflow-hidden fixed flex top-0 left-0 items-center justify-center z-[1001]">
                    <div className="w-full absolute top-0 left-0 h-full z-[1000] overflow-hidden bg-black opacity-80" />

                    <div className="content p-4 relative bg-white rounded z-[1001] opacity-100">
                        <button
                            className="w-7 h-7 absolute flex items-center justify-center rounded-full bg-red opacity-80 hover:opacity-100 transition top-[-14px] right-[-14px]"
                            onClick={closeModal}
                        >
                            <i className="fa-solid fa-xmark text-white"></i>
                        </button>
                        {children}
                    </div>
                </div>
            )}
        </>
    )
}

export default BaseModal
