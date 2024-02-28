<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <title>index jsp</title>
    <link rel="stylesheet" type="text/css" href="./style.css">
    <script src="https://code.jquery.com/jquery-latest.min.js"></script>
</head>
<body>

<div id="calendar-container">
    <div id="calendar-header">
        <span id="month-name"></span> <span id="year"></span>
    </div>
    <div id="calendar-days">
        <div>일</div>
        <div>월</div>
        <div>화</div>
        <div>수</div>
        <div>목</div>
        <div>금</div>
        <div>토</div>
    </div>
    <div id="calendar-dates"></div>
</div>

<!-- 금액 입력창 -->
<div id="amount-entry" style="display: none;">
    <h3>한 달 날짜</h3>
    <input type="text" id="startDate"/>
    <input type="text" id="endDate"/>
    <button onclick="calcDate()">선택</button>
    <h5>일수 : <h5 id="diffDate"></h5></h5>
    <h3>금액 입력</h3>
    <input type="number" id="amount" placeholder="금액 입력" />
    <button onclick="saveAmount()">저장</button>
    <h3>1일 금액</h3>
    <h3>2일 누적 금액</h3>
    <h3>3일 저금 금액</h3>
    <h3>총 누적 금액</h3>
</div>

<script src="./script.js"></script>

</body>
</html>
