export default function Button({ color = "red", ...props }) {
  return <button {...props} style={{ backgroundColor: color }} />;
}
