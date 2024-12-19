export const CalcTimeToRead = (text) => {
    if (!text) {
        return "NaN"
    }
    const wpm = 225;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    if (time > 1)
        return `${time} mins read`
    return `${time} min read`
}

export const CalcDateTime = (utcTime) => {
    if (!utcTime || typeof utcTime !== 'string') {
        return 'Invalid date time';
    }
    const date = new Date(utcTime);
    if (isNaN(date.getTime())) {
        return 'Invalid date format';
    }
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Tháng trong JS bắt đầu từ 0
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}