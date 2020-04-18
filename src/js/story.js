import myImg from '../img/photo-1490818387583-1baba5e638af.jpg'
import burger from "../img/sk-uVPV_nV17Tw-unsplash.jpg";

export const render = () => {
    const page = document.querySelector('.page');
    page.innerHTML = `<div class="food-item">
<img src="${myImg}" width="400px" height="400px">
<div class="story-title">It all began like this...</div>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id ultrices risus, nec blandit turpis. Sed dignissim, dolor vitae rhoncus aliquet, ex quam aliquam magna, sit amet iaculis metus felis id enim. Aliquam consectetur consequat ullamcorper. Sed condimentum euismod urna, luctus congue nisi ullamcorper ac. Nunc faucibus aliquam elit at pharetra. Etiam tincidunt justo eget sagittis vulputate. Nam bibendum at mi id sollicitudin. Nulla facilisi. Pellentesque quis iaculis leo. Suspendisse potenti. Fusce mattis odio odio, at fermentum nunc bibendum vitae. Cras eu metus mattis, pellentesque turpis at, efficitur felis.
</div>`
}