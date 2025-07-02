import { TechIcon } from "@/components/TechIcon";
import { twMerge } from "tailwind-merge";
import React, { Fragment } from "react";

export const ToolboxItems = ({ items, className, itemsWrapperClassname, }: {
    items: {
        name: string;
        iconType: React.ElementType;
    }[];
    className?: string;
    itemsWrapperClassname?: string;
}) => {
    return (
        <div className={twMerge("flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]", className)}>
            <div className={twMerge("flex flex-none py-0.5 gap-6 pr-6", itemsWrapperClassname)}>
                {[...Array(2)].fill(0).map((_, index) => (
                    <Fragment key={index}>
                        {items.map(item => (
                            <div key={item.name} className="inline-flex itmes-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg">
                                <TechIcon component={item.iconType} />
                                <span className="font-semibold">{item.name}</span>
                            </div>
                        ))}
                    </Fragment>
                ))}
            </div>
        </div>
    );
};