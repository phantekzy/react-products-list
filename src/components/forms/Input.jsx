/**
 * Controlled text input field
 * 
 * @param {String} value       - Current input value
 * @param {String} placeholder - Input placeholder text
 * @param {(s: string) => void} onChange - Callback when input changes
 */
export function Input({ value, placeholder, onChange }) {
  return (
    <input 
      className="form-control"
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

