export default function insertNavbar() {
	document.querySelector('#container').insertAdjacentHTML(
		'afterbegin',
		`<div class="header">
    <div class="header-name">
        <!-- <div>Whiskers</div> -->
        <!-- <div>and</div> -->
        <div>
            Whiskers
          
            and
           
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
        
        and
       
        Treats
    </div>
</div>
`
	);
}
