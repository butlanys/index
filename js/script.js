const notification = document.getElementById('notification');
const closeBtn = document.getElementById('close-btn');
const siteTitle = document.querySelector('.site-title');
const notificationText = document.querySelector('#notification p');
function getGreeting() {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
        return '早上好';
    } else if (currentHour >= 12 && currentHour < 18) {
        return '下午好';
    } else {
        return '晚上好';
    }
}

function showNotification() {
    notificationText.textContent = `${getGreeting()}，欢迎来到butlanys的小站`;
    notification.style.display = 'block';
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);

    setTimeout(() => {
        hideNotification();
    }, 3000);
}

function hideNotification() {
    notification.classList.remove('show');
    setTimeout(() => {
        notification.style.display = 'none';
    }, 500);
}

function animateTitle() {
    siteTitle.classList.add('show');
}

// 事件监听
closeBtn.addEventListener('click', hideNotification);

// 页面加载完成后执行
window.addEventListener('load', () => {
    showNotification();
    setTimeout(animateTitle, 500); // 延迟显示标题动画
    outputDiv.textContent = text;
});

window.addEventListener('load', function() {
    const siteTitle = document.querySelector('.site-title');
    const sitebox = document.querySelector('.sitebox');
  
    siteTitle.classList.add('show');
  
    setTimeout(() => {
      sitebox.style.animationPlayState = 'running'; // 触发动画
    }, 1000); // 延迟 500 毫秒（0.5 秒）
  });