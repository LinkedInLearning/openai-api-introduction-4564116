/**
 * Spinner component. Displays a spinner using |/-\| characters.
 * Two functions are exported:
 * - startSpinner: adds the spinner to the end of the current element and starts it.
 * - stopSpinner: stops the spinner and removes it from the current element.
 */

let spinner = null;
let spinnerInterval = null;
let spinnerIndex = 0;

export const startSpinner = (element) => {
  spinner = document.createElement("span");
  spinner.setAttribute("class", "spinner");
  spinner.innerHTML = "|";
  element.appendChild(spinner);
  spinnerInterval = setInterval(() => {
    spinnerIndex = (spinnerIndex + 1) % 4;
    spinner.innerHTML = ["|", "/", "-", "\\"][spinnerIndex];
  }, 100);
};

export const stopSpinner = () => {
  clearInterval(spinnerInterval);
  spinner.remove();
};
