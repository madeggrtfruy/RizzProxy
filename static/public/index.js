function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const dateString = now.toLocaleDateString();
    document.getElementById('time-date').textContent = `${dateString} ${timeString}`;
}

setInterval(updateTime, 1000);
updateTime();

const addBookmarkButton = document.getElementById('add-bookmark');
const addBookmarkModal = document.getElementById('add-bookmark-modal');
const saveBookmarkButton = document.getElementById('save-bookmark');
const bookmarksContainer = document.getElementById('bookmarks');

addBookmarkButton.addEventListener('click', () => {
    addBookmarkModal.style.display = 'flex';
});

saveBookmarkButton.addEventListener('click', () => {
    const name = document.getElementById('bookmark-name').value;
    const url = document.getElementById('bookmark-url').value;

    if (name && url) {
        const link = document.createElement('a');
        link.href = `proxy.php?url=${encodeURIComponent(url)}`;
        link.className = 'bookmark';

        const img = document.createElement('img');
        img.src = `https://www.google.com/s2/favicons?sz=64&domain_url=${encodeURIComponent(url)}`;
        img.alt = name;
        link.appendChild(img);

        const span = document.createElement('span');
        span.textContent = name;
        link.appendChild(span);

        bookmarksContainer.appendChild(link);

        addBookmarkModal.style.display = 'none';
    }
});

const aboutBlankCloakerButton = document.getElementById('about-blank-cloaker');

aboutBlankCloakerButton.addEventListener('click', () => {
    SHS();
});

function SHS() {
    window.open("https://docs.google.com");
    window.open("https://drive.google.com");
    window.open("https://classroom.google.com");
    window.open("https://classroom.google.com/u/1/a/not-turned-in/all");
    window.open("https://slides.google.com");
    window.open("https://google.com");
    window.open("https://youtube.com");
    window.open("https://www.edpuzzle.com");
    window.open("https://www.gmail.com");
    window.open("https://sheets.google.com");
    window.open("https://www.google.com/search?q=12*24&sca_esv=3a3d99a76b27b006&sca_upv=1&rlz=1C1RXQR_enUS1083US1083&sxsrf=ACQVn09V_SVsiKr0Gc3aMU_yZ5-rWYiOAQ%3A1713404586665&sca_upv=1");
    window.open("https://www.google.com/search?q=288%2F61&sca_esv=3a3d99a76b27b006&sca_upv=1");
    window.open("https://www.google.com/search?q=formula+for+volume+of+a+cylinder");
    window.open("https://www.google.com/search?q=formula+for+circufrence+of+a+circle");
    window.open("https://drive.google.com/drive/u/0/");
    window.open("https://drive.google.com/drive/u/0/my-drive");
    window.open("https://drive.google.com/drive/u/0/starred");
    window.open("https://drive.google.com/drive/u/0/shared-with-me");
    window.open("https://drive.google.com/drive/u/0/trash");
    window.open("https://mail.google.com/mail/u/0/?tab=rm&ogbl#snoozed");
    window.open("https://mail.google.com/mail/u/0/?tab=rm&ogbl#drafts");
    window.open("https://mail.google.com/mail/u/0/?tab=rm&ogbl#sent");
    window.open("https://www.google.com/search?q=calculator");
}

window.onload = function () {
    const savedImage = localStorage.getItem("homepageBackgroundImage");

    // Get the root element
    const root = document.documentElement;

    // If a background image is saved in localStorage, set it as the background of the body
    if (savedImage) {
        root.style.setProperty('--background-image', `url(${savedImage})`);
    }
};
