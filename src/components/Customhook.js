import React from "react";
import {useForm} from "./useForm";

export default function CustomHookSection() {
  const [formvalue, setFormvalue] = useForm({ name: "", email: "" });
  return (
    <div>
      <p>Custom Hooks</p>
      <input
        type="text"
        name="name"
        id="name"
        value={formvalue.name}
        onChange={setFormvalue}
      />
      <input
        type="email"
        name="email"
        id="email"
        value={formvalue.email}
        onChange={setFormvalue}
      />
      <p>Current Value</p>
      <p>name: {formvalue.name}</p>
      <p>email: {formvalue.email}</p>
    </div>
  );
}