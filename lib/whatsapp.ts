/**
 * Utility to generate WhatsApp wa.me links with pre-filled messages
 */

export function getWhatsAppLink(phoneNumber: string, message: string): string {
  // Remove any non-numeric characters from the phone number
  const cleanPhone = phoneNumber.replace(/\D/g, "");
  
  // URL encode the message
  const encodedMessage = encodeURIComponent(message);
  
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}
