export function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}

export function handleChange(e) {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
  setErrors((prev) => ({ ...prev, [name]: "" }));
}
