import type { FC } from "react";

type Props = {
    tag: string
}

export const Tag: FC<Props> = ({ tag }) => {
    return <span className="bg-powder-blue/50 p-1.5 text-sm mr-2 rounded-md text-blue">
        #{tag}
    </span>
}