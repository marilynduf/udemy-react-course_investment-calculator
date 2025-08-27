import { useState } from "react";

export default function Input({ name, label, type, value }) {
    return (
        <p>
            <label htmlFor={name}>{label}</label>
            <input type={type} id={name} value={value} required />
        </p>
    );
}
