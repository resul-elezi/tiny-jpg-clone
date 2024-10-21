"use strict";

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

    DROP_AREA.addEventListener("drop", handleDrop);
}