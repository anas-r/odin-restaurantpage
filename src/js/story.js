import myImg from '../img/photo-1490818387583-1baba5e638af.jpg'
import burger from "../img/sk-uVPV_nV17Tw-unsplash.jpg";

export const render = () => {
    const page = document.querySelector('.page');
    page.innerHTML = `
<div class="food-story">
<img src="${myImg}" width="400px" height="400px" alt="">
<div class="story-title">It all began like this...</div>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit leo, posuere ac dignissim at, rutrum sed mi. Donec sed suscipit nisl. Suspendisse maximus et elit ut placerat. Fusce semper est est, vitae ullamcorper lectus interdum et. Donec at ligula venenatis, luctus dui sed, varius ligula. Maecenas ut feugiat orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis sagittis luctus purus at porttitor.</p>

<p>Proin ut libero ac erat gravida tempor. Vivamus aliquam, leo ornare mattis lobortis, metus nisi commodo lectus, fringilla laoreet sem nunc et sem. Nulla sagittis enim lacus, ac tempor nisl mattis in. Mauris euismod at erat in blandit. Nunc quis ligula et leo congue porttitor nec volutpat velit. Nam aliquet tellus nibh, molestie interdum nulla elementum in. Cras scelerisque hendrerit ex sit amet posuere. Quisque nulla augue, tempor vel enim quis, pulvinar congue ipsum. In vitae facilisis ante. Vivamus vitae maximus lacus. Fusce lobortis vulputate velit, sed efficitur risus tristique in.</p>

<p>Cras volutpat felis libero, eget congue odio placerat ut. Ut congue urna id massa tincidunt, ut malesuada ante sagittis. Sed suscipit volutpat est nec tincidunt. Praesent viverra eros eu rhoncus vestibulum. Cras laoreet leo ex, tincidunt suscipit tortor ultricies nec. Donec sem nunc, accumsan vel ultricies id, porttitor at erat. Maecenas efficitur cursus lacus vel mollis. Aenean luctus ligula et elementum malesuada. Etiam lorem risus, posuere sit amet malesuada in, molestie aliquet orci. Nam dictum aliquet dui, vitae semper nulla laoreet quis.</p>

<p>In purus justo, accumsan et pharetra blandit, dignissim non nulla. Sed sapien augue, molestie nec felis a, vestibulum feugiat nunc. Suspendisse potenti. Etiam non vulputate ligula. In nec sollicitudin ligula, in faucibus ex. Ut quam neque, porta at eros quis, blandit pulvinar elit. Donec tempus ornare euismod. Vivamus pretium ornare tortor, ut varius est convallis ut. Suspendisse in libero id odio ultricies faucibus a vel tellus. Fusce quis quam ipsum. Sed venenatis elit vel finibus feugiat.</p>
<div class="story-title" style="font-size: large">From the founders of <span style="font-family: 'Lily Script One', cursive">Fresh</span></div>
</div>`
}