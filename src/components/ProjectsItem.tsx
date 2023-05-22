import Image from 'next/image'

interface Props {
    title: string;
    stack: { name: string, logo?: string }[];
    link?: string | undefined;
    src?: string | undefined;
}

export default function ProjectItem({title, stack, link, src}: Props) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-stone-700 border-t-pink-700 border-r-pink-700 rounded-md overflow-hidden"
        >
            <Image
                src={src}
                alt="portfolio"
                className="w-full h-36 md:h-48 object-cover cursor-pointer"
            />
            <div className="w-full p-4">
                <h3 className="lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">{title}</h3>
                <span className="flex w-full gap-2 flex-row items-center justify-center text-xs md:text-sm dark:text-white ">
                    {stack.map(item => (
                        <span key={item.name} className=" flex flex-row px-2 py-1 font-semibold rounded-md">
                            <Image width={30} height={30} src={item.logo} alt={item.name} />
                  </span>
                    ))}
                </span>
            </div>
        </a>
    )
}