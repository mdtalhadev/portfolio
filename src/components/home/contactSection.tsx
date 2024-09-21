import Link from "next/link"

const ContactSce = () => {
    return (
        <section className="bg-gray-200 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-8 text-center">✉️ Get in Touch!</h2>
                <div className="max-w-md mx-auto">
                    <form action="https://fabform.io/f/xxxxx" method="post" className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block font-bold mb-2">Your Name</label>
                            <input type="text" id="name" name="name" className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" placeholder="Enter your name" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block font-bold mb-2">Your Email</label>
                            <input type="email" id="email" name="email" className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" placeholder="Enter your email" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block font-bold mb-2">Your Message</label>
                            <textarea name="message" id="message" rows={4} className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" placeholder="Enter your message"></textarea>
                        </div>
                        <button type="submit" className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">Send Message 🚀</button>
                    </form>
                    <p className="mt-4 text-center">Prefer email? Send me an email <Link href="https://veilmail.io/irish-geoff" className="text-blue-600 font-bold hover:underline">https://veilmail.io/irish-geoff</Link> instead!</p>
                </div>
            </div>
        </section >
    );
}

export default ContactSce;