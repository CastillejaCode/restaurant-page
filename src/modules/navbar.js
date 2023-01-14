export default function insertNavbar() {
	document.querySelector('#container').insertAdjacentHTML(
		'afterbegin',
		`<div class="nav">
                <div class="nav-1 navs">Home</div>
                <div class="nav-2 navs">Menu</div>
                <div class="nav-3 navs">About</div>
        </div>
`
	);
}
