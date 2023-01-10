export default function insertNavbar() {
	document.querySelector('#container').insertAdjacentHTML(
		'afterbegin',
		`<div class="nav">
                <div class="nav-1">Home</div>
                <div class="nav-2">Menu</div>
                <div class="nav-3">Contact</div>
        </div>
`
	);
}
