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
            let amountEntry = document.getElementById('amount-entry');
            // display 속성이 'block'이면 'none'으로, 그렇지 않으면 'block'으로 설정
            amountEntry.style.display = (amountEntry.style.display === 'block') ? 'none' : 'block';
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

// 한달 날짜 선택
// datepicker.js 파일 내용
function setDateMonth() {
    let startDate = document.getElementById('startDate');
    let endDate = document.getElementById('endDate');

    // HTML5 날짜 입력 타입 사용
    startDate.type = 'date';
    endDate.type = 'date';

    // 오늘 날짜를 문자열로 포맷팅
    let today = new Date().toISOString().split('T')[0];

    // 시작일과 종료일의 기본값 설정
    startDate.value = today;
    endDate.value = today;

    // 시작일의 변경에 따라 종료일의 최소 날짜를 설정
    startDate.addEventListener('change', function() {
        endDate.setAttribute('min', this.value);
        console.log(startDate.value)
    });

    // 종료일의 변경에 따라 시작일의 최대 날짜를 설정
    endDate.addEventListener('change', function() {
        startDate.setAttribute('max', this.value);
        console.log(endDate.value)
    });
}

// 문서 준비가 완료되면 initializeDatepickers 함수를 호출합니다.
document.addEventListener('DOMContentLoaded', function() {
    setDateMonth();
});

function calcDate() {
    let startDateValue = document.getElementById('startDate').value;
    let endDateValue = document.getElementById('endDate').value;

    let startDate = new Date(startDateValue + "T00:00:00");
    let endDate = new Date(endDateValue + "T00:00:00");

    let diffTime = endDate - startDate;

    // 밀리초 단위의 차이를 일수로 변환합니다. (1일 = 24시간 * 60분 * 60초 * 1000밀리초)
    let diffDays = diffTime / (1000 * 60 * 60 * 24);

    console.log(diffDays); // 일수 차이를 콘솔에 출력합니다.

    $.ajax({
        url: 'index.jsp', // 데이터를 처리할 JSP 페이지의 URL
        type: 'POST', // 데이터를 POST 방식으로 전송
        data: {
            value: diffDays // 서버로 전송할 데이터
        },
        success: function() {
            $('#diffDate').text(diffDays);
        },
        error: function(xhr, status, error) {
            // 오류 처리
            console.error("Error: " + error);
        }
    });
}


