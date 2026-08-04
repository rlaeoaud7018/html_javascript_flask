function getCurrentDate() {
    console.log('getCurrentDate() CALLED!!')

let days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

    // 날짜 시간
        let today = new Date();
        console.log('today: ', today);

        let year = today.getFullYear();
        let month = today.getMonth();
        let date = today.getDate();
        let day = today.getDay();

        str = `[${year}/${month + 1}/${date}/${days[day]}] `;
        // [2026/6/16/TUE]

        return str;
}
