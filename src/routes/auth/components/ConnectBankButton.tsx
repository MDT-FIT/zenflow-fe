import { cn } from '@/lib/utils'

export interface ConnectBankButtonProps {
  bank: string
  subtitle: string
  image: string
  link: string
}

export const ConnectBankButton = ({ bank, subtitle, image, link }: ConnectBankButtonProps) => {
  const isDisabled = !link

  return (
    <a
      href={link ?? '#'}
      aria-disabled={isDisabled}
      className={cn(
        'flex items-center gap-4 h-auto p-4 rounded-lg',
        'bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] transition hover:scale-101',
        { 'opacity-50 cursor-not-allowed **pointer-events-none**': isDisabled }
      )}
    >
      <div className="w-12 h-12 overflow-hidden rounded-md flex items-center justify-center">
        <img src={image} alt="bank-icon" className="max-w-none max-h-full" />
      </div>
      <div className="flex flex-col gap-1 text-left">
        <p className="title">Connect via {bank}</p>
        <p className="subtitle">{subtitle}</p>
      </div>
    </a>
  )
}
