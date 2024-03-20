document.addEventListener('DOMContentLoaded', function() {
    let today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();

    let months = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];

    document.getElementById('month-name').innerHTML = months[currentMonth];
    document.getElementById('year').innerHTML = currentYear;

    generateCalendar(currentMonth, currentYear);

    // 날짜 클릭 이벤트를 처리하는 함수
    const dates = document.querySelectorAll('#calendar-dates div');
    dates.forEach(function(date) {
        date.addEventListener('click', function() {
            document.getElementById('amount-entry').style.display = 'block'; // 금액 입력창 표시
        });
    });
});

function generateCalendar(month, year) {
    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    let calendar = document.getElementById('calendar-dates');
    calendar.innerHTML = ''; // 이전 셀을 지웁니다.

    // 이전 달의 날들에 대한 빈 셀을 생성합니다.
    for (let i = 0; i < firstDay; i++) {
        let cell = document.createElement("div");
        calendar.appendChild(cell);
    }

    // 달에 있는 날들에 대한 셀을 생성합니다.
    for (let i = 1; i <= daysInMonth; i++) {
        let cell = document.createElement("div");
        cell.innerHTML = i;
        calendar.appendChild(cell);
    }
}

// 금액 저장 함수
function saveAmount() {
    let value = document.getElementById('amount').value;
    const amount = value;
    console.log('입력된 금액:', amount); // 실제 애플리케이션에서는 여기서 입력된 금액을 처리

    // 입력창 숨기기
    document.getElementById('amount-entry').style.display = 'none';
}

