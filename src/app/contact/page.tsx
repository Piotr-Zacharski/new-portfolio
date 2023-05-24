import Title from "@/components/Title";

export default function Contact() {
    return (
        <div className="flex flex-col mb-10 mx-auto my-20">
            <div className="flex justify-center items-center">
                <form
                    action="https://getform.io/f/44aff8ba-cdc3-4107-9883-88fdf276bf4b"
                    method="POST"
                    className="flex flex-col w-full md:w-7/12"
                >
                    <Title>Contact</Title>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="p-2 bg-transparent border-l-slate-700 border-t-pink-700 border-r-pink-700 border-b-slate-700 border-2 rounded-md focus:outline-none"
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        className="my-2 p-2 bg-transparent border-l-slate-700 border-t-pink-700 border-r-pink-700 border-b-slate-700 border-2 rounded-md focus:outline-none"
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        rows={10}
                        className="p-2 mb-4 bg-transparent border-l-slate-700 border-t-pink-700 border-r-pink-700 border-b-slate-700 border-2 rounded-md focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="text-center inline-block border border-l-pink-700 border-t-pink-700 border-r-slate-700 border-b-slate-700 px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-slate-700 to-pink-700 drop-shadow-md hover:border-l-slate-700 hover:border-t-slate-700 hover:border-r-pink-700 hover:border-b-pink-700 hover:bg-gradient-to-r hover:from-pink-700 hover:to-slate-700 hover:text-white"
                    >
                        Work with me 😉
                    </button>
                </form>
            </div>
        </div>
    )
}