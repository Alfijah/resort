import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    function validate() {
        const newErrors: { [key: string]: string } = {};

        if (!formData.firstName.trim()) newErrors.firstName = t("contact.formError.firstName");
        if (!formData.lastName.trim()) newErrors.lastName = t("contact.formError.lastName");
        if (!formData.email.trim()) newErrors.email = t("contact.formError.email");
        if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = t("contact.formError.emailError");
        if (!formData.message.trim()) newErrors.message = t("contact.formError.messageError");

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (!validate()) return;

        // ✉️ Hier koppel je EmailJS, FormSpark of eigen API:
        // fetch("/api/contact", { method: "POST", body: JSON.stringify(formData) })

        alert(t("contact.submitMessage"));
    }

    const inputClass =
        "w-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-sky-900 transition";

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-2xl body-text mx-auto bg-white p-6 md:p-10 mt-8 shadow-sm space-y-6"
        >
            {/* NAAM VELDEN */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-left mb-1">{t("contact.formMeta.firstName")}</label>
                    <input
                        type="text"
                        className={inputClass}
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    />
                    {errors.firstName && <p className="text-red-600 text-sm">{errors.firstName}</p>}
                </div>

                <div>
                    <label className="block text-left mb-1">{t("contact.formMeta.lastName")}</label>
                    <input
                        type="text"
                        className={inputClass}
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
                    {errors.lastName && <p className="text-red-600 text-sm">{errors.lastName}</p>}
                </div>
            </div>

            {/* EMAIL */}
            <div>
                <label className="block text-left mb-1">{t("contact.formMeta.email")}</label>
                <input
                    type="email"
                    className={inputClass}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
            </div>

            {/* SUBJECT */}
            <div>
                <label className="block text-left mb-1">{t("contact.formMeta.subject")}</label>
                <input
                    type="text"
                    className={inputClass}
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
            </div>

            {/* MESSAGE */}
            <div>
                <label className="block text-left mb-1">{t("contact.formMeta.message")}</label>
                <textarea
                    className={inputClass}
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
                {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}
            </div>

            {/* SUBMIT KNOP */}
            <button
                type="submit"
                className="customGreen w-full hover:bg-red-400 transition-colors px-7 py-3 explore-button uppercase text-white cursor-pointer"
            >
                {t("contact.sendButton")}
            </button>
        </form>
    );
}
