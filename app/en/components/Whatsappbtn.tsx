import React from "react";

interface Props {
    message?: string;
    className?: string;
}

const WhatsappBtn: React.FC<Props> = ({ message, className }) => {
    const phone = "966576150857"; // +966 576150857
    const waUrl = `https://wa.me/${phone}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

    return (
        <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
            aria-label="Open WhatsApp chat"
            style={{
                position: "fixed",
                left: 20,
                bottom: 20,
                width: 56,
                height: 56,
                borderRadius: "50%",
                backgroundColor: "#25D366",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                zIndex: 9999,
                textDecoration: "none",
            }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="white"
                aria-hidden
            >
                <path d="M20.52 3.48A11.94 11.94 0 0012 .5 11.94 11.94 0 003.48 3.48 11.93 11.93 0 00.5 12c0 2.11.55 4.16 1.6 5.98L.01 23.5l5.7-1.49A11.93 11.93 0 0012 23.5c3.2 0 6.2-1.25 8.48-3.52A11.94 11.94 0 0023.5 12a11.94 11.94 0 00-1-4.52zM12 21.5c-2.02 0-3.95-.6-5.64-1.72l-.4-.25-3.38.88.9-3.3-.26-.42A9.5 9.5 0 012.5 12 9.5 9.5 0 0112 2.5 9.5 9.5 0 0121.5 12 9.5 9.5 0 0112 21.5z" />
                <path d="M17.2 14.1c-.3-.15-1.78-.88-2.06-.98-.27-.1-.47-.15-.67.15-.2.3-.78.98-.96 1.18-.18.2-.36.22-.67.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.79-1.67-2.09-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2 0-.38-.02-.52-.02-.13-.67-1.62-.92-2.22-.24-.59-.48-.51-.66-.52-.17-.01-.37-.01-.57-.01s-.52.07-.79.37c-.27.3-1.05 1.03-1.05 2.5 0 1.47 1.08 2.9 1.22 3.1.14.2 2.11 3.3 5.12 4.63 3.01 1.34 3.01.9 3.56.84.55-.07 1.78-.72 2.03-1.41.25-.69.25-1.29.18-1.41-.07-.12-.27-.19-.57-.34z" />
            </svg>
        </a>
    );
};

export default WhatsappBtn;