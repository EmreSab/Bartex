function toggleDropdown(orangeBox) {
    const header = orangeBox.querySelector(".dropdown-header");
    const content = orangeBox.querySelector(".dropdown-content");
    if (content.style.display === "block") {
        content.style.display = "none";
        orangeBox.style.marginBottom = "20px";
        let nextOrangeBox = orangeBox.nextElementSibling;
        while (nextOrangeBox) {
            if (nextOrangeBox.parentNode === content.parentNode) {
                nextOrangeBox.style.marginTop = "20px";
            }
            nextOrangeBox = nextOrangeBox.nextElementSibling;
        }
    } else {
        content.style.display = "block";
        orangeBox.style.marginBottom = `${content.clientHeight + 20}px`;
        let nextOrangeBox = orangeBox.nextElementSibling;
        let margin = content.clientHeight + 5; // set extra margin value to 5px
        while (nextOrangeBox) {
            if (nextOrangeBox.parentNode === content.parentNode) {
                nextOrangeBox.style.marginTop = `${margin}px`;
                margin += 5; // increase margin value for each subsequent orange box
            }
            nextOrangeBox = nextOrangeBox.nextElementSibling;
        }
    }
}