import Link from "next/link"
import Image from "next/image";

const ContactSce = () => {
    return (
        <section className="bg-gray-200 py-16">
            <div className="w-full px-4">
                <h2 className="text-4xl  font-bold mb-8 text-center">✉️ Get in Touch!</h2>
                <div className="w-full flex justify-around">
                    <Image src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/illustration.svg" alt="Cofee Image" width={400} height={400} className="w-1/3 hidden md:block lg:block xl:block " />
                    <form onSubmit={(e)=>alert("We are facing some issue in processing please use whatsapp for contact.")}  className="space-y-4 p-0  sm:p-10 md:p-10 lg:p-10 xl:p10 w-full  md:w-3/5 lg:w-2/5 xl:w-2/5 ">
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
                </div>
            </div>
        </section >
    );
}

export default ContactSce;