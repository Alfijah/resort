import WhatsApp from "../tools/Whatsapp"

export default function WhatsAppIcon() {
    return(
        <div className="fixed bottom-13 right-2 z-50">
          <WhatsApp
            variant="icon"
            iconClassName="text-white text-2xl"
            className="customGreen p-1 rounded-full shadow-lg hover:bg-red-400 transition"
          />
        </div>
    )
}