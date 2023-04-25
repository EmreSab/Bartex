function toggleDropdown(orangeBox, event) {
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
function toggleSelectedItem(event, item) {
    event.stopPropagation(); // Add this line to stop event propagation
    const orangeBox = item.closest('.orange-box');
    const counter = orangeBox.querySelector('.circle');

    if (item.classList.contains('selected')) {
        item.classList.remove('selected');
        counter.textContent = parseInt(counter.textContent) - 1;
    } else {
        item.classList.add('selected');
        counter.textContent = parseInt(counter.textContent) + 1;
    }
}
function increaseOz(event, element) {
    event.stopPropagation();
    const infoBox = element.closest('.info-box');
    const ozText = infoBox.querySelector('.info-box-text-left');
    let currentOz = parseFloat(ozText.textContent);
    currentOz += 0.5;
    ozText.textContent = currentOz.toFixed(1) + " OZ"; // Add " OZ" after the number
}

function decreaseOz(event, element) {
    event.stopPropagation();
    const infoBox = element.closest('.info-box');
    const ozText = infoBox.querySelector('.info-box-text-left');
    let currentOz = parseFloat(ozText.textContent);
    currentOz -= 0.5;
    if (currentOz < 0) currentOz = 0;
    ozText.textContent = currentOz.toFixed(1) + " OZ"; // Add " OZ" after the number
}

function toggleEditMode() {
    const main = document.querySelector('main');
    main.classList.toggle('edit-mode');
    const editBox = document.querySelector('.edit-box');
    if (main.classList.contains('edit-mode')) {
        editBox.textContent = 'Done';
    } else {
        editBox.textContent = 'Edit';
    }
}

