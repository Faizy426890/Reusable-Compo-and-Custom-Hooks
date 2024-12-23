'use client'

import * as React from 'react'

interface ModalProps {
  isOpen?: boolean
  onClose?: () => void
  children: React.ReactNode
  title?: string
  onConfirm?: () => void
  confirmation?: boolean
  dark?: boolean
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  onConfirm,
  confirmation, 
  dark,
}) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 z-50 flex justify-center items-center">
      <div className={`relative w-full max-w-lg max-h-[85vh] border border-gray-500 border-opacity-60 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full ${dark ? 'bg-[#171717]' : 'bg-white'}`}>
        <div className={`flex flex-col space-y-1.5 p-6 ${dark ? 'text-white' : 'text-foreground'}`}>
          {title && <h2 className="text-lg font-semibold leading-none tracking-tight">{title}</h2>}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
          </button>
        </div>
        <div className={`p-6 pt-0  ${dark ? 'text-gray-400' : 'text-gray-600' } `}>{children}</div>
        <div className={`flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 p-6 pt-0 ${dark ? 'text-white' : 'text-foreground'}`}>
          <button
            onClick={onClose}
            className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-500 border-opacity-60 border-input h-10 px-4 py-2 mt-2 sm:mt-0 ${dark ? 'bg-[#171717] hover:bg-[#2e2e2e] hover:text-accent-foreground' : 'bg-background hover:bg-gray-100 hover:text-accent-foreground'}`}
          >
            {!confirmation ? 'Close' : 'Cancel'}
          </button>
          {!confirmation && (
            <button
              onClick={onConfirm}
              className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 ${dark ? 'bg-white text-[#171717] hover:bg-gray-200' : 'bg-[#151515] text-gray-100 hover:bg-[#343434]'}`}
            >
              Continue
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Modal

