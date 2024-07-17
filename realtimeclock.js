function updateDateTime() {
    const clockElement = document.getElementById('real-time-clock');
    const currentTime = new Date();

    // Compute and format datetime values
    const month = currentTime.getMonth().toString().padStart(2, '0');
    const day = currentTime.getDate().toString().padStart(2, '0');
    const year = currentTime.getFullYear().toString().padStart(4, '0');
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');
    const milliseconds = currentTime.getMilliseconds().toString().slice(0, 2);
    // Construct the date and time string in the desired format.
    const dateTimeString = `${year} ${month} ${day} ${hours}:${minutes}:${seconds}:${milliseconds}`;
    clockElement.textContent = dateTimeString;
}

// Update the date and time every second (1000 milliseconds).
setInterval(updateDateTime, 1);

// Initial update.
pdateDateTime();
