import { X } from 'phosphor-react'
import {
  ToastClose,
  ToastContainer,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'

export interface ToastProps {
  title: string
  description: string
}

export function Toast({ title, description }: ToastProps) {
  return (
    <ToastContainer>
      <ToastRoot>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
        <ToastClose>
          <X />
        </ToastClose>
      </ToastRoot>
      <ToastViewport />
    </ToastContainer>
  )
}
