// DOM 요소 선택
const umbrella = document.getElementById('umbrella');

// 우산 클릭 이벤트 리스너 등록
umbrella.addEventListener('click', () => {
    // closed 클래스를 토글(추가/제거)하여 접고 펴는 동작을 수행합니다.
    umbrella.classList.toggle('closed');
});