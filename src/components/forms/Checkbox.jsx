/**
 * Controlled checkbox with label
 *
 * @param {String} id              - HTML id (used to link input + label)
 * @param {Boolean} checked        - Current checked state
 * @param {String} label           - Text label
 * @param {(v: boolean) => void} onChange - Callback when toggled
 */
export function Checkbox({ checked, label, onChange, id }) {
  return (
    <div className="form-check">
      <input 
        id={id}
        type="checkbox"
        className="form-check-input"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label htmlFor={id} className="form-check-label">{label}</label>
    </div>
  );
}

