document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#schedule-regist');
  const container = document.querySelector('.container');

  // 새 일정 추가 항목
  form.addEventListener('submit', (event) => {
      event.preventDefault();

      const inputFields = form.querySelectorAll('input[type="text"]');
      inputFields.forEach((input) => {
          const value = input.value.trim();
          if (value) {
              addScheduleItem(value);
              input.value = ""; // 항목 추가 후 입력 비우기
          }
      });
  });

  // 일정 항목 추가
  function addScheduleItem(text) {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'schedule-item mb-3';

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'form-check-input';

      const itemText = document.createElement('span');
      itemText.textContent = text;
      itemText.className = 'ms-2';

      itemDiv.appendChild(checkbox);
      itemDiv.appendChild(itemText);
      container.appendChild(itemDiv);
  }
});