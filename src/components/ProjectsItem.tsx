import Image from 'next/image'

interface Props {
    title: string;
    description: string;
    stack: { name: string, logo?: string }[];
}

export default function ProjectItem({title, description, stack}: Props) {
    // @ts-ignore
    return (
        <div className="flex p-4 gap-2 justify-center">
        <div className="border-2 border-stone-800 w-80 rounded-l">
            <div className="p-2 text-center">
                <h3 className="text-stone-800 text-xl font-bold">{title}</h3>
            </div>
            <div className="p-2 text-justify">
                <p className="text-sm">{description}</p>
            </div>
            <div className="flex flex-row p-4 text-center align-center justify-center w-full gap-4">
                {stack.map((item) => (
                    <p key={item.name} className="gap-2 rounded-full">
                        <Image width={30} height={30} src={item?.logo}  alt={item.name}/>
                    </p>
                ))}
            </div>
        </div>
        </div>
    )
}