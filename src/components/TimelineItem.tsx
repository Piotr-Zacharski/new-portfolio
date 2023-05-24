import React from 'react';

interface Props {
    year: string;
    title: string;
    details: string;
}

function TimelineItem({ year, title, details }: Props) {
    return (
        <ol className="flex flex-col md:flex-row relative border-l">
            <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-slate-400 rounded-full mt-1.5 -left-1.5 border" />
                <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
               <span className="inline-block px-2 py-1 font-semibold text-white dark:text-slate-900 bg-pink-700 dark:bg-white rounded-md">
                  {year}
               </span>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        {title}
                    </h3>
                </p>
                <p className="my-2 text-base font-normal text-stone-500 dark:text-stone-400">
                    {details}
                </p>
            </li>
        </ol>
    )
}

export default TimelineItem;