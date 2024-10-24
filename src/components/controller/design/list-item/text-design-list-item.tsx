import React from "react";
import {ITextDesignListItem} from "@/interfaces/component/controller/i-text-design-list-item";

export function TextDesignListItem({design, handleRemove}: ITextDesignListItem){
    const id = design.id;
    const text = design.text;
    return (
        <div key={id} className='flex flex-row w-full h-full items-center justify-between'>
            <h1>{text}</h1>
            <button onClick={() => {handleRemove(id)}}>X</button>
        </div>
    );
}
