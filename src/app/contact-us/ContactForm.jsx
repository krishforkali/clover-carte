"use client";

import React, { useState } from "react";
import PhoneInputModule from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneInput =
    PhoneInputModule.default || PhoneInputModule;

const GOOGLE_SHEET_API =
    process.env.NEXT_PUBLIC_GOOGLE_SHEET_API;

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [phone, setPhone] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        company_name: "",
        email: "",
        product: "",
        location: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const sendEmail = async (e) => {
        e.preventDefault();

        if (loading) return;

        if (!GOOGLE_SHEET_API) {
            console.error(
                "NEXT_PUBLIC_GOOGLE_SHEET_API is not configured."
            );

            window.alert(
                "Something went wrong. Please try again later."
            );

            return;
        }

        const data = {
            name: formData.name.trim(),
            company_name: formData.company_name.trim(),
            email: formData.email.trim(),
            contact: phone.trim(),
            product: formData.product,
            location: formData.location.trim(),
            message: formData.message.trim(),
        };

        // Required field validation
        if (
            !data.name ||
            !data.company_name ||
            !data.email ||
            !data.contact ||
            !data.product ||
            !data.location ||
            !data.message
        ) {
            window.alert(
                "Please fill in all required fields."
            );

            return;
        }

        // Email validation
        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(data.email)) {
            window.alert(
                "Please enter a valid email address."
            );

            return;
        }

        // Phone validation
        if (data.contact.length < 8) {
            window.alert(
                "Please enter a valid phone number."
            );

            return;
        }

        console.log(
            "Submitting contact form:",
            data
        );

        try {
            setLoading(true);

            const response = await fetch(
                GOOGLE_SHEET_API,
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "text/plain;charset=utf-8",
                    },
                    body: JSON.stringify(data),
                }
            );

            if (!response.ok) {
                throw new Error(
                    `Request failed with status ${response.status}`
                );
            }

            const result =
                await response.json();

            console.log(
                "Google Sheet response:",
                result
            );

            if (!result.success) {
                throw new Error(
                    result.message ||
                        "Submission failed"
                );
            }

            window.alert(
                "Message submitted successfully!"
            );

            // Reset form
            setFormData({
                name: "",
                company_name: "",
                email: "",
                product: "",
                location: "",
                message: "",
            });

            setPhone("");
        } catch (error) {
            console.error(
                "Contact form submission error:",
                error
            );

            window.alert(
                "Unable to submit your message. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
       <form
    onSubmit={sendEmail}
    className="w-full min-w-0 flex flex-col gap-5 sm:gap-5"
>
    {/* ROW 1 */}
    <div className="grid w-full min-w-0 grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">

        <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            disabled={loading}
            className="w-full min-w-0 h-10 sm:h-9 border border-[#5F5F5F] rounded-lg px-3 sm:px-[10px] text-[12px] sm:text-[12px] text-[#0F0F0F] placeholder:text-[#5F5F5F] outline-none focus:border-[#018A06] transition-colors"
        />

        <input
            type="text"
            name="company_name"
            value={formData.company_name}
            onChange={handleChange}
            placeholder="Company Name"
            required
            disabled={loading}
            className="w-full min-w-0 h-10 sm:h-9 border border-[#5F5F5F] rounded-lg px-3 sm:px-[10px] text-[12px] sm:text-[12px] text-[#0F0F0F] placeholder:text-[#5F5F5F] outline-none focus:border-[#018A06] transition-colors"
        />

    </div>

    {/* ROW 2 */}
    <div className="grid w-full min-w-0 grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">

        <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            disabled={loading}
            className="w-full min-w-0 h-10 sm:h-9 border border-[#5F5F5F] rounded-lg px-3 sm:px-[10px] text-[12px] text-[#0F0F0F] placeholder:text-[#5F5F5F] outline-none focus:border-[#018A06] transition-colors"
        />

        <div className="w-full min-w-0 h-10 sm:h-9">

            <PhoneInput
                country="in"
                value={phone}
                onChange={(value) => setPhone(value)}
                disabled={loading}
                enableSearch={true}
                placeholder="Phone No."
                inputStyle={{
                    width: "100%",
                    height: "40px",
                    borderRadius: "8px",
                    border: "1px solid #5F5F5F",
                    fontSize: "12px",
                    fontFamily: "Plus Jakarta Sans",
                    color: "#0F0F0F",
                    paddingLeft: "48px",
                }}
                buttonStyle={{
                    height: "38px",
                    border: "none",
                    background: "transparent",
                    borderRadius: "8px 0 0 8px",
                }}
                containerStyle={{
                    width: "100%",
                    height: "40px",
                }}
            />

        </div>

    </div>

    {/* ROW 3 */}
    <div className="grid w-full min-w-0 grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">

        <select
            name="product"
            value={formData.product}
            onChange={handleChange}
            required
            disabled={loading}
            className="w-full min-w-0 h-10 sm:h-9 border border-[#5F5F5F] rounded-lg px-3 sm:px-[10px] text-[12px] text-[#5F5F5F] bg-white outline-none focus:border-[#018A06] transition-colors"
        >
            <option value="" disabled>
                Select Product
            </option>

            <option value="smart-vending-machine">
                Smart Vending Machine
            </option>

            <option value="custom-vending-machine">
                Customized Vending Machine
            </option>

            <option value="iot-vending-machine">
                IoT Enabled Vending Machine
            </option>

            <option value="other">
                Other
            </option>
        </select>

        <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Add your location"
            required
            disabled={loading}
            className="w-full min-w-0 h-10 sm:h-9 border border-[#5F5F5F] rounded-lg px-3 sm:px-[10px] text-[12px] text-[#0F0F0F] placeholder:text-[#5F5F5F] outline-none focus:border-[#018A06] transition-colors"
        />

    </div>

    {/* MESSAGE */}
    <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Describe the type of machine you want......."
        rows={4}
        required
        disabled={loading}
        className="w-full min-w-0 h-[120px] sm:h-[113px] resize-none border border-[#5F5F5F] rounded-lg p-3 sm:p-[10px] text-[12px] leading-[15px] text-[#0F0F0F] placeholder:text-[#5F5F5F] outline-none focus:border-[#018A06] transition-colors"
    />

    {/* SUBMIT */}
    <button
        disabled={loading}
        type="submit"
        className="w-full sm:w-[116px] h-12 sm:h-[52px] flex items-center justify-center bg-[#018A06] hover:bg-[#017505] text-white rounded-lg px-6 py-3 sm:py-[15px] font-semibold text-[16px] sm:text-[18px] leading-[22px] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
    >
        {loading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
            "Submit"
        )}
    </button>
</form>
    );
}