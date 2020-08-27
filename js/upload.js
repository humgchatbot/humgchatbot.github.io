var feedback = function(res) {
    if (res.success === true) {
        var get_link = res.data.link.replace(/^http:\/\//i, 'https://');
        /*document.querySelector('.contact-img').classList.add('bg-success');*/
        document.querySelector('.contact-img').innerHTML = `<img class="img-fluid img" src="${get_link}" alt="confession">`;
        document.querySelector('#link').value = get_link;
    }
};

new Imgur({
    clientid: 'adf24fa6db23b39',
    callback: feedback
});