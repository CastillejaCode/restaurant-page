export default function createAboutPage() {
	document.querySelector('#container').insertAdjacentHTML(
		'beforeend',
		`
    <div class="content">
    <div class="background-image"></div>
    <div class="information-container">
        <div class="information">
            <div class="prices-information">
                <h1>Prices</h1>
                <p>$5 for every 30 minutes spent in cafe</p>
            </div>
            <div class="hours-information">
                <h1>Hours</h1>
                <div class="hours-information-container">
                    <div class="hours-weekday">
                        <h2>Mon-Fri</h2>
                        <p>10am - 5pm</p>
                    </div>
                    <div class="hours-sat">
                        <h2>Sat</h2>
                        <p>noon - 7pm</p>
                    </div>
                    <div class="hours-sun">
                        <h2>Sun</h2>
                        <p>closed</p>
                    </div>
                </div>
            </div>
            <div class="location-information">
                <h1>Location</h1>
                <p>
                    <a
                        href="https://www.google.com/maps/place/Ao+Island/@33.7357533,132.4788776,16z/data=!3m1!4b1!4m5!3m4!1s0x3545615a1e5be903:0xa6a816cd520f72b0!8m2!3d33.7357118!4d132.4816635"
                    >
                        Nagahamacho Aoshima, Ozu, Ehime 799-3470, Japan
                    </a>
                </p>
            </div>
        </div>
    </div>
</div>
    `
	);
}
