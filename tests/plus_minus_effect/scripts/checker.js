function checker(form, box_name) {
    var box = document.getElementById(box_name);
    switch(box_name) {
        case 'box1':
            if (form.answer1.value == 5) {
                box.style.background='rgb(161, 255, 21)';
                localStorage.setItem(box_name, 'rgb(161, 255, 21)');
                localStorage.setItem(box_name + "_answer", form.answer1.value);
            } else {
                localStorage.setItem(box_name + "_answer_flag", -1);
            }
            break;
        case 'box2':
            if (form.answer2.value == 44) {
                box.style.background='rgb(161, 255, 21)';
                localStorage.setItem(box_name, 'rgb(161, 255, 21)');
                localStorage.setItem(box_name + "_answer", form.answer2.value);
            } else {
                localStorage.setItem(box_name + "_answer_flag", -1);
            }
            break;
        case 'box3':
            if (form.answer3.value == 285) {
                box.style.background='rgb(161, 255, 21)';
                localStorage.setItem(box_name, 'rgb(161, 255, 21)');
                localStorage.setItem(box_name + "_answer", form.answer3.value);
            } else {
                localStorage.setItem(box_name + "_answer_flag", -1);
            }
            break;
        case 'box4':
            if (form.answer4.value == 24) {
                box.style.background='rgb(161, 255, 21)';
                localStorage.setItem(box_name, 'rgb(161, 255, 21)');
                localStorage.setItem(box_name + "_answer", form.answer4.value);
            } else {
                localStorage.setItem(box_name + "_answer_flag", -1);
            }
            break;
        case 'box5':
            if (form.answer5.value == 13) {
                box.style.background='rgb(161, 255, 21)';
                localStorage.setItem(box_name, 'rgb(161, 255, 21)');
                localStorage.setItem(box_name + "_answer", form.answer5.value);
            } else {
                localStorage.setItem(box_name + "_answer_flag", -1);
            }
            break;
        case 'box6':
            if (form.answer6.value == 6) {
                box.style.background='rgb(161, 255, 21)';
                localStorage.setItem(box_name, 'rgb(161, 255, 21)');
                localStorage.setItem(box_name + "_answer", form.answer6 .value);
            } else {
                localStorage.setItem(box_name + "_answer_flag", -1);
            }
            break;
        case 'box7':
            if (form.answer7.value == 31) {
                box.style.background='rgb(161, 255, 21)';
                localStorage.setItem(box_name, 'rgb(161, 255, 21)');
                localStorage.setItem(box_name + "_answer", form.answer7 .value);
            } else {
                localStorage.setItem(box_name + "_answer_flag", -1);
            }
            break;
        case 'box8':
            if (form.answer8.value == 17) {
                box.style.background='rgb(161, 255, 21)';
                localStorage.setItem(box_name, 'rgb(161, 255, 21)');
                localStorage.setItem(box_name + "_answer", form.answer8.value);
            } else {
                localStorage.setItem(box_name + "_answer_flag", -1);
            }
            break;
        case 'box9':
            if (form.answer9.value == 42) {
                box.style.background='rgb(161, 255, 21)';
                localStorage.setItem(box_name, 'rgb(161, 255, 21)');
                localStorage.setItem(box_name + "_answer", form.answer9.value);
            } else {
                localStorage.setItem(box_name + "_answer_flag", -1);
            }
            break;
        case 'box10':
            if (form.answer10.value == 112) {
                box.style.background='rgb(161, 255, 21)';
                localStorage.setItem(box_name, 'rgb(161, 255, 21)');
                localStorage.setItem(box_name + "_answer", form.answer10.value);
            } else {
                localStorage.setItem(box_name + "_answer_flag", -1);
            }
            break;
    }
}