export default function validateName(name) {
  const NAME_MIN_LENGTH = 12;
  return name.length > NAME_MIN_LENGTH;
}
