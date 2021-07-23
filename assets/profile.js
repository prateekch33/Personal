$(window).on('load', function () {
    setTimeout(removeLoader, 2000); //wait for page load PLUS two seconds.
});
$(document).ready(function () {
    $(this).scrollTop(0);
});
function removeLoader() {
    $(".pre-loader").fadeOut(500, function () {
        $(".pre-loader").remove();
    });
}
submit.addEventListener("click", function () {
    alert("I will contact you soon. Thanks for Contacting.\nAny mail from \"prateekchandra76@gmail.com\" is valid and we will communicate thorugh this only.\nBut please don't send any mail directly.\nFirst Fill the form then you get the reply soon after that we can communicate.🙂");
});