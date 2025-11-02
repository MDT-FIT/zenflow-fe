export interface ConnectBankButtonProps {
  bank: string
  subtitle: string
  image: string
  link: string
}

export const ConnectBankButton = ({ bank, subtitle, image, link }: ConnectBankButtonProps) => {
  return (
    <a
      href={link}
      className="flex items-center gap-2 h-auto p-4 bg-[rgba(255,255,255,0.05)] rounded-lg"
    >
      <img src={image} alt="bank-icon" />
      <div className="flex flex-col gap-1 text-left">
        <p className="title">Connect via {bank}</p>
        <p className="subtitle">{subtitle}</p>
      </div>
    </a>
  )
}
