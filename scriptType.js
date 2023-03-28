"use strict";
var MainPara = document.getElementById("MainTitle");
var secondParaContent = "an Engineer";
var thirdParaContent = "a Developer()";
var f;
var q;
var k;
var i;
function addBack() {
    MainPara.innerHTML += "|";
}
MainPara.style.color = "white";
engineerWriter();
function engineerWriter() {
    q = 0;
    setTimeout(() => {
        var engineer = setInterval(() => {
            if (q < secondParaContent.length) {
                MainPara.innerHTML += secondParaContent.charAt(q);
                q++;
            }
            else {
                MainPara.style.color = "#1e63c4";
                MainPara.innerHTML.charAt(MainPara.innerHTML.length - 1);
                f = MainPara.innerHTML.length - 1;
                deleteWriter();
                clearInterval(engineer);
            }
        }, 90);
    }, 200);
}
function deleteWriter() {
    setTimeout(() => {
        var deleter = setInterval(() => {
            if (f >= 0) {
                MainPara.innerHTML = MainPara.innerHTML.slice(0, -1);
                MainPara.style.color = "white";
                f--;
            }
            else {
                developerWriter();
                k = 0;
                clearInterval(deleter);
            }
        }, 90);
    }, 6000);
}
function developerWriter() {
    setTimeout(() => {
        var developer = setInterval(() => {
            if (k < thirdParaContent.length) {
                MainPara.innerHTML += thirdParaContent.charAt(k);
                k++;
            }
            else {
                MainPara.style.color = "#dccd79";
                i = MainPara.innerHTML.length - 1;
                secondDeletionFunction();
                clearInterval(developer);
            }
        }, 90);
    }, 200);
}
function secondDeletionFunction() {
    setTimeout(() => {
        var secondDeleter = setInterval(() => {
            if (i >= 0) {
                MainPara.innerHTML = MainPara.innerHTML.slice(0, -1);
                MainPara.style.color = "white";
                i--;
            }
            else {
                clearInterval(secondDeleter);
                engineerWriter();
            }
        }, 90);
    }, 6000);
}
//Event listener for scroll intersection
const observed = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenScroll = document.querySelectorAll('.hidden');
hiddenScroll.forEach((el) => observed.observe(el));
