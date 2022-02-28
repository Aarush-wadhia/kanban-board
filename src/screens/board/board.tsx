import React, {useState, FunctionComponent} from "react";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";


const Board: FunctionComponent = () => {
    return (
        <div className="flex justify-center h-full bg-slate-600">
            <DragDropContext onDragEnd={result => console.log('result', result)}>

            </DragDropContext>
        </div>
    )
}

export default Board;
