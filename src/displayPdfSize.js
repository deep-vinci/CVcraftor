window.addEventListener("load", () => {
    let displayPdf = document.querySelector(".display-pdf")
    let a4SizePaper = document.querySelector(".a4-size");

    let displayPdfContainer = displayPdf.getBoundingClientRect();

    // a4 sizing of the a4SizePaper
    a4SizePaper.style.width = `${displayPdfContainer.height / 1.414}px`;
    a4SizePaper.style.height = `${displayPdfContainer.height}px`;
})