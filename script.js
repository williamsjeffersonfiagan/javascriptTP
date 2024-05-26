document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('clickButton').addEventListener('click', function() {
        let userName = prompt('Please enter your name:');
        if (userName) {
            document.getElementById('updateContent').textContent = userName;
        }
    });
});
