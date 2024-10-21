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

const CREATE_RESULT = (file, fileID) => {
    const ORIG_FILE_SIZE_STRING = getFileSizeString(file.size);

    const P1 = document.createElement("p");
    P1.className = "results-title";
    P1.textContent = file.name;

    const P2 = document.createElement("p");
    P2.className = "results-size";
    P2.textContent = ORIG_FILE_SIZE_STRING;

    const DIV_ONE = document.createElement("div");
    DIV_ONE.appendChild(P1);
    DIV_ONE.appendChild(P2);

    const PROGRESS = document.createElement("progress");
    PROGRESS.id = `progress-${file.name}-${fileID}`;
    PROGRESS.className = "results-bar";
    PROGRESS.max = 10;
    PROGRESS.value = 0;

    const P3 = document.createElement("p");
    P3.id = `new-size-${file.name}-${fileID}`;
    P3.className = "results-size";

    const P4 = document.createElement("p");
    P4.id = `download-${file.name}-${fileID}`;
    P4.className = "results-download";

    const P5 = document.createElement("p");
    P5.id = `saved-${file.name}-${fileID}`;
    P5.className = "results-saved";

    const DIV_DL = document.createElement("div");
    DIV_DL.className = "divDL";
    DIV_DL.appendChild(P4);
    DIV_DL.appendChild(P5);

    const DIV_TWO = document.createElement("div");
    DIV_TWO.appendChild(P3);
    DIV_TWO.appendChild(DIV_DL);

    const LI = document.createElement("li");
    LI.appendChild(DIV_ONE);
    LI.appendChild(PROGRESS);
    LI.appendChild(DIV_TWO);

    document.querySelector('.results-list').appendChild(LI);
    displayResults();
}