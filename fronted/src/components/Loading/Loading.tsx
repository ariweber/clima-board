import './Loading.css'

type LoadingProps = {
  text?: string
}

export default function Loading({ text }: LoadingProps) {
  return (
    <div className="loading">
      <div className="loading-spinner" />
      {text && <p className="loading-text">{text}</p>}
    </div>
  )
}
