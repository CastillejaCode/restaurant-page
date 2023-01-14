export default function createMenu() {
	document.querySelector('#container').insertAdjacentHTML(
		'beforeend',
		`<div class="content">
    <div class="background-image"></div>
    <div class="menu-container">
        <div class="food-container">
            <div class="food-title">Coffee</div>
            <div class="food-grid">
                <div class="food">
                    <h1>Meow Meow Delight</h1>
                    <p>Delicious espresso with a hint of vanilla</p>
                    <p>$4</p>
                </div>
                <div class="food">
                    <h1>Purrfect Punch</h1>
                    <p>Strong espresso, notes of bergamot and vanilla</p>
                    <p>$5</p>
                </div>
                <div class="food">
                    <h1>Whispers and Whiskers</h1>
                    <p>Latte brewed with Organic Polish beans</p>
                    <p>$6</p>
                </div>
                <div class="food">
                    <h1>Divine Feline</h1>
                    <p>Americano with fruit medley and ice cream</p>
                    <p>$7</p>
                </div>
                <div class="food">
                    <h1>Catastrophe</h1>
                    <p>
                        Random coffee for those who just want something with caffeine
                    </p>
                    <p>$4</p>
                </div>
                <div class="food">
                    <h1>Paws and Play</h1>
                    <p>Vietnamese coffee with lavender garnish</p>
                    <p>$7</p>
                </div>
            </div>
        </div>
        <div class="food-container">
            <div class="food-title">Sweets</div>
            <div class="food-grid">
                <div class="food">
                    <h1>Chocolate Kitty Paws</h1>
                    <p>Soft bear paws with a dark chocolate inside</p>
                    <p>$5</p>
                </div>
                <div class="food">
                    <h1>Sweet Tooth Tails</h1>
                    <p>Churros topped with cane sugar</p>
                    <p>$4</p>
                </div>
                <div class="food">
                    <h1>Happy Cat</h1>
                    <p>Cat-shaped doughnut with lemon custard</p>
                    <p>$3</p>
                </div>
                <div class="food">
                    <h1>Catnip Matcha Beans</h1>
                    <p>Doughnuts holes with sprinkled matcha</p>
                    <p>$7</p>
                </div>
                <div class="food">
                    <h1>Cheesy Bread</h1>
                    <p>Brioche bread with hard cheddar melted inside</p>
                    <p>$7</p>
                </div>
                <div class="food">
                    <h1>Jello</h1>
                    <p>Jello</p>
                    <p>$3</p>
                </div>
            </div>
           
        </div>
        </div>
</div>`
	);
}
