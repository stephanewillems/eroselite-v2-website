export function capitalizeFirstLetter(value?: string) {
  if (!value) {
    return "";
  }

  return String(value).charAt(0).toUpperCase() + String(value).slice(1);
}
