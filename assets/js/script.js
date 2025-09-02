document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("table").forEach(table => {
        if (!table.parentElement.classList.contains("table-scroll")) {
            const wrapper = document.createElement("div");
            wrapper.className = "table-scroll";
            table.parentNode.insertBefore(wrapper, table);
            wrapper.appendChild(table);
        }
    });

    document.querySelectorAll(".table-scroll").forEach(scrollEl => {
        const isRTL = getComputedStyle(scrollEl).direction === "rtl";

        const arrow = document.createElement("div");
        arrow.className = "scroll-arrow";
        arrow.textContent = isRTL ? "←" : "→";
        scrollEl.appendChild(arrow);

        arrow.style[isRTL ? "left" : "right"] = "10px";

        const checkScroll = () => {
            const hasScroll = scrollEl.scrollWidth > scrollEl.clientWidth;
            const hasScrolled = Math.abs(scrollEl.scrollLeft) > 10;

            if (!hasScroll) {
                arrow.style.display = "none";
                return;
            }

            if (hasScrolled) {
                arrow.classList.add("hidden");
            } else {
                arrow.classList.remove("hidden");
            }
        };

        scrollEl.addEventListener("scroll", checkScroll);
        window.addEventListener("resize", checkScroll);
        checkScroll();
    });
});
