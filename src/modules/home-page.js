export default function createHomePage() {
	document.querySelector('#container').insertAdjacentHTML(
		'beforeend',
		`
    <div class='content'>
		<div class='background-image'></div>
		<div class='home-container'>
			<div class='title-container'>
				<h1>Whiskers</h1>
				<h2>Cat Cafe</h2>
			</div>
			<button class='order'>Order Now</button>
			<button class='rsvp'>RSVP</button>

			<div class='hours-container'>
				<h1>Hours</h1>
				<div class='hours'>
					<div class='hours-weekday'>
						<h2>Mon-Fri</h2>
						<p>10am - 5pm</p>
					</div>
					<div class='hours-sat'>
						<h2>Sat</h2>
						<p>noon - 7pm</p>
					</div>
					<div class='hours-sun'>
						<h2>Sun</h2>
						<p>closed</p>
					</div>
				</div>
			</div>
		</div>
	</div>`
	);
}
