"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

const fields = [
  { name: "username", placeholder: "Username" },
  { name: "email", type: "email", placeholder: "Email" },
  { name: "password", type: "password", placeholder: "Create your password" },
  {
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm your password",
  },
];

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const router = useRouter();

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (Object.keys(formData).length < fields.length) return;
    // fetch creation de compte, verification du resultat
    if (
      fields.some(field => !formData[field.name]) ||
      formData.password !== formData.confirmPassword
    )
      return router.push("/signup/failure");
    router.push("/signup/success");
  };

  return (
    <main id="main" className={styles.main}>
      <h1>Sign Up</h1>
      <form id="signup" onSubmit={handleSubmit}>
        {fields.map(field => (
          <input key={field.name} onChange={handleChange} {...field} />
        ))}
        <button
          type="submit"
          disabled={Object.keys(formData).length < fields.length}
        >
          Submit
        </button>
      </form>
      <button
      onClick={() => router.push("/")}
      >
          Go to welcome page
        </button>
    </main>
  );
}
