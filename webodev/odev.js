<script>
    let currentImageIndex = 0;
    const images = [
    { src: "a.jpg", info: "Ankara, 2010" },
    { src: "b.jpg", info: "Uluslararası YBS Konferansından, 2020" },
    { src: "c.jpg", info: "İstanbul Gezisi, 2021" },
    { src: "d.jpg", info: "Ege Kıyıları, 2019" },
    { src: "e.jpg", info: "Paris, 2018" }
    ];
    function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    const imageElement = document.getElementById('changeableImage');
    const infoElement = document.getElementById('imageInfo');
    imageElement.src = images[currentImageIndex].src;
    imageElement.alt = images[currentImageIndex].info;
    infoElement.textContent = images[currentImageIndex].info;
}
</script>


