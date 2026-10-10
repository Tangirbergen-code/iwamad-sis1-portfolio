// ==========================================================================
// 1. ПЕРЕКЛЮЧЕНИЕ ТЕМЫ (DARK / LIGHT MODE)
// ==========================================================================
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

themeToggleBtn.addEventListener('click', () => {
  // Определяем текущую тему
  const currentTheme = htmlElement.dataset.theme;
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  // Устанавливаем новую тему на <html>
  htmlElement.dataset.theme = newTheme;

  // Обновляем надпись на кнопке
  themeToggleBtn.textContent = newTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// ==========================================================================
// 2. ВАЛИДАЦИЯ КОНТАКТНОЙ ФОРМЫ
// ==========================================================================
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const formSuccess = document.getElementById('form-success');

// Регулярное выражение для проверки формата Email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

contactForm.addEventListener('submit', (e) => {
  // Отменяем стандартную отправку формы и перезагрузку страницы
  e.preventDefault();

  // Очищаем предыдущие ошибки и сообщение об успехе
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  formSuccess.textContent = '';

  let isValid = true;

  // 1. Валидация имени
  if (!nameInput.value.trim()) {
    nameError.textContent = 'Please enter your name.';
    isValid = false;
  }

  // 2. Валидация Email (две разные ошибки: пустое поле ИЛИ неверный формат)
  const emailValue = emailInput.value.trim();
  if (!emailValue) {
    emailError.textContent = 'Please enter your email address.';
    isValid = false;
  } else if (!emailRegex.test(emailValue)) {
    emailError.textContent = 'Please enter a valid email address (e.g., name@example.com).';
    isValid = false;
  }

  // 3. Валидация сообщения
  if (!messageInput.value.trim()) {
    messageError.textContent = 'Please enter a message.';
    isValid = false;
  }

  // Если все поля заполнены верно
  if (isValid) {
    formSuccess.textContent = 'Thank you! Your message has been sent successfully.';
    contactForm.reset();
  }
});