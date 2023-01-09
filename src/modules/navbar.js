export default function insertNavbar() {
	document.querySelector('#container').insertAdjacentHTML(
		'afterbegin',
		`<div class="header">
    <div class="header-name">
        <!-- <div>Whiskers</div> -->
        <!-- <div>and</div> -->
        <div>
            Whiskers
            <br />
            and
            <br />
            Treats
        </div>
    </div>
    <div class="options-container">
        <div class="options">
            <div class="nav home">Home</div>
            <div class="nav menu">Menu</div>
            <div class="nav contact">Contact</div>
        </div>
    </div>
    <div class="header-name hidden">
        Whiskers
        <br />
        and
        <br />
        Treats
    </div>
</div>
`
	);
}
