import burger from "../img/sk-uVPV_nV17Tw-unsplash.jpg";
import sandwich from "../img/mae-mu-GIUc-l74UT8-unsplash.jpg";
import pizza from "../img/ivan-torres-MQUqbmszGGM-unsplash.jpg"

export const render = () => {
    const page = document.querySelector('.page');
    page.innerHTML = `<div class="food-item">
<img src="${burger}" width="300px" height="300px">
<h2>Classic Burger</h2>
<div class="food-price">$6.99</div>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla nisl mi, in sollicitudin est luctus eu. Cras tempor ante sapien. Duis odio dolor, facilisis sed dictum at, congue id neque. Sed et semper justo. Nam scelerisque, enim vel suscipit efficitur, purus nibh aliquam nisi, non aliquam risus est quis lectus. </p>
</div>
<div class="food-item">
<img src="${sandwich}" width="300px" height="300px">
<h2>Club Sandwich</h2>
<div class="food-price">$8.99</div>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla nisl mi, in sollicitudin est luctus eu. Cras tempor ante sapien. Duis odio dolor, facilisis sed dictum at, congue id neque. </p>
</div>
<div class="food-item">
<img src="${pizza}" width="300px" height="300px">
<h2>Rustic Pizza</h2>
<div class="food-price">$12.99</div>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla nisl mi, in sollicitudin est luctus eu. Cras tempor ante sapien. Duis odio dolor, facilisis sed dictum at, congue id neque. Sed et semper justo. Nam scelerisque, enim vel suscipit efficitur, purus nibh aliquam nisi, non aliquam risus est quis lectus. </p>
</div>`
}