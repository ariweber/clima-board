import './InputUser.css'

type InputUserProps = {
  value: string
  onChange: (value: string) => void
}

export default function InputUser({ value, onChange }: InputUserProps) {
  return (
    <input
      className="input-user"
      type="text"
      placeholder="הכנס את שמך"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}
