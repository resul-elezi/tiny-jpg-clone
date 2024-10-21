"use strict";

const INIT_APP = () => {
    const DROP_AREA = document.querySelector(".droparea");

    const ACTIVE = () => DROP_AREA.classList.add("gree-border");
    const INACTIVE = () => DROP_AREA.classList.remove("gree-border");
    const PREVENTS = (e) => e.preventDefault();
}