"use strict";
import Counter from "./counter.js";

const COUNTER = new Counter();
const INIT_APP = () => {
    const DROP_AREA = document.querySelector(".droparea");

    const ACTIVE = () => DROP_AREA.classList.add("gree-border");
    const INACTIVE = () => DROP_AREA.classList.remove("gree-border");
    const PREVENTS = (e) => e.preventDefault();

    ["dragover", "drop"].forEach(evtName => {
        DROP_AREA.addEventListener(evtName, PREVENTS);
    });
    ["dragover", "drop"].forEach(evtName => {
        DROP_AREA.addEventListener(evtName, ACTIVE);
    });
    ["dragover", "drop"].forEach(evtName => {
        DROP_AREA.addEventListener(evtName, INACTIVE);
    });

    DROP_AREA.addEventListener("drop", HANDLE_DROP);
}

document.addEventListener("DOMContentLoaded", INIT_APP);

const HANDLE_DROP = (e) => {
    const DT = e.dataTransfer;
    const FILES = DT.FILES;
    const FILE_ARRAY = [...FILES];
    
    if (FILE_ARRAY.length > 20) return alert("Too many files!");
    HANDLE_FILES(FILE_ARRAY);
}

const HANDLE_FILES = (FILE_ARRAY) => {
    FILE_ARRAY.forEach(file => {
        const FILE_ID = COUNTER.getValue;
        COUNTER.incrementValue();
        if (((file.size / 1024) / 1024) > 4) return alert("File over 4 MB");
        CREATE_RESULT(file, FILE_ID);
        uploadFile(file, FILE_ID);
    })
}