import React from 'react';

interface Props {
    children: React.ReactNode;
    id?: string;
}

function Title({ children, id }: Props) {
    return (
        <h1
            id={id && id}
            className="text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900 dark:text-white"
        >
            {children}
        </h1>
    )
}

export default Title;